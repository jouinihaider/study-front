import { DatePipe } from '@angular/common';
import { Component, Input, OnInit,Output, EventEmitter, ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { FormationsService } from 'src/app/services/formations/formations.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['../formations.component.css'],
  providers:[DatePipe]
})

export class ShowComponent implements OnInit {
  @Input() soloExemple:any; 
  @Output('closeShow') closeShow = new EventEmitter();

  modifyCheck:any ;
  textModify:any ;
  dateCirculation:any ;
  status:any;

  constructor(
              private cdRef : ChangeDetectorRef,
              private userService: UsersService,
              private fService:FormationsService,
              private ar:ActivatedRoute,
              private datePipe: DatePipe
             ) { }

  ngOnInit(): void { 
    this.modifyCheck = true;
    this.textModify = 'Modifier';
    this.status = ["Envoyer","Approuver","Refuser"] ;

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
    this.fService.updateFormation(f,this.soloExemple._id).subscribe(
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
