import { Component, OnInit } from '@angular/core';
import { UiStyleToggleService } from '../services/ui-style-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private uiStyleToggleService: UiStyleToggleService) { }

  ngOnInit(): void {
    this.uiStyleToggleService.setThemeOnStart();
  }

  
  toggleTheme(){
    this.uiStyleToggleService.toggle();
  }


}
