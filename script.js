function checkDate() {

    let dayField = document.getElementById("day-field");
    let monthField = document.getElementById("month-field");
    let yearField = document.getElementById("year-field");


    let userDateInput = document.getElementById("date-input").value;
    let inputDateField = document.getElementById("date-input");
    let outPutDay = document.getElementById("difference-day-field");
    let DateNumber = parseInt(userDateInput);

    let userMonthInput = document.getElementById("month-input").value;
    let inputMonthField = document.getElementById("month-input");
    let outPutMonth = document.getElementById("difference-month-field");
    let MonthNumber = parseInt(userMonthInput)

    let userYearInput = document.getElementById("year-input").value;
    let inputYearField = document.getElementById("year-input");
    let outPutYear = document.getElementById("difference-year-field");
    let YearNumber = parseInt(userYearInput);

    let DateErrorMessage = document.getElementById("error-Message1");
    let MonthErrorMessage = document.getElementById("error-Message2");
    let YearErrorMessage = document.getElementById("error-Message3");


    let currentDate = new Date();
    let currentDateDay = parseInt(currentDate.getDate().toString().padStart(2, '0'));
    let currentDateMonth = parseInt((currentDate.getMonth() + 1).toString().padStart(2, '0'));
    let currentDateYear = parseInt(currentDate.getFullYear());


    let DayDifference = (currentDateDay - DateNumber);
    let MonthDifference = (currentDateMonth - MonthNumber);
    let YearDifference = (currentDateYear - YearNumber);


    if (MonthDifference < 0 || (MonthDifference === 0 && DayDifference < 0)) {
        YearDifference--;
        MonthDifference += 12;
    }

    if (DayDifference < 0) {
        let previousMonthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        DayDifference += previousMonthDays;
        MonthDifference--;
    }


    //-----------------------------Day------------------------------------
    if (userDateInput == "") {
        DateErrorMessage.style.display = "block";
        DateErrorMessage.innerHTML = "This field is required"
        inputDateField.style.borderColor = "hsl(0, 100%, 67%)"
        dayField.style.color = "hsl(0, 100%, 67%)"
    } else if (DateNumber >= 1 && DateNumber <= 31) {
        DateErrorMessage.style.display = "none";
        outPutDay.textContent = DayDifference;
    } else {
        DateErrorMessage.style.display = "block";
        DateErrorMessage.innerHTML = "Must be a valid day"
        inputDateField.style.borderColor = "hsl(0, 100%, 67%)"
        dayField.style.color = "hsl(0, 100%, 67%)"

    }

    //--------------------------------Month---------------------------------
    if (userMonthInput == "") {
        MonthErrorMessage.style.display = "block";
        MonthErrorMessage.innerHTML = "This field is required"
        inputMonthField.style.borderColor = "hsl(0, 100%, 67%)"
        monthField.style.color = "hsl(0, 100%, 67%)"
    } else if (MonthNumber >= 1 && MonthNumber <= 12) {
        MonthErrorMessage.style.display = "none";
        outPutMonth.textContent = MonthDifference;
    } else {
        MonthErrorMessage.style.display = "block";
        MonthErrorMessage.innerHTML = "Must be a valid month"
        inputMonthField.style.borderColor = "hsl(0, 100%, 67%)"
        monthField.style.color = "hsl(0, 100%, 67%)"
        //-------------------------------Year----------------------------------        

    }
    if (userYearInput == "") {
        YearErrorMessage.style.display = "block";
        YearErrorMessage.innerHTML = "This field is required"
        inputYearField.style.borderColor = "hsl(0, 100%, 67%)"
        yearField.style.color = "hsl(0, 100%, 67%)"
    } else if (YearNumber >= 1900 && YearNumber <= 2023) {
        YearErrorMessage.style.display = "none";
        outPutYear.textContent = YearDifference;
    } else {
        YearErrorMessage.style.display = "block";
        YearErrorMessage.innerHTML = "Must be in the past"
        inputYearField.style.borderColor = "hsl(0, 100%, 67%)"
        yearField.style.color = "hsl(0, 100%, 67%)"

    }

    //-----------------------------------------------------------------    
}