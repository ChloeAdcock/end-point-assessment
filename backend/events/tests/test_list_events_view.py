from rest_framework.test import APITestCase
from datetime import timedelta
from rest_framework import status
from django.utils import timezone
from events.models import Event
from django.contrib.auth.models import User

class AuthorisedListEventsTestCase(APITestCase):

    def setUp(self):
        self.url = '/events/list/'
        self.user = User.objects.create_user(username='testuser', email='testuser@mail.com', password='testpass')
        self.future_event = Event.objects.create(name='future test', description='test', date_time=timezone.now() + timedelta(days=1),\
        contact_info='test@mail.com', latitude=38.8951, longitude=-77.0364, creator=self.user)
        self.past_event = Event.objects.create(name='past test', description='test', date_time=timezone.now() - timedelta(days=1),\
        contact_info='test@mail.com', latitude=38.8951, longitude=-77.0364, creator=self.user)
        self.access_token = self.client.post('/accounts/login/',{
            "username" : "testuser",
            "password" : "testpass"
        }).data['token']    
        self.client.credentials(HTTP_AUTHORIZATION=f'JWT {self.access_token}')

    def test_view_all_events_returns_200(self):
        response = self.client.get(self.url)
        self.assertEquals(response.status_code, status.HTTP_200_OK)

    def test_view_all_events_returns_future_event(self):
        response = self.client.get(self.url)
        self.assertEquals(response.data[0]["name"], "future test")

    def test_view_all_events_does_not_return_past_event(self):
        response = self.client.get(self.url)
        self.assertEquals(len(response.data), 1)
        self.assertEquals(Event.objects.count(), 2)

class UnauthorisedListEventsTestCase(APITestCase):

    def setUp(self):
        self.url = '/events/list/'
        self.user = User.objects.create_user(username='testuser', email='testuser@mail.com', password='testpass')
        self.event = Event.objects.create(name='future test', description='test', date_time=timezone.now() + timedelta(days=1),\
        contact_info='test@mail.com', latitude=38.8951, longitude=-77.0364, creator=self.user)
    
    def test_unauthorised_valid_request_returns_401(self):
        response = self.client.get(self.url)
        self.assertEquals(response.status_code, status.HTTP_401_UNAUTHORIZED)
        