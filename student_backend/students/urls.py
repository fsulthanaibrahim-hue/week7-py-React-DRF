from django.urls import path
from .views import (
    StudentListCreateAPIView, StudentDetailAPIView, 
    CourseListCreateAPIView, CourseDetailAPIView,
    TeacherListCreateAPIView, TeacherDetailAPIView,
)

urlpatterns = [
    path("students/", StudentListCreateAPIView.as_view()),
    path("students/<int:pk>/", StudentDetailAPIView.as_view()),

    path("teachers/", TeacherListCreateAPIView.as_view()),
    path("teachers/<int:pk>/", TeacherDetailAPIView.as_view()),

    path("courses/", CourseListCreateAPIView.as_view()),
    path("courses/<int:pk>/", CourseDetailAPIView.as_view()),
]
