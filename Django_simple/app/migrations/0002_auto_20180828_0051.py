# Generated by Django 2.1 on 2018-08-27 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='students',
            name='address',
            field=models.CharField(max_length=250, verbose_name='家庭住址'),
        ),
        migrations.AlterField(
            model_name='students',
            name='name',
            field=models.CharField(max_length=50, verbose_name='姓名'),
        ),
    ]
