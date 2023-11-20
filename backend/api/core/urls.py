from django.urls import include, path
from core import views
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('beats/', views.getBeats, name="getBeats"),
]
