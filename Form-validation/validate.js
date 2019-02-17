function validateForm() {
    var n = document.forms["myform"]["name"].value;
    var rn = document.forms["myform"]["rn"].value;
    var course = document.forms["myform"]["course"].value;
    var email = document.forms["myform"]["email"].value;
    var phno = document.forms["myform"]["phno"].value;
    if (n == "") {
        alert("Name must be filled out");
    return false;
    }
    if (rn.length == "" || rn.length < 3 || rn.length > 10) {
        alert("Invalid rollno");
        return false;
    }
    if (course == "") {
        alert("Course must be filled out");
        return false;
    }
    if (email == "" || (email.indexof("@") == 0) || (email.indexOf(".") == 0)) {
        alert("Invalid mail-id");
        return false;
    }
    if (phno == "") {
        alert("Invalid contact");
        return false;
    }
}