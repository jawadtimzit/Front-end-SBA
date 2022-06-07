// function to validate the form onsubmit 
function validate(form){
    var returnValue = true;

    // daclares valariables of inouts username, password, password2 to collect values
    //that user entred form. instead of document because we told function that we we are working with form 
    // could use also var username = document.frmRegister.txtUserName.value; etc...
    var username = form.username.value;
    var password = form.password.value;
    var password2 = form.password2.value;

    // check if username is less than 6 charaters 
    if(username.length <6){
        // if yes return false so form will not be submitted and display alert box message to user
        returnValue = false;
        alert("Your username must be at least \n6 characters long.\n please try again");
        // focus so user can chage what they enter in the form 
        document.formregister.username.focus();
    }
    //check if password is less than 6 charaters 
    if(password.length <6){
        // return false no submission of form
        returnValue = false;
        // display alert box message to user 
        alert("Your password must be at least \n6 characters long.\n please try again");
        // if password is not long enough and more that 6 characters empty password fields
        document.formregister.password.returnValue="";
        document.formregister.password2.returnValue="";
        // allow user to change input again when attempting with incorrect (<6) input
        document.formregister.password.focus();
    }

    ////check if password matches password2
    if(password != password2){
        // if not return false don't submit form
        returnValue = false;
        // display alert box message
        alert("Your password entries did not match.\nplease try again.");
        // empty passwords fields 
        document.formregister.password.returnValue="";
        document.formregister.password2.returnValue="";
        // allow for rentering new input
        document.formregister.password.focus();
    }
    // here we return the returnValue which is true when conditions are meet 
    return returnValue;
}