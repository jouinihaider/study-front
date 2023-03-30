import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { FormationsService } from 'src/app/services/formations/formations.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['../formations.component.css']
})
export class AddComponent implements OnInit {
  roles!:any;
  f!:any;
  constructor(
    private fService: FormationsService,
    private userService: UsersService,
    private route:Router
    ) { }

  ngOnInit(): void {
    this.roles = ["admin",'client','public'] ;
  }
  
  add(f:any){
    this.fService.addFormation(f).subscribe(
      (data)=>{
        this.route.navigate(['formations/list']);
      },
      (error)=>{
        console.log(error)
        alert('error ');
      }
    );
  }
}
