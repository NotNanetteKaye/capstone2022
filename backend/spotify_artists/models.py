from django.db import models

# Create your models here.
class SpotifyArtist(models.Model):
    spotify_id = models.CharField(max_length=280)
    image = models.CharField(max_length=300)
    artist_name = models.CharField(max_length=280)
    genre = models.CharField(max_length=280)
    URI = models.CharField(max_length=280)
