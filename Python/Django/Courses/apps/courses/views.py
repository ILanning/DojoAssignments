from django.shortcuts import render, redirect
from .models import Course, Description, Comment

def index(request):
    context = {
        "courses" : Course.objects.all()
    }
    return render(request, "courses/index.html", context)

def addCourse(request):
    course = Course(name = request.POST["name"])
    course.save()
    Description.objects.create(text = request.POST["description"], course = course)
    return redirect('/')

def destroy(request, courseID):
    context = {
        "courseID" : courseID,
        "course" : Course.objects.get(id = courseID)
    }
    return render(request, "courses/delete.html", context)

def destroyCourse(request):
    Course.objects.get(id = request.POST["courseID"]).delete()
    return redirect('/')

def courses(request, courseID):
    parentCourse = Course.objects.get(id = courseID)
    context = {
        "course" : parentCourse,
        "comments" : Comment.objects.filter(course = parentCourse)
    }
    return render(request, "courses/comments.html", context)

def addComment(request):
    courseID = request.POST["id"]
    Comment.objects.create(text = request.POST["comment"], course = Course.objects.get(id = courseID))
    return redirect('/courses/' + courseID)
