# from django.shortcuts import render
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import ListView
from rest_framework.views import APIView
from rest_framework import viewsets, views
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListCreateAPIView

#
from rest_framework.viewsets import ViewSet, ModelViewSet

from .models import user_profile, user as User, progress_day
from .serializers import user_serializer, progress_day_serializer
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
        user = User.objects.create_user(
            self.request.data["username"],
            self.request.data["email"],
            self.request.data["password"],
        )
        user.save()
        _user_profile = user_profile.objects.create(
            user_id=user.id,
            payment_period=self.request.data["payment_period"],
            payment_for=self.request.data["payment_for"],
            currency=self.request.data["currency"],
            language=self.request.data["language"],
        )
        _user_profile.save()

        return Response(user_profile)


#

# @csrf_exempt
class progress_day_viewset(viewsets.ModelViewSet):
    queryset = progress_day.objects.all()
    serializer_class = progress_day_serializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        owner = self.request.user.username
        data = self.request.data
        day = data["day"]
        date = data["date"]
        income = data["income"]
        progress = data["progress"]
        try:
            total_income = data["total_income"]
        except KeyError:
            last_object = (
                progress_day.objects.filter(owner=self.request.user.username)
                .order_by("date")
                .values()
                .last()
            )
            try:
                last_income = last_object["income"]
            except KeyError:
                last_income = 0

            total_income = float(income) + float(last_income)
        try:
            total_progress = data["total_progress"]
        except KeyError:
            last_object = (
                progress_day.objects.filter(owner=self.request.user.username)
                .order_by("date")
                .values()
                .last()
            )
            try:
                last_progress = last_object["progress"]
            except KeyError:
                last_progress = 0
            total_progress =float(progress) + float(last_progress)

        _day = progress_day.objects.create(
            owner=owner,
            day=day,
            date=date,
            income=income,
            total_income=total_income,
            progress=progress,
            total_progress=total_progress,
        )


#
