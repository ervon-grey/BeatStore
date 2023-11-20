from django.contrib.auth.models import User, Group
from core.models import Beat, License
from rest_framework import serializers


class LicenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = License
        fields = '__all__'


class BeatSerializer(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()
    licenses = serializers.SerializerMethodField()
    artwork_thumbnail = serializers.ImageField()

    class Meta:
        model = Beat
        exclude = ["wav_file", "for_sale","sample"]

    def get_tags(self, beat):
        tags_qs = beat.tags.get_queryset()
        tags_list = [tag.name for tag in tags_qs]
        tags_string = ', '.join(tags_list)
        return tags_string

    def get_licenses(self, beat):
        licenses = License.objects.filter(beat=beat)
        return LicenseSerializer(licenses, many=True).data
