from rest_framework_jwt.views import obtain_jwt_token
from django.urls import path
from .views import RegisterView, current_user_view

urlpatterns = [
    path('current_user/', current_user_view),
    path('register/', RegisterView.as_view()),
    path('login/', obtain_jwt_token),
]
