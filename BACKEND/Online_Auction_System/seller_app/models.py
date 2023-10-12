from django.db import models
from user_app.models import User

# Create your models here.

class ProductInformation(models.Model):
    product_id = models.BigAutoField(primary_key=True)
    product_name = models.CharField(max_length=30)
    product_description = models.TextField()
    product_manufacture_year = models.PositiveIntegerField(blank=True)
    product_base_price = models.FloatField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='products')
    product_verify = models.BooleanField(default=False)

class ProductImages(models.Model):
    product_images = models.ImageField(blank=True, upload_to='product_images/')
    product = models.ForeignKey(ProductInformation, on_delete=models.CASCADE, related_name='product_imagess')
