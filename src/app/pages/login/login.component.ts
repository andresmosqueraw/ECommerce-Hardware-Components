import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  isSignDivVisiable: boolean  = false;

  signUpObj: SignUpModel = new SignUpModel();
  loginObj: LoginModel = new LoginModel();

  constructor(private router: Router){}


  onRegister() {
    // Lógica de registro
    debugger;
    const localUser = localStorage.getItem('angular17users');
    if(localUser != null) {
      const users =  JSON.parse(localUser);
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users))
    } else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users))
    }
    alert('Registration Success')
  }

  onLogin() {
    // Lógica de inicio de sesión
    debugger;
    const localUsers =  localStorage.getItem('angular17users');
    if(localUsers != null) {
      const users =  JSON.parse(localUsers);

      const isUserPresent =  users.find( (user:SignUpModel)=> user.email == this.loginObj.email && user.password == this.loginObj.password);
      if(isUserPresent != undefined) {
        alert("User Found...");
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('/home');
      } else {
        alert("No User Found")
      }
    }
  }

  // Método para alternar la vista
  toggleView() {
    this.isSignDivVisiable = !this.isSignDivVisiable;
  }

}

export class SignUpModel  {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.password= ""
  }
}

export class LoginModel  { 
  email: string;
  password: string;

  constructor() {
    this.email = ""; 
    this.password= ""
  }
}