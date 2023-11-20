from django.contrib import admin
from core.models import Beat, License
import nested_admin


class LicenseInline(nested_admin.NestedStackedInline):
    model = License


class BeatAdmin(nested_admin.NestedModelAdmin):
    inlines = [LicenseInline, ]
    readonly_fields = ['mp3_duration']

    def mp3_duration(self, obj, **kwargs): #formatted for admin panel
        return obj.duration.strftime("%M:%S")


admin.site.register(Beat, BeatAdmin)
