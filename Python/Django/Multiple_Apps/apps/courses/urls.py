from django.conf.urls import url
from . import views

urlpatterns = [
    url(r"^$", views.index, name = "Index"),
    url(r"^courses/(?P<courseID>.*)$", views.courses, name = "ViewCourse"),
    url(r"^create$", views.addCourse, name = "Create"),
    url(r"^destroy/(?P<courseID>.*)$", views.destroy, name = "Destroy"),
    url(r"^delete$", views.destroyCourse, name = "Delete"),
    url(r"^comment$", views.addComment, name = "Comment"),
    url(r"^adduser$", views.addUser, name = "AddUser"),
    url(r"^users_courses$", views.usersCourses, name = "UsersCourses")
]
