from django.urls import path
from .views import EventCreateView, EventListview

urlpatterns = [
    path('list/', EventListview.as_view()),
    path('create/', EventCreateView.as_view()),
]