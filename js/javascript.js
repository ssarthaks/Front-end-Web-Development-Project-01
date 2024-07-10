// //Welcome Message
// function welcome(){
//     alert("Welcome to BonsaiProductions !!!")
// }

// ALERT BOXES AFTER PURCHASING STUFFS IN PRODUCTS PAGE
function buyprod1() {
    alert("Thank You for Purchasing Schefflera Bonsai düngen !!!");
    alert("Do Recommend Our Store to Your Friends and Families. Thankyou!");
}
function buyprod2() {
    alert("Thank You for Purchasing Juniper Bonsai !!!");
    alert("Do Recommend Our Store to Your Friends and Families. Thankyou!");
}
function buyprod3() {
    alert("Thank You for Purchasing Ficus Bonsai !!!");
    alert("Do Recommend Our Store to Your Friends and Families. Thankyou!");
}
function buyprod4() {
    alert("Thank You for Purchasing Pinus Parviflora !!!");
    alert("Do Recommend Our Store to Your Friends and Families. Thankyou!");
}
function buyprod5() {
    alert("Thank You for Purchasing Portulacaria Afra !!!");
    alert("Do Recommend Our Store to Your Friends and Families. Thankyou!");
}
function buyprod6() {
    alert("Thank You for Purchasing Japanese Maple !!!");
    alert("Do Recommend Our Store to Your Friends and Families. Thankyou!");
}
function buyprod7() {
    alert("Thank You for Shimpaku Juniper !!!");
    alert("Do Recommend Our Store to Your Friends and Families. Thankyou!");
}
function buyprod8() {
    alert("Thank You for Purchasing Port Jackson Fig !!!");
    alert("Do Recommend Our Store to Your Friends and Families. Thankyou!");
}
function buyprod9() {
    alert("Thank You for Purchasing Crepe Myrtle !!!");
    alert("Do Recommend Our Store to Your Friends and Families. Thankyou!");
}

// VALIDATION OF FORM INSIDE OF CONTACTUS PAGE
function validateform() {
    var fname = document.myform.fname.value;
    var lname = document.myform.lname.value;
    var email = document.myform.email.value;
    var add = document.myform.add.value;
    var sub = document.myform.sub.value;
    // var atpos=email.indexof("@");
    // var dotpos=email.indexof(".");

    if (fname == null || fname == "") {
        alert("Please Enter Your First Name !!!");
        return false;
    }
    else if (lname == null || lname == "") {
        alert("Please Enter Your Last Name !!!");
        return false;
    }
    else if (add == null || add == "") {
        alert("Please Enter Your Address !!!");
        return false;
    }
    else if (sub == null || sub == "") {
        alert("Please Provide A Subject !!!");
        return false;
    }
    else {
        alert("Your message was sent, " + fname + " " + lname + "!!!")
    }
    // else if(atpos<1 || dotpos<atmos+2 || dotpos+2>email.length){
    //     alert("Please Enter Your Email Correctly");
    //     return false;
    // }
}

//  VALIDATION OF LOGIN PAGE STARTS
function validatelogin() {
    var uname = document.myform.uname.value;
    var pwd = document.myform.pwd.value;

    if (uname == null || uname == "") {
        alert("Please Enter an  UserName !!!");
        return false;
    }
    else if (uname.length < 6) {
        alert("Please Enter a Valid UserName !!!");
        return false;
    }
    else if (pwd.length < 6) {
        alert("Passwords Must be 6 digits long !!!");
        return false;
    }
    else {
        alert("You have succesfully Logged In as " + uname + " !!!");
    }
}

//VALIDATION OF FEEDBACK FORM
function validatefeedbackform() {
    var fname = document.myform.fname.value;
    var lname = document.myform.lname.value;
    var email = document.myform.email.value;
    var add = document.myform.add.value;

    if (fname == null || fname == "") {
        alert("Please Enter Your First Name !!!");
        return false;
    }
    else if (lname == null || lname == "") {
        alert("Please Enter Your Last Name !!!");
        return false;
    }
    else if (add == null || add == "") {
        alert("Please Enter Your Address !!!");
        return false;
    }
    else {
        alert("Thank You for your Feedback " + fname + " " + lname + " !!!");
    }
}
