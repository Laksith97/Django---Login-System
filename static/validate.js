function validate() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var uname = document.getElementById("username").value;
    var pw1 = document.getElementById("pw1").value;
    var pw2 = document.getElementById("pw2").value;

    if (fname == "") {
        window.alert("Please enter your first name!");
        fname.focus();
        return false;
    }

    if (lname == "") {
        window.alert("Please enter your last name!");
        lname.focus();
        return false;
    }

    if (email == "") {
        window.alert("Please enter a valid e-mail address!");
        email.focus();
        return false;
    }

    if (uname == "") {
        window.alert("Please enter an username!");
        uname.focus();
        return false;
    }
    
    if (pw1 == "") {
        window.alert("Please enter a valid password!");
        pw1.focus();
        return false;
    }

    if (pw2 == "") {
        window.alert("Please enter password again!");
        pw2.focus();
        return false;
    }

    return true;

}
