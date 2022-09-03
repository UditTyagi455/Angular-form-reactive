import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private mySer:CommonService) { }
  arrayValue:any =[];
  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.mySer.getApiData().subscribe(data =>{
       this.arrayValue =data;
     } )
  }

  deleteData(deleteid:any){
    this.mySer.deleteApiData(deleteid).subscribe(
      data => {
        alert("Row Deleted successfully");
        this.getUser()
      })
  }

}
