import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]/)]),
  })
  constructor(private _authService:AuthService,private router:Router) { }

  ngOnInit(): void {
      this.loadUsers();
  }

  error:string = '';
  email:string = '';
  password:string = '';
  isLoading:boolean = false;
  users:any[]=[];
  user:any ='';
  loadUsers(){
      this._authService.getUsers().subscribe(
        data => {
          this.users = data;
          console.log(this.users)
        }
      )
  }

  formsignin(form:FormGroup):void{
    if(form.valid){
    this.isLoading= true;  
    this.user = this.users.find(user => user.email === this.email && user.password === this.password);
    if(this.user){
      this.router.navigate(['/home']);
    }
   } 
  }
}
