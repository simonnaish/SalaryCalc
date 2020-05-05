export const PAYMENT_RADIOS_GROUP= ['Daily', 'Weekly', 'Monthly', 'Yearly']
export const PAYMENT_FOR_GROUP=['Person', 'Hour', 'Lesson']
export const CURRENCIES =[{'name':'AUD','symbol':'$'},{'name':'EUR','symbol':'€'},{'name':'USD','symbol':'$'},{'name':'RUB','symbol':'₽'},
{'name':'PLN','symbol':'zł'}]

export const LANGUAGES_SELECT=[{'name':'Polish','id':'PL'},{'name':'English','id':'UK'}, {'name':'Spanish','id':'ESP'},{'name':"Italian",'id':'IT'}]

export const DAILY_PROGRESS= [{ 'day': 1, 'date': '20-01-2020', 'income': 17, 'totalIncome': 12, 'progress': 3, 'totalProgress':3 },
{ 'day': 2, 'date': '20-02-2020', 'income': 15, 'totalIncome': 17, 'progress': 4, 'totalProgress':7 },
{'day':3,'date':'20-02-2020','income':14,'totalIncome':31,'progress':3, 'totalProgress':10},
{'day':4,'date':'24-02-2020','income':12,'totalIncome':43,'progress':2, 'totalProgress':12},
{'day':5,'date':'12-01-2020','income':18,'totalIncome':58,'progress':3, 'totalProgress':15},
{'day':6,'date':'2-03-2020','income':12,'totalIncome':70,'progress':2, 'totalProgress':17}] //TODO

function getSnackBarDetails(type:string):{color:string, icon:string}{
    let details:{color:string, icon:string}
    if(type=='positive'){

    }else if(type=='negative'){

    }else{

    }
    return details;
}