# Generated by Django 4.2.6 on 2023-10-15 05:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0009_alter_user_pincode'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='pincode',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
