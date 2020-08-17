import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dark-mode-sample';
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService) { }
  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
}
