import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Angular 2 CRUD operation with an Array';
  employees = [
    {name:"Sikandar", position:"Programmer"},
    {name:"Alex", position:"Designer"},
    {name:"Maria", position:"Manager"}
  ];
  model:any={};
  model2:any={};
  msg:any="";
  addEmployee(){
    this.employees.push(this.model);
    this.model = {};
    this.msg = "Record is successfully added..... ";

  }
  deleteEmployee(i){
    this.employees.splice(i,1);
    this.msg = "Record is successfully deleted..... ";

  }
  myValue;
  editEmployee(k){
    this.model2.name = this.employees[k].name;
    this.model2.position = this.employees[k].position;
    this.myValue = k;

  }
  updateEmployee(){
    let k= this.myValue;
    for(let i=0; i<this.employees.length;i++){
      if(i==k){
        this.employees[i]= this.model2;
        this.model2 = {};
        this.msg = "Record is successfully updated..... ";
      }

    }

  }
  clickMe(){
    this.msg = "";
  }
}
