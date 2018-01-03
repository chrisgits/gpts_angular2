import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {

  constructor() { }

  ngOnInit() {
  }

}

export class NgbdCollapseBasic {
  public isCollapsed = true;

 toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
