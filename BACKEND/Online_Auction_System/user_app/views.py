from .models import User
from .serializers import UserSerializer
from rest_framework import viewsets
# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()