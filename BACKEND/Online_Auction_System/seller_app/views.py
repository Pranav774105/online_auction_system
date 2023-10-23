from django.shortcuts import render, redirect
from .models import  ProductInformation
from .serializers import ProductInformationSerializer
from rest_framework import viewsets
# Create your views here.

class ProductInformationViewSet(viewsets.ModelViewSet):
    serializer_class = ProductInformationSerializer
    queryset = ProductInformation.objects.all()
    
