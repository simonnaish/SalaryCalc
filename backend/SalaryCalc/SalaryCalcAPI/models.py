from django.conf import settings
from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models
from django.contrib.auth.models import User, AbstractUser
from .reuseable.constants import (
    PAYMENT_PERIOD_CHOICES,
    CURRENCY_CHOICES,
    LANGUAGE_CHOICES,
    PAYMENT_FOR_CHOICES,
)
from django.utils.translation import ugettext_lazy as _


class user(AbstractUser):
    user = models.CharField(max_length=20)
    email = models.EmailField(blank=True, null=True)

    # USERNAME_FIELD = 'user'
    # REQUIRED_FIELDS = ['username']

    # def __str__(self):
    #     return "{}".format(self.user)


class user_profile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="profile"
    )
    date_joined = models.DateTimeField(auto_now_add=True,)
    payment_period = models.TextField(choices=PAYMENT_PERIOD_CHOICES)
    payment_for = models.TextField(choices=PAYMENT_FOR_CHOICES)
    currency = models.TextField(choices=CURRENCY_CHOICES)
    language = models.TextField(choices=LANGUAGE_CHOICES)
    photo = models.ImageField(upload_to="uploads", blank=True)

    def __str__(self):
        return self.user.username


class progress_day(models.Model):
    owner=models.TextField(blank=True);
    day = models.IntegerField()
    date = models.DateField()
    income = models.FloatField()
    total_income = models.FloatField(blank=True)
    progress = models.FloatField()
    total_progress = models.FloatField(blank=True)

    def __str__(self):
        return self.date