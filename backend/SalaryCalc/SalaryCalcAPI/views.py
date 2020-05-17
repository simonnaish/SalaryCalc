# from django.shortcuts import render
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import ListView
from rest_framework.views import APIView
from rest_framework import viewsets, views, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListCreateAPIView, UpdateAPIView
from .reuseable.my_crypto import code_message
#
from rest_framework.viewsets import ViewSet, ModelViewSet

from .models import user_profile, user as User, progress_day
from .serializers import (
    user_serializer,
    progress_day_serializer,
    change_password_serializer,
)
from .reuseable.permisions import IsOwnerProfile

# class HelloView(APIView):
#     permission_classes = (IsAuthenticated,)
#     def get(self, request):
#         content={'message':'hola'+str(request.user)}
#         return Response(content);
#


class register_user(ListCreateAPIView):
    queryset = user_profile.objects.all().values()
    serializer_class = user_serializer


    def perform_create(self, serializer):
        data = self.request.data
        user = User.objects.create_user(
            data["username"], data["email"], data["password"],
        )
        user.save()
        _user_profile = user_profile.objects.create(
            user_id=user.id,
            simple_view=True,
            basic_salary=data["basic_salary"],
            basic_salary_amount=data["basic_salary_amount"],
            calculate_taxes=data["calculate_taxes"],
            taxes_amount=data["taxes_amount"],
            fix_commission=data["fix_commission"],
            commission_amount=data["commission_amount"],
            payment_period=data["payment_period"],
            payment_for=data["payment_for"],
            currency=data["currency"],
            language=data["language"],
        )
        _user_profile.save()

        return Response(user_profile)


#     def put(self, request):
#         _user_profile=self.request.user;
#         data=self.request.data
#         params=['basic_salary','basic_salary_amount','calculate_taxes', 'taxes_amount', 'fix_commission', 'commission_amount', 'payment_period',
#                 'payment_for', 'currency','language']
#
#         for x in params:
#             if x in data:
#                 if x=='basic_salary':
#                     _user_profile.basic.salary=data[x];
#                 # _user_profile.x=data[x]
#         # user_profile.language=data['language'];
#
#         _user_profile.save()
#
#         return Response(_user_profile);
# #

# @csrf_exempt
class progress_day_viewset(viewsets.ModelViewSet):
    queryset = progress_day.objects.all().order_by("date")
    serializer_class = progress_day_serializer
    permission_classes = (IsOwnerProfile,)

    def get_queryset(self):
        return progress_day.objects.filter(owner=self.request.user.username).order_by(
            "date"
        )

    def perform_create(self, serializer):
        owner = self.request.user.username
        data = self.request.data
        day = data["day"]
        date = data["date"]
        idx = owner + str(date)
        income = data["income"]
        progress = data["progress"]
        for param in ["total_income", "total_progress"]:
            if int(data[param]) != 0:
                total = data[param]
                if param == "total_income":
                    total_income = total
                else:
                    total_progress = total
            else:
                # last_income=9999
                last_object = (
                    progress_day.objects.filter(owner=self.request.user.username)
                    .order_by("date")
                    .values()
                    .last()
                )
                try:
                    last = last_object[param]
                except:
                    last = 0
                if param == "total_income":
                    total_income = float(income) + float(last)
                else:
                    total_progress = float(progress) + float(last)

        _day = progress_day.objects.create(
            id=idx,
            owner=owner,
            day=day,
            date=date,
            income=income,
            total_income=total_income,
            progress=progress,
            total_progress=total_progress,
        )


class change_password_view(UpdateAPIView):

    serializer_class = change_password_serializer
    model = User
    permission_classes = (IsAuthenticated,)

    def get_object(self, queryset=None):
        obj = self.request.user
        return obj

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Check old password
            username=self.request.user.username;
            coded_old_password=serializer.data.get("old_password");
            decoded_old_password=code_message(username*3,coded_old_password, 'decode');
            coded_new_password = serializer.data.get("new_password");
            decoded_new_password = code_message(username*3, coded_new_password, 'decode');
            print(coded_old_password, coded_new_password)
            print(decoded_old_password, decoded_new_password)
            if not self.object.check_password(decoded_old_password):
                return Response(
                    {"old_password": ["Wrong password."]},
                    status=status.HTTP_400_BAD_REQUEST,
                )
            # set_password also hashes the password that the user will get
            self.object.set_password(decoded_new_password)
            self.object.save()
            response = {
                "status": "success",
                "code": status.HTTP_200_OK,
                "message": "Password updated successfully",
                "data": [],
            }

            return Response(response)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#
