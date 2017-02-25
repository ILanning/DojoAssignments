from django.conf.urls import url
from . import views

urlpatterns = [
    url(r"^$", views.index, name = "Index"),
    url(r"^login$", views.login),
    url(r"^create$", views.createUser),
    url(r"^success$", views.success)
]
