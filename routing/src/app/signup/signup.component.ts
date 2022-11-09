import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from'@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm!:FormGroup
  submitted: boolean | undefined;
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }
  ngOnInit(): void {
this.signupForm=this.formbuilder.group({
  firstname:[''],
  lastname:[''],
  email:[''],
  password:[''],
  mobile:['']
})
 }
    signUp(){
      this.submitted=true;
      this.http.post<any>(`${environment.baseUrl}signpusers`,this.signupForm.value)
      .subscribe(res=>{
        alert('signup successfull');
        this.signupForm.reset();
        this.router.navigate(['login']);
      },err=>{
        alert('something went wrong')
      })
    }
  }