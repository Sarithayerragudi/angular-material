import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    emailCtrl:['',[Validators.required,Validators.email]],
  });
  
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

// email code

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

}
