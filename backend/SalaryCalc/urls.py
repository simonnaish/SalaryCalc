"""SalaryCalc URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from .SalaryCalcAPI.reuseable.obtain_auth_token_override import obtain_auth_token_override

from .SalaryCalcAPI import views

router=routers.DefaultRouter()

router.register(r"progress-day", views.progress_day_viewset)

urlpatterns = [
    path("",include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-token-auth/', obtain_auth_token_override, name='api_token_auth'),
    path('create-user/', views.register_user.as_view(), name='register_user'),

]
