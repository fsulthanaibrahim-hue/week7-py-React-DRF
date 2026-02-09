from rest_framework import serializers
from .models import Student, Teacher, Course


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'name', 'course']

    def validate_name(self, value):
        if len(value) < 3:
            raise serializers.ValidationError("Name must contain at least 3 characters")
        return value


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class TeacherSerializer(serializers.ModelSerializer):        
    class Meta:
        model = Teacher
        fields = '__all__'
