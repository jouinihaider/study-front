import { UsersService } from '../../services/users/users.service';
import { FormationsService } from '../../services/formations/formations.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})

export class FormationsComponent implements OnInit {
  exemples!:any;
  backExemples!:any;
  resData:any;
  numbers:any;
  colTable:any;
  colElement:any ;
  soloExemple!:any;
  showSoloExemple:any;
  searchV:any;

  totalExemples: number = 0;
  totalItems: number = 0;
  currentPage: number   = 0;
  numPages: number = 0;

  params : any = {
    page: 1,
    limit: 5,
  }

  numberItemsFilterList: any = [5,10,25,50,100]
  statuFilterList: any = ["Tous","Envoyer","Approuver","Refuser"]

  constructor(
              private userService:UsersService,
              private fService:FormationsService,
              private cdRef : ChangeDetectorRef) {}

  ngOnInit(): void {
    this.colTable = '12';
    this.getExemples(this.params);

  }

  setPage(pageNo: number): void {
    this.params.page = pageNo; 
    this.getExemples(this.params);
  }

  getExemples(params:any){
 
    this.fService.getFormations(params).subscribe(

      (res) =>{
        this.resData = res.data;
        this.totalItems = res.data.docs.length;
        this.totalExemples = res.data.total;
        this.currentPage = res.data.page;
        this.numPages = res.data.pages;
        this.numbers = Array(res.data.pages+1).fill(0).map((x,i)=>i).slice(1); 
        this.backExemples = this.exemples = res.data.docs;
        console.log('res data  ////////////',res.data)
      }
    )
  }

  showExemple(obj){
    
    this.soloExemple = obj;
    this.colTable = '8';
    this.colElement = '4';
    this.showSoloExemple = true;
  }

  closeShow(): void{
    this.showSoloExemple = false;
    this.colTable = '12';
    this.colElement = '0';
  }
  
  
  searchStatus(){
    this.getExemples(this.params);
  }

  deleteUser(id:any){
    this.fService.deleteFormation(id).subscribe(
      (data) =>{
        this.getExemples(this.params);
        console.log('delete  ==> ',data)
      }
    )
  }
}
