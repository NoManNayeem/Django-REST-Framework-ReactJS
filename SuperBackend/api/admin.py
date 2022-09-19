from django.contrib import admin
from .models.account_model import UserAccount

## Register Model To ADMIN Section ##

@admin.register(UserAccount)
class UserAccountAdmin(admin.ModelAdmin):
    list_display = ("user","accountType","phone","address")
    list_filter = ("user","accountType","phone","address")



