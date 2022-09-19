import os
from django.db import models
from datetime import datetime
from django.contrib.auth.models import User, Group
from rest_framework import serializers
from django.contrib import admin


############ Account Model #############
''' Improvising Profile Model with default USER Model to descriminate Admin, Client, and other user-types '''
class UserAccount(models.Model):
    class UserType(models.IntegerChoices):
        ADMIN = 1, "ADMIN"
        MODERATOR = 2, "MODERATOR"
        CLIENT = 3, "CLIENT"
    accountType = models.PositiveSmallIntegerField(choices=UserType.choices, blank=True, default=UserType.CLIENT)
    user = models.OneToOneField(User, on_delete=models.CASCADE, default=0)
    address = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=30, blank=True)
    def __str__(self):
        return self.user.username


############ Account Model Serializer #############

class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = "__all__"


