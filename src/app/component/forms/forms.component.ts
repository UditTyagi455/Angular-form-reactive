import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import {format} from 'date-fns'



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private myser:CommonService,private myform :FormBuilder){
  }
   date:Date =new Date();
   dateFormatted = format(this.date, "dd/MM/yyyy");

  submitForm = this.myform.group({
    firstname: ['',[Validators.required]],
    lastname: ['',[Validators.required]],
    fathersname: ['',[Validators.required]],
    course: ['',[Validators.required]],
    section: ['',[Validators.required]],
    rollno: ['',[Validators.required]],
    subject: this.myform.array([ this.createAddress()]),

  })
  get firstName(){
    return this.submitForm.get('firstname');
  }
  get subjectArray(){
    return this.submitForm.get('subject') as FormArray;
  }
  createAddress() {
    return this.myform.group({
       subjectname: ['',[Validators.required]],
       language: ['',[Validators.required]],
       bookname: ['',[Validators.required]]
    });
 }

  LoopStatus:any=[];

  ngOnInit(){
   this.LoopStatus =this.myser.value;
  }
  dis:boolean =true;
  getSubject(){
    return this.submitForm.get('subject') as FormArray;
  }
  onClick(){
    this.subjectArray.push(this.createAddress())
  }
  onSubmit(){
    alert("Data saved")
    console.log("submitForm :",this.submitForm.value);
    this.myser.postApiData(this.submitForm.value).subscribe(data =>{
       alert("data post ")
    })
    this.submitForm.reset();
  }
  removeMe(i:any){
    this.subjectArray.removeAt(i);
  }


}
