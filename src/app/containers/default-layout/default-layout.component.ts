import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  constructor(
    private s:AuthService
    
    ) {
  this.s.doLogout();
}

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout(){
    this.s.doLogout();
  }
}

