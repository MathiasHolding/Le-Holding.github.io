ageCalculator("1986-11-01", "MathiasAge");

function ageCalculator(birth, elementId) {
    var dob = new Date(birth);
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();

    //convert the calculated difference in date format
    var age_dt = new Date(month_diff);

    //extract year from date
    var year = age_dt.getUTCFullYear();

    //now calculate the age of the user
    var age = Math.abs(year - 1970);

    //display the calculated age
    const span = document.getElementById(elementId);
    const textnode = span.nextSibling;
    textnode.insertData(1, `${age} `)
}