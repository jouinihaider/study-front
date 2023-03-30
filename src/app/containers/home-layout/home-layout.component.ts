import { navItems } from '../../_nav';
// import { AuthService } from '../../services/auth.service';
// import { NavbarsComponent } from '../base/navbars/navbars.component';
import {AfterViewChecked, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {CollapseDirective} from 'ngx-bootstrap/collapse';


@Component({
  selector: 'app-home',
  templateUrl: './home-layout.component.html'
})

export class HomeLayoutComponent {
  // Navbar 
  private isAnimated: any;
  private _isCollapsed: boolean = true;

  // Carsouel 
  myInterval: number | false = 6000;
  slides: any[] = [];
  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;


  set isCollapsed(value) {
    this._isCollapsed = value;
  }
  get isCollapsed() {
    if (this.collapseRef) {
      // temp fix for "overflow: hidden"
      if (getComputedStyle(this.collapseRef.nativeElement).getPropertyValue('display') === 'flex') {
       this.renderer.removeStyle(this.collapseRef.nativeElement, 'overflow');
      }
    }
    return this._isCollapsed;
  }

  @ViewChild(CollapseDirective, { read: ElementRef, static: false }) collapse !: CollapseDirective;

  collapseRef;

  constructor(
    private renderer: Renderer2,
  ) { 

  }

  ngOnInit() {}

  ngAfterViewChecked (): void {
    this.collapseRef = this.collapse;
  }
}
