from rest_framework.test import APITestCase
from datetime import timedelta
from django.utils import timezone
from rest_framework import status
from events.models import Event
from django.contrib.auth.models import User

class AuthorisedCreateEventTestCase(APITestCase):

    def setUp(self):
        self.url = '/events/create/'
        self.user = User.objects.create_user(username='testuser', email='testuser@mail.com', password='testpass')
        self.access_token = self.client.post('/accounts/login/',{
            "username" : "testuser",
            "password" : "testpass"
        }).data['token']     
        self.client.credentials(HTTP_AUTHORIZATION=f'JWT {self.access_token}')
        self.valid_data = {
            "name": "testname",
            "description": "testdescription",
            "date_time": timezone.now() + timedelta(days=1),
            "contact_info": "test@mail.com",
            "latitude": 38.8951,
            "longitude": 77.0364,
        }
        self.invalid_data = {
            "description": "testdescription",
            "date_time": timezone.now() + timedelta(days=1),
            "contact_info": "test@mail.com",
            "latitude": 38.8951,
            "longitude": 77.0364,
        }
        self.invalid_date = {
            "name": "testname",
            "description": "testdescription",
            "date_time": timezone.now() - timedelta(days=1),
            "contact_info": "test@mail.com",
            "latitude": 38.8951,
            "longitude": 77.0364,
        }
    
    def test_authorised_valid_request_returns_201(self):
        response = self.client.post(self.url, self.valid_data)
        self.assertEquals(response.status_code, status.HTTP_201_CREATED)
    
    def test_authorised_valid_request_creates_event_in_database(self):
        response = self.client.post(self.url, self.valid_data)
        self.assertEquals(Event.objects.count(), 1)

    def test_authorised_invalid_request_returns_400(self):
        response = self.client.post(self.url, self.invalid_data)
        self.assertEquals(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_authorised_request_with_past_date_returns_error(self):
        response = self.client.post(self.url, self.invalid_date)
        error_message = 'Event cannot be created in the past.'
        self.assertEquals(str(response.data['date_time'][0]), error_message)

class UnauthorisedCreateEventTestCase(APITestCase):

    def setUp(self):
        self.url = '/events/create/'
        self.valid_data = {
            "name": "testname",
            "description": "testdescription",
            "date_time": timezone.now() + timedelta(days=1),
            "contact_info": "test@mail.com",
            "latitude": 38.8951,
            "longitude": 77.0364,
        }
    
    def test_unauthorised_valid_request_returns_401(self):
        response = self.client.post(self.url, self.valid_data)
        self.assertEquals(response.status_code, status.HTTP_401_UNAUTHORIZED)
        