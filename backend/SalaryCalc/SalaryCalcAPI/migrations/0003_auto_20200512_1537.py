# Generated by Django 3.0.3 on 2020-05-12 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SalaryCalcAPI', '0002_user_profile_account_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user_profile',
            name='fix_commission',
            field=models.BooleanField(auto_created=True, default=True),
        ),
    ]