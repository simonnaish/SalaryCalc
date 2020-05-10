from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response

from ..models import user_profile


class ObtainAuthTokenOverride(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        _user_profile = user_profile.objects.filter(user=user).values()
        return Response({'token': token.key, 'user_profile':_user_profile})


obtain_auth_token_override = ObtainAuthTokenOverride.as_view()
