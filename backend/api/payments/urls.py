from django.contrib import admin
from django.urls import include, path
from payments import views

urlpatterns = [
    path('payment/paypal/create_order',
         views.CreatePayPalOrder, name='create_pp_order'),
    path('payment/paypal/capture_order',
         views.CapturePayPalOrder, name='capture_pp_order')
]
