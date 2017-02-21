from django.conf.urls import url
from . import views

urlpatterns = [
    url(r"^$", views.index),
    url(r"^courses/(?P<courseID>.*)$", views.courses),
    url(r"^create$", views.addCourse),
    url(r"^destroy/(?P<courseID>.*)$", views.destroy),
    url(r"^delete$", views.destroyCourse),
    url(r"^comment$", views.addComment)
]
