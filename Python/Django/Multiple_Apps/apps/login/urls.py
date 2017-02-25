from django.conf.urls import url
from . import views

urlpatterns = [
    url(r"^$", views.index, name = "Index"),
    url(r"^login$", views.login, name = "Login"),
    url(r"^create$", views.createUser, name = "Create"),
    url(r"^success$", views.success, name = "Success")
]
