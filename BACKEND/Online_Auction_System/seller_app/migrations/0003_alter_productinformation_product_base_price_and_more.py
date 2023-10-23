# Generated by Django 4.2.6 on 2023-10-15 04:50

from django.db import migrations, models
import seller_app.models


class Migration(migrations.Migration):

    dependencies = [
        ('seller_app', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productinformation',
            name='product_base_price',
            field=models.FloatField(validators=[seller_app.models.validate_base_price]),
        ),
        migrations.AlterField(
            model_name='productinformation',
            name='product_description',
            field=models.TextField(validators=[seller_app.models.validate_product_description]),
        ),
        migrations.AlterField(
            model_name='productinformation',
            name='product_name',
            field=models.CharField(max_length=30, validators=[seller_app.models.validate_product_name]),
        ),
    ]