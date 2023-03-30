import { DatePipe } from '@angular/common';
import { Component, Input, OnInit,Output, EventEmitter, ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['../users.component.css'],
  providers:[DatePipe]
})

export class ShowComponent implements OnInit {
  @Input() soloExemple:any; 
  @Output('closeShow') closeShow = new EventEmitter();

  user:User;
  modifyCheck:any ;
  textModify:any ;
  dateCirculation:any ;
  status:any;
  roles!:any;

  constructor(
              private cdRef : ChangeDetectorRef,
              private userService: UsersService,
              private ar:ActivatedRoute,
              private datePipe: DatePipe
             ) { }

  ngOnInit(): void { 
    console.log('call init show')
    // this.user = new User();
    this.modifyCheck = true;
    this.textModify = 'Modifier';
    this.status = ["Envoyer","Approuver","Refuser"] ;
    this.roles = ["admin",'client','public'] ;
    console.log('///////////   ',this.soloExemple)

  }

  close(): void {
    console.log('close child',this.closeShow)
    this.closeShow.emit();
  }

  modifyExempleBtn(f:any): void {

    if (this.modifyCheck){
      this.modifyCheck = false  ;
      this.textModify = 'Enregistrer' ;
    }else{
      this.modifyCheck = true ;
      this.textModify = 'Modifier'  ;
      this.updateExemple(f);

    }    
  }

  updateExemple(f:any){
    console.log('update ==> ',f)
    this.userService.updateUser(f,this.soloExemple._id).subscribe(
      (data)=>{
        alert('Exemple updated');
      },
      (error)=>{
        console.log('error ==> ',error)

        alert('error ');
      }
    );
  }


  
}
