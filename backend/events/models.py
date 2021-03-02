from django.db import models
from django.utils import timezone
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User

def no_past(value):
    now = timezone.now()
    if value < now:
        raise ValidationError('Event cannot be created in the past.')

class Event(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    date_time = models.DateTimeField(validators=[no_past])
    contact_info = models.CharField(max_length=100)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    creator = models.ForeignKey(User, related_name='events', on_delete=models.CASCADE, null=True)
