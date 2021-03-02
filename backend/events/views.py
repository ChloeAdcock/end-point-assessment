from events.models import Event
from rest_framework import permissions, generics
from .serializers import EventSerializer

class EventCreateView(generics.CreateAPIView):
    serializer_class = EventSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)

class EventListview(generics.ListAPIView):
    serializer_class = EventSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    queryset = Event.objects.all()
