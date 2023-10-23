# Generated by Django 4.2.6 on 2023-10-12 08:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('seller_app', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('auction_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='bidders',
            name='bidder',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='bidders', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='automaticbidding',
            name='auction',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='auction_autobids', to='auction_app.auctiondetails'),
        ),
        migrations.AddField(
            model_name='automaticbidding',
            name='bidder',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='autobids', to='auction_app.bidders'),
        ),
        migrations.AddField(
            model_name='auctiondetails',
            name='product',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='auction', to='seller_app.productinformation'),
        ),
        migrations.AddField(
            model_name='allbids',
            name='auction',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='allauctionbids', to='auction_app.auctiondetails'),
        ),
        migrations.AddField(
            model_name='allbids',
            name='bidder',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='allbids', to='auction_app.bidders'),
        ),
    ]
