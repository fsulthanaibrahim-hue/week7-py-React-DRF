from django.db import models


class Course(models.Model):
    title = models.CharField(max_length=100)
    duration = models.IntegerField()

    def __str__(self):
        return self.title


class Teacher(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self):
        return self.name



class Student(models.Model):
    name = models.CharField(max_length=100)
    course = models.CharField(max_length=100)

    def __str__(self):
        return self.name





