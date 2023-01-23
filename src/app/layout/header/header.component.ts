import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@angular/fire/auth';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() drawer: MatDrawer | undefined;
  @Input() isMobile: boolean | undefined;
  @Input() user: User | null = null;

  @Output() onLogoutClicked = new EventEmitter<void>();

  constructor() {
    
  }
}
