from django.contrib import admin
from django.contrib import admin
from . models import StudentM

@admin.register(StudentM)
class StudentAdmin(admin.ModelAdmin):
    list_display=('roll','sname','num','mail','dob')


