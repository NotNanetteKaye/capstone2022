from rest_framework import serializers
from .models import UpcomingEvent


class UpcomingEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = UpcomingEvent
        fields = ['id', 'user', 'title', 'when', 'address', 'description', 'image', 'link', 'user_id']
        depth = 1

    user_id = serializers.IntegerField(write_only=True)