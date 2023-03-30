import { AuthService } from '../../services/auth.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  currentUser:any;
  error:any;
  res:any;
  message:any;
  constructor(
    // private s:BackUsersService,
    private ar:ActivatedRoute,
    private route:Router,
    private s:AuthService
  ) { }

ngOnInit(): void {
  this.res= false;
}
signIn(f:any){
  console.log('login form',f);
  this.s.signIn(f).subscribe((res: any) => {
    if(res.response){
      localStorage.setItem('access_token', res.token);
      this.currentUser = res.data;
      this.route.navigate(['dashboard']);
      this.res = false;
    }else{
      this.res = true;
      this.error = 'error'
      this.message= res.message;

    }
  });
}

}
