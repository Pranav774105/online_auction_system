from django.db import models
from user_app.models import User
from django.core import validators

# Create your models here.

def validate_product_name(value):
    if len(value) < 3:
        raise validators.ValidationError('Product name must have at list 3 charecters')

def validate_base_price(value):
    if value < 10:
        raise validators.ValidationError('Base price cannot be less than 10.')

def validate_product_description(product_info):
    if len(product_info) < 10:
        raise validators.ValidationError('Description must be at least 10 characters long.')

class ProductInformation(models.Model):
    product_id = models.BigAutoField(primary_key=True)
    product_name = models.CharField(max_length=30, validators=[validate_product_name])
    product_description = models.TextField(validators=[validate_product_description])
    product_manufacture_year = models.PositiveIntegerField(blank=True)
    product_base_price = models.FloatField(validators=[validate_base_price])
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='products')
    product_verify = models.BooleanField(default=False)

class ProductImages(models.Model):
    product_images = models.ImageField(blank=True, upload_to='product_images/')
    product = models.ForeignKey(ProductInformation, on_delete=models.CASCADE, related_name='product_imagess')
    


