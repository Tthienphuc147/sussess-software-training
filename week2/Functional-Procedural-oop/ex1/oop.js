class Validator {
    static REQUIRED = 'REQUIRED';
    static MIN_LENGTH = 'MIN_LENGTH';
  
    static validate(value, type, validatorValue) {
      switch(type) {
          case this.REQUIRED : {
            return value.trim().length > 0;
          }
          case this.MIN_LENGTH : {
            return value.trim().length > validatorValue;
          }
      } 
    }
  }
  
  class User {
    constructor(uName, uPassword) {
      this.userName = uName;
      this.password = uPassword;
    }
  
    greet() {
      return `Congratulations ${this.userName}.You registered complete!`
    }
  }
  
  class UserInputForm {
    
    constructor() {
      this.form = document.getElementById('user-input');
      this.backBtn = document.getElementById('back-btn');
      this.userNameInput = document.getElementById('username');
      this.passwordInput = document.getElementById('password');
      this.notificationArea = document.getElementById("notification-area");
      this.notification = document.getElementById("notification");
      this.form.addEventListener('submit', this.signupHandler.bind(this));
      this.backBtn.addEventListener('click', this.backHandler.bind(this));
    }
  
    signupHandler(event) {
      event.preventDefault();
      const userNameValue = this.userNameInput.value;
      const passwordValue = this.passwordInput.value;
  
      if (
        !Validator.validate(userNameValue, Validator.REQUIRED) ||
        !Validator.validate(passwordValue, Validator.MIN_LENGTH, 5)
      ) {
        alert(
          'Invalid input - username or password is wrong (password should be at least six characters).'
        );
        return;
      }
  
      const newUser = new User(userNameValue, passwordValue);
      this.notificationArea.classList.add("d-block");
      this.notification.classList.add("alert","alert-primary");
      this.notification.innerHTML = newUser.greet();
      this.form.classList.add("d-none");
    }

    backHandler(event) {
        event.preventDefault();
        this.notificationArea.classList.remove("d-block");
        this.form.classList.remove("d-none");
        this.form.reset();
    }
  }
  
 

  new UserInputForm();