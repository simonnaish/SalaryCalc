from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import user_profile, progress_day
from django.utils.translation import gettext_lazy as _
from .reuseable.my_crypto import code_message


class AuthTokenSerializerOverride(serializers.Serializer):
    username = serializers.CharField(label=_("Username"))
    password = serializers.CharField(
        label=_("Password"), style={"input_type": "password"}, trim_whitespace=False
    )

    def validate(self, attrs):
        coded_username = attrs.get("username")
        coded_password = attrs.get("password")
        username = code_message(coded_username, coded_username, "decode")
        password = code_message(coded_username, coded_password, "decode")

        if username and password:
            user = authenticate(
                request=self.context.get("request"),
                username=username,
                password=password,
            )

            if not user:
                msg = _("Unable to log in with provided credentials.")
                raise serializers.ValidationError(msg, code="authorization")
        else:
            msg = _('Must include "username" and "password".')
            raise serializers.ValidationError(msg, code="authorization")

        attrs["user"] = user
        return attrs


class change_password_serializer(serializers.Serializer):
    model = User

    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)


class user_serializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = user_profile
        fields = "__all__"


class progress_day_serializer(serializers.ModelSerializer):
    id = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = progress_day
        fields = "__all__"
