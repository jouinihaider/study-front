import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  url = environment.baseUrl+"/formations"; 
  totalItems: number = 0;
  currentPage: number   = 0;
  numPages: number = 0;

  params : any = {
    page: 1,
    limit: 25,
  }
  
  constructor(private http: HttpClient) { }
  
  getFormations(params:any){
    return this.http.get<any>(this.url+'/list/'+params.page+'/'+params.limit);
  }
  addFormation(data:any){
    return this.http.post(this.url+'/add',data);
  }
  updateFormation(data:any,id:any){
    return this.http.put(this.url+'/update/'+id,data);
  }
  getFormationById(id:any){
    return this.http.get<any>(this.url+'/get/'+id);
  }
  deleteFormation(id:any){
    return this.http.delete(this.url+'/delete/'+id);
  }
}
