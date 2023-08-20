import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { LanguageService } from 'src/app/services/language.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideDown', [
      state('void', style({ top: '-100%' })),
      state('*', style({ top: 56 })),
      transition('void => *', animate('600ms ease-out')),
      transition('* => void', animate('600ms ease-in'))
    ])
  ]
})
export class HeaderComponent{
  @ViewChild('op') overlayPanel!: OverlayPanel;
  constructor(private translate: TranslateService , private langService: LanguageService){}
public showItemList:boolean = false;

public showItem(){
  this.showItemList = !this.showItemList;
}

useLanguage(language: string , direction:string): void {
  this.translate.use(language);
  this.langService.direction = direction;
  this.overlayPanel.hide();
}



}
