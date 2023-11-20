from django.shortcuts import render
from rest_framework.decorators import api_view

# Create your views here.


@api_view(['GET', 'POST'])
def CreatePayPalOrder(request):
    pass


@api_view(['GET', 'POST'])
def CapturePayPalOrder(request):
    pass
