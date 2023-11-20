from django.db import models
from taggit.managers import TaggableManager
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill
from django.db.models.signals import post_save
from django.dispatch import receiver
from mutagen.mp3 import MP3
from datetime import datetime, time


class Beat(models.Model):
    title = models.CharField(max_length=255)
    duration = models.TimeField(blank=True, null=True, editable=False)
    date = models.DateTimeField(auto_now_add=True)
    bpm = models.IntegerField(blank=True, null=True)
    tags = TaggableManager()
    sample = models.CharField(max_length=255, null=True, editable=False)
    spotlight = models.BooleanField(default=False) #if set to true beat will be shown on landing
    for_sale = models.BooleanField(default=True)
    mp3_file = models.FileField()
    wav_file = models.FileField(blank=True, null=True)
    mix_wav_file = models.FileField(blank=True, null=True)
    artwork = models.ImageField(
        upload_to="artworks", default="default_cover.jpg")
    artwork_thumbnail = ImageSpecField(source='artwork',
                                       processors=[ResizeToFill(160, 160)],
                                       format='JPEG',
                                       options={'quality': 80})

    def __str__(self):
        return self.title


@receiver(post_save, sender=Beat)
def set_beat_duration(sender, instance, created, **kwargs):
    # case for if someone changes the mp3_file
    previous_duration = instance.duration
    if (instance.mp3_file is not None):
        audio = MP3(instance.mp3_file.path)
        audio_length = audio.info.length  # float
        time_delta = datetime.utcfromtimestamp(audio_length).time()
        if time_delta.strftime('%H:%M:%S') != previous_duration:
            instance.duration = time_delta.strftime('%H:%M:%S')
            instance.save()


class License(models.Model):
    beat = models.ForeignKey('core.Beat', on_delete=models.CASCADE)
    license_types = [('B', 'Basic'), ('P', 'Premium'), ('U', 'Unlimited')]
    currencies = [('€', 'EUR'), ('$', 'USD')]
    currency = models.CharField(
        choices=currencies, default='€', max_length=255)
    license_type = models.CharField(choices=license_types, max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
