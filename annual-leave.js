(function annualLeave() {
    let date = prompt("Please enter date of leave (YYYY-MM-DD)");
    if (date === null) {
        alert("Please type in your date");
        return;
    }
    
    const oneDayLeave = document.querySelector('input[type="radio"][name="1977"]');
    oneDayLeave.checked = true;
    oneDayLeave.onchange();

    const dateOfLeave = document.querySelector('.assessment_report_datepicker');
    dateOfLeave.value = date;

    const nenkyu = document.querySelector('input[type="radio"][name="1979"]');
    nenkyu.checked = true;

    const reasonForLeave = document.getElementsByTagName('textarea');
    reasonForLeave[0].value = "私事の都合のため";

    const noClasses = document.querySelector('input[type="radio"][value="無"]');
    noClasses.checked = true;
})();