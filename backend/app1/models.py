from django.db import models

class StudentM(models.Model):
    roll=models.IntegerField()
    sname=models.CharField(max_length=20)
    num=models.BigIntegerField()
    mail=models.EmailField()
    dob=models.DateField()
