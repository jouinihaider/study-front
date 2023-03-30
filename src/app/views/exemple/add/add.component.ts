import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['../exemple.component.css']
})
export class AddComponent implements OnInit {
  roles!:any;
  f!:any;
  constructor(
    private userService: UsersService,
    private route:Router
    ) { }

  ngOnInit(): void {
    this.roles = ["admin",'client','public'] ;
  }
  
  addUser(f:any){
    console.log('form ==> ',f)
    this.userService.addUser(f).subscribe(
      (data)=>{
        this.route.navigate(['exemple/list']);
      },
      (error)=>{
        alert('error ');
      }
    );
  }
}
