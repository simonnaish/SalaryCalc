from rest_framework import serializers
from .models import user_profile, progress_day


class user_serializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = user_profile
        fields = "__all__"

class progress_day_serializer(serializers.ModelSerializer):
    id=serializers.StringRelatedField(read_only=True)
    class Meta:
        model= progress_day;
        fields= '__all__'