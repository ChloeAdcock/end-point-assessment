from rest_framework_jwt.views import obtain_jwt_token
from django.urls import path
from .views import RegisterView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', obtain_jwt_token),
]
