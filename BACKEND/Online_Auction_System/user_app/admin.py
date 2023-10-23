from django.contrib import admin
from .models import User

# Register your models here.

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'password', 'email', 'role', 'adhar_card', 'pan_card', 'passport_front', 'passport_back', 'contact_no', 'address', 'city', 'pincode')