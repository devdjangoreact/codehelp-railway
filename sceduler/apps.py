from django.apps import AppConfig
from datetime import datetime



class ScedulerConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'sceduler'

    # def ready(self):
    #     from .jobs.backup import run_scheduler
    #     run_scheduler()
        