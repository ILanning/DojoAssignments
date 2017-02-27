from django.conf.urls import url
from . import views

urlpatterns = [
    url(r"^$", views.index, name = "Register"),
    url(r"^adduser$", views.addUser, name = "AddUser"),
    url(r"^login$", views.login, name = "Login"),
    url(r"^logout$", views.logout, name = "Logout")
]
