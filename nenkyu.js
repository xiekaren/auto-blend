(function annualLeave() {
    const oneDayLeave = document.querySelector('input[type="radio"][name="1977"]');
    oneDayLeave.checked = true;
    oneDayLeave.onchange();

    const nenkyu = document.querySelector('input[type="radio"][name="1979"]');
    nenkyu.checked = true;

    const reasonForLeave = document.getElementsByTagName('textarea');
    reasonForLeave[0].value = "私事の都合のため";

    const noClasses = document.querySelector('input[type="radio"][value="無"]');
    noClasses.checked = true;
})();