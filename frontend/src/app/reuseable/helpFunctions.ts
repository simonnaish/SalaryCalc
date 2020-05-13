export function getWorkDay(paymentPeriod: "Daily" | "Weekly" | "Monthly" | "Yearly"): number {
    switch (paymentPeriod) {
        case ("Daily"):
            return 1;

        case ("Weekly"):
            return new Date().getDay() + 1;

        case ("Monthly"):
            return new Date().getUTCDate();

        case ("Yearly"):
            let today = new Date();
            let first = new Date(today.getFullYear(), 0, 1);
            console.log(today)
            console.log(first)
            let day = Math.floor((Date.parse(today.toString()) - Date.parse(first.toString())) / 1000 / 60 / 60 / 24);
            return day;
    }
}

export function getDaysToSalary(workDay: number, paymentPeriod: "Daily" | "Weekly" | "Monthly" | "Yearly"): number {
    let workPeriod;
    console.log(paymentPeriod)
    switch (paymentPeriod) {
        case ("Daily"):
            workPeriod = 1;
            break;
        case ("Weekly"):
            workPeriod = 7;
            break;
        case ("Monthly"):
            workPeriod = daysInThisMonth();
            break;
        case ("Yearly"):
            if (new Date().getFullYear() % 4 == 0) {
                workPeriod = 366;
            } else {
                workPeriod = 365;
            }
            break;
            console.log(workDay, workPeriod)


    }
    return workPeriod - workDay;

}
export function daysInThisMonth() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}