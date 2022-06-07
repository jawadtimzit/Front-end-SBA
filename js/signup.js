// lets save a reference for each form element by getting them by their id
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// lets call prenet method on event to prevent the form from submitting
// default values 
form.addEventListener('submit', e => {
    e.preventDefault();
    // lets call validateInput function 
    validateInput();
});

// when userValue is empty we will set an error 
// this function receives html element and error message 
const Error = (element, message) => {
    // we will get its parent 
    const inpControl = element.parentElement;
    const displayError = inpControl.querySelector('.error');
    // set innertext for error display to be the message that was provided in the parameter
    displayError.innerText = message;
    // we add the error class 
    inpControl.classList.add('error');
    // then we remove the succes class if present- this will add red borders
    inpControl.classList.remove('success')
}
// this method Succes is when input is valid 
// it only receive an element as a parameter
const Success = element => {
    // we will get it's parent element
    const inpControl = element.parentElement;
    const displayError = inpControl.querySelector('.error');
    // clear the text display
    displayError.innerText='';
    // we will add the success class and dsiplay green on border
    inpControl.classList.add('success');
    // remove error class 
    inpControl.classList.remove('error');
}
// this method check either an email is valid or not 
const validateEmail = (email) => {
    // we will return true if the user provided a valid email address
    // and false if it's not on the right format 
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

// lets implement validateInput funtion
// trim will remove all the white spaces that the string have 
const validateInput = () => {
    // get the values of all the input fields 
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
   
    // lets add validate conditions 
    // if userValue is an empty String 
    if(usernameValue === ''){
        // call error function and message we pass to error method 
        Error(username, "You need to enter username, it's required");
    }else{
        //else we call success method 
        Success(username);
    }
    // if email is empty
    if(emailValue === ''){
        // call error method 
        Error(email, "You need to enter email, it's required");
        // check if email entred is a valid email address by checking it against validateEmail method 
    }else if(!validateEmail(emailValue)){
        // if email is not a valid email address
        Error(email, "You need to enter a valid email address")
    }else{
        // else call success method
        Success(email);
    }
    // if password empty
    if(passwordValue === ''){
        // call error method
        Error(password, "You need to enter password, it's required");
        // if there is a password and less than 6 characters call error method 
    }else if(passwordValue.length < 6){
        Error(password, 'The password must have at least 6 characters.')
    }else{
        // else call success
        Success(password);
    }

    // if confimed password is empty 
    if(password2Value === ''){
        // call error method 
        Error(password2, "Confirm your password please");
        // if cofirmed password doesn't match entred password call error
    }else if(password2Value !== passwordValue){
        Error(password2, 'Enter correct password, passwords dont match')
        // otherwise if it's good and matches call success 
    }else{
        Success(password2);
    }
        
}