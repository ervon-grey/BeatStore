from django.db import models
import uuid

# Create your models here.
class Payment(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    license = models.ForeignKey('core.License', on_delete=models.CASCADE)
    buyer_name = models.CharField(max_length=255)
    buyer_artist_name = models.CharField(max_length=255)
    buyer_email = models.CharField(max_length=255)
    psp_info = models.JSONField() #PaymentServiceProvider (PayPal) API Information about the Payment
    expiration_id = models.UUIDField(default=uuid.uuid4,editable=False) #DL will be sent to buyer via Mail. Link active for 24h


