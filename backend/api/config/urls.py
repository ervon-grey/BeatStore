from django.contrib import admin
from django.urls import include, path
from django.conf.urls.static import static
from django.conf import settings

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/', include('core.urls'), name="core"),
    path('api/', include('payments.urls'), name="payments"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
