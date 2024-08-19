import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  constructor(private _authService:AuthService,private router:Router) { }
  ngOnInit(): void {
    this.loadUsers();
  }
  users:any[]=[];

  loadUsers(){
    this._authService.getUsers().subscribe(
      data => {
        this.users = data;
        console.log(this.users)
      }
    )
}
  registerForm:FormGroup = new FormGroup({
    firstname:new FormControl('',[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    lastname:new FormControl('',[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    age:new FormControl('',[Validators.min(16),Validators.max(30),Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]/)]),
  })
  email:string='';
  user:any;
  flag:number = 0;
  password:string = '';
  error:string = '';
  isLoading:boolean = false;
  formregiter(form:FormGroup):void{
    this.user = this.users.find(user => user.email === this.email && user.password === this.password);
  
    if(form.valid && this.user === undefined){
    this.isLoading= true;
      this._authService.signUp(form.value).subscribe({
        next:(data)=>{
          this.isLoading = false;

          this.router.navigate(['/login']);
        }
      })          
   } 
  }
}
