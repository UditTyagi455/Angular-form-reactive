import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';
import {FormArray, FormBuilder,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assignment02';

  constructor(private myser:CommonService,private myform :FormBuilder){
  }

  submitForm = this.myform.group({
    firstname: [],
    lastname: [],
    fathersname: [],
    course: [],
    section: [],
    rollno: [],
    subject: this.myform.array([ this.createAddress()]),

  })
  get subjectArray(){
    return this.submitForm.get('subject') as FormArray;
  }
  createAddress() {
    return this.myform.group({
       subjectname: [],
       language: [],
       bookname: []
    });
 }

  LoopStatus:any=[];

  ngOnInit(){
   this.LoopStatus =this.myser.value;
  }
  
  getSubject(){
    return this.submitForm.get('subject') as FormArray;
  }
  onClick(){
    this.subjectArray.push(this.createAddress())
  }
  onSubmit(){
    console.log("submitForm :",this.submitForm);
  }
  removeMe(i:any){
    this.subjectArray.removeAt(i);
  }
}
