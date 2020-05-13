//Registration dialog and settings

export const PAYMENT_RADIOS_GROUP = ['Daily', 'Weekly', 'Monthly', 'Yearly']
export const PAYMENT_FOR_GROUP = ['Person', 'Hour', 'Lesson']
export const CURRENCIES = [{ 'name': 'AUD', 'symbol': '$' }, { 'name': 'EUR', 'symbol': '€' }, { 'name': 'USD', 'symbol': '$' }, { 'name': 'RUB', 'symbol': '₽' },
{ 'name': 'PLN', 'symbol': 'zł' }]

export const LANGUAGES_SELECT = [{ 'name': 'Polish', 'id': 'PL' }, { 'name': 'English', 'id': 'UK' }, { 'name': 'Spanish', 'id': 'ES' }, { 'name': "Italian", 'id': 'IT' }]


//Services:
export const APIUrl = 'http://127.0.0.1:8000/'


//testing data
export const DAILY_PROGRESS = [{ 'day': 1, 'date': '2020-02-03', 'income': 17, 'totalIncome': 12, 'progress': 3, 'totalProgress': 3 },
{ 'day': 2, 'date': '2020-02-10', 'income': 15, 'totalIncome': 17, 'progress': 4, 'totalProgress': 7 },
{ 'day': 3, 'date': '2020-02-11', 'income': 14, 'totalIncome': 31, 'progress': 3, 'totalProgress': 10 },
{ 'day': 4, 'date': '2020-02-14', 'income': 12, 'totalIncome': 43, 'progress': 2, 'totalProgress': 12 },
{ 'day': 5, 'date': '2020-02-16', 'income': 18, 'totalIncome': 58, 'progress': 3, 'totalProgress': 15 },
{ 'day': 6, 'date': '2020-03-01', 'income': 12, 'totalIncome': 70, 'progress': 2, 'totalProgress': 17 }] //TODO

//day interfaces
export interface ProgressDay {
  day: number,
  date: string | Date,
  progress: number,
  totalProgress: number,
  income: number,
  totalIncome: number,
}
export interface APIProgressDay {
  day: number,
  date: string | Date,
  progress: number,
  total_progress: number,
  income: number,
  total_income: number,
}

//SnackBarMessages
export const connectionMessage="Ups, something went wrong.\nCheck your internet connection or try again later."
export const savedTable='Table saved. Check your "downloads" folder.'
export const unsecureChange=`Be carefull! Remember, that total amounts are calculated automaticly. \n
If you will change it here, mistake can appear in  the future!`