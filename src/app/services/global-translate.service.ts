import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root"
})
export class GlobalTranslateService {
  constructor(public translate: TranslateService) {
    this.setDefaultLang();
  }

  changeLang(lang) {
    this.translate.use(lang);
  }

  setDefaultLang() {
    this.translate.addLangs(["en", "fr-FR", "pt-BR"]);
    this.translate.setDefaultLang("pt-BR");
    // const browserLang = this.translate.getBrowserLang();
    // this.translate.use(browserLang.match(/en|fr/) ? browserLang : "en");
  }
}

export enum Languages{
  ENGLISH = 'en',
  PORTUGUESE_BRAZIL = 'pt-BR',
  FRENCH = 'fr-FR'
}