import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = environment.baseUrl+"/users"; 
  // totalItems: number = 0;
  // currentPage: number   = 0;
  // numPages: number = 0;

  params : any = {
    page: 1,
    limit: 25,
  }
  
  constructor(private http: HttpClient) { }
  
  getUsers(params:any){
    return this.http.get<any>(this.url+'/list/'+params.page+'/'+params.limit);
  }
  addUser(data:any){
    return this.http.post(this.url+'/add',data);
  }
  updateUser(data:any,id:any){
    return this.http.put(this.url+'/update/'+id,data);
  }
  getUserById(id:any){
    return this.http.get<any>(this.url+'/get/'+id);
  }
  deleteUser(id:any){
    return this.http.delete(this.url+'/delete/'+id);
  }
}
