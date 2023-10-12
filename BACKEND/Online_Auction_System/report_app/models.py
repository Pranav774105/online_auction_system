from django.db import models
from auction_app.models import AuctionDetails, Bidders
from user_app.models import User

# Create your models here.

class SuccessAuctions():
    auction = models.ForeignKey(AuctionDetails, on_delete=models.CASCADE, related_name='auctions')
    bidder = models.ForeignKey(Bidders, on_delete=models.CASCADE, related_name='s_bidder')
    bid_amount = models.FloatField()
    owner = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name='s_owner')


class CancelledAuctions():
    CANCEL_CHOICES = [
        ('owner', 'owner'),
        ('admin', 'admin')
    ]
    auction = models.ForeignKey(AuctionDetails, on_delete=models.CASCADE, related_name='c_auctions')
    cancelation_reason = models.TextField()
    cancelled_by = models.CharField(max_length=10, choices=CANCEL_CHOICES)