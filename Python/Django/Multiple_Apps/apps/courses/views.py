from django.shortcuts import render, redirect
from .models import Course, Description, Comment
from django.db import connection
from ..login.models import User

def index(request):
    context = {
        "courses" : Course.objects.all()
    }
    return render(request, "courses/index.html", context)

def destroy(request, courseID):
    context = {
        "courseID" : courseID,
        "course" : Course.objects.get(id = courseID)
    }
    return render(request, "courses/delete.html", context)

def courses(request, courseID):
    parentCourse = Course.objects.get(id = courseID)
    context = {
        "course" : parentCourse,
        "comments" : Comment.objects.filter(course = parentCourse)
    }
    return render(request, "courses/comments.html", context)

def usersCourses(request):
    data = None
    with connection.cursor() as cursor:
        cursor.execute("SELECT courses_course.id, courses_course.name, count(login_user_courses.user_id) FROM courses_course LEFT JOIN login_user_courses ON courses_course.id = login_user_courses.course_id GROUP BY courses_course.id")
        data = cursor.fetchall()
    print data
    context = {
        "courseData" : data,
        "users" : User.objects.all()
    }
    return render(request, "courses/addUser.html", context)

def addCourse(request):
    course = Course(name = request.POST["name"])
    course.save()
    Description.objects.create(text = request.POST["description"], course = course)
    return redirect('Courses:Index')

def destroyCourse(request):
    Course.objects.get(id = request.POST["courseID"]).delete()
    return redirect("Courses:Index")

def addComment(request):
    courseID = request.POST["id"]
    Comment.objects.create(text = request.POST["comment"], course = Course.objects.get(id = courseID))
    return redirect("Courses:ViewCourse", courseID)

def addUser(request):
    User.objects.AddCourse(request.POST["user_id"], request.POST["course_id"])
    return redirect("Courses:UsersCourses")
