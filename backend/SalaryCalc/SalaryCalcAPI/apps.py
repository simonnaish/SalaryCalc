from django.apps import AppConfig


class SalarycalcapiConfig(AppConfig):
    name = 'SalaryCalcAPI'

    def ready(self):
        import backend.SalaryCalc.SalaryCalcAPI.signals