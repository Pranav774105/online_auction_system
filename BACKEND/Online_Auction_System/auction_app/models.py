from django.db import models
from seller_app.models import ProductInformation
from user_app.models import User

# Create your models here.

class AuctionDetails(models.Model):
    product = models.OneToOneField(ProductInformation, on_delete=models.CASCADE, related_name='auction')
    auction_id = models.BigAutoField(primary_key=True)
    auction_date = models.DateField(blank=True)
    auction_start_time = models.TimeField(blank=True)
    auction_end_time = models.TimeField(blank=True)
    increment_amount = models.FloatField(blank=True)

    def __str__(self) -> str:
        return f'{self.auction_id}'

class CurrentAuctions(models.Model):
    current_auction_id = models.BigAutoField(primary_key=True)
    auction = models.OneToOneField(AuctionDetails, on_delete=models.CASCADE, related_name='current_auctions')

class Bidders(models.Model):
    CHOICES = [('AUTOMATIC', 'automatic'), ('MANUAL', 'manual')]
    bidder_type = models.CharField(max_length=10, choices=CHOICES)
    bidder = models.OneToOneField(User, on_delete=models.CASCADE, related_name='bidders')

class AutomaticBidding(models.Model):
    max_bid_amount = models.FloatField(blank=True)
    inc_amount = models.FloatField(blank=True)
    bidder = models.ForeignKey(Bidders, on_delete=models.CASCADE, related_name='autobids')
    auction = models.ForeignKey(AuctionDetails, on_delete=models.CASCADE, related_name='auction_autobids') 

class CurrentBids(models.Model):
    bid_amount = models.FloatField()
    bidder = models.ForeignKey(Bidders, on_delete=models.CASCADE, related_name='currentbids')
    auction = models.ForeignKey(AuctionDetails, on_delete=models.CASCADE, related_name='auctionbids')

class AllBids(models.Model):
    bid_amount = models.FloatField()
    bidder = models.ForeignKey(Bidders, on_delete=models.CASCADE, related_name='allbids')
    auction = models.ForeignKey(AuctionDetails, on_delete=models.CASCADE, related_name='allauctionbids')

class ClosingBids(models.Model):
    closing_bid_amount = models.FloatField()
    bidder = models.ForeignKey(Bidders, on_delete=models.CASCADE, related_name='closing_bids')
    auction = models.ForeignKey(AuctionDetails, on_delete=models.CASCADE, related_name='closing_auctions')