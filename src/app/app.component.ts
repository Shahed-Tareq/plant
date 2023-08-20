import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'plant';

  constructor(private translate: TranslateService , public langService: LanguageService) {
    translate.setDefaultLang('en');
    translate.use('en');
    this.langService.direction = 'ltr'
  }
}
