function validate() {  
    let username = document.getElementById("username")
    let email=document.getElementById("email");
    let mobno=document.getElementById("mobno");
    let Password =document.getElementById("password");
    let Confirm_password = document.getElementById("confirm_password");
    let emailerror=document.getElementById("emailerror");
    let moberror=document.getElementById("moberror");
    let Phoneno  =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let emailid = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    let passwordcheck = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    
    if ( username.value!='' && email.value != '' && mobno.value != '' && Password.value != '' && Confirm_password.value !='') {
    if (emailid.test(email.value)) {
    if (Phoneno.test(mobno.value)) {
    if(passwordcheck.test(Password.value)){
    if(Password.value == Confirm_password.value ){
        alert("sign up successfull.");
        return true;
        } 
        else {
          alert("Passwords Doesnt Match, Please Re-enter :");
        return false;
        }
    }
    else {
          alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
    return false;
        }
    }
    else {
          moberror.innerHTML = "Phoneno is invalid";
          moberror.style.color ="red";
          mobno.style.borderColor ="red";
    return false;
        }
    } else {
          emailerror.innerHTML = "Email is invalid";
          emailerror.style.color ="red";
          email.style.borderColor ="red";
    return false;
        }
    } else {
    alert("Fill All Fields!!");
       
    return false;
        }
    
  }
  
  
  //login validation
  function login_validate(){
        let login_emailid = document.getElementById("login_email");
        let login_passwordid = document.getElementById("login_password");
        let emailid = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
        if ( login_emailid .value != '' &&   login_passwordid.value != '') {
         if (emailid.test(login_emailid.value)) {
              alert("login successsfull.");
              return true;
              } 
         else {
              alert("Email Id is invalid");
              return false;
              }
        }
         else {
            alert("Fill All Fields!");
            return false;
                  }
  }
  
  function StrengthChecker() {
  let Passwordvalue = document.getElementById("password");
  let strengthBadge = document.getElementById('StrengthDisp');
  let strongPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
  let mediumPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.{4,6})/;
        if(strongPassword.test(Passwordvalue.value)) {
            strengthBadge.style.backgroundColor = "green";
            strengthBadge.textContent = 'Strong';
        }
        
        else if(mediumPassword.test(Passwordvalue.value)) {
            strengthBadge.style.backgroundColor = 'blue';
            strengthBadge.textContent = 'Medium';
        } 
        else {
            strengthBadge.style.backgroundColor = 'red';
            strengthBadge.textContent = 'Weak';
        }
        
       
    }
   