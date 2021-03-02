from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth.models import User

class LoginUserTestCase(APITestCase):

    def setUp(self):
        self.url = '/accounts/login/'
        self.user = User.objects.create_user(username='testuser', email='testuser@mail.com', password='testpass')

    def test_valid_request_returns_200(self):
        response = self.client.post(self.url, {
            "username": "testuser",
            "password": "testpass"
        })
        self.assertEquals(response.status_code, status.HTTP_200_OK)

    def test_valid_request_returns_token(self):
        response = self.client.post(self.url, {
            "username": "testuser",
            "password": "testpass"
        })
        self.assertEquals("token" in response.data, True)

    def test_valid_request_returns_user(self):
        response = self.client.post(self.url, {
            "username": "testuser",
            "password": "testpass"
        })
        print(response.data)
        self.assertEquals(response.data["user"], {'id': 1, 'username': 'testuser', 'email': 'testuser@mail.com'})
    
    def test_invalid_request_returns_400(self):
        response = self.client.post(self.url, {
            "username": "testuser",
            "password": "wrongpass"
        })
        self.assertEquals(response.status_code, status.HTTP_400_BAD_REQUEST)