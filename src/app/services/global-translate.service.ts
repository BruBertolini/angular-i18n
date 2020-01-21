import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class GlobalTranslateService {
  private currentTranslationSubject$: BehaviorSubject<Languages>;

  constructor(public translate: TranslateService) {
    this.setDefaultLang();
    this.getBrowserLang();
  }

  changeLang(lang) {
    this.translate.use(lang);
    this.currentTranslationSubject$.next(lang as Languages);
  }

  setDefaultLang() {
    this.translate.addLangs(["en", "fr", "pt"]);
    this.translate.setDefaultLang("en");
  }
  
  getBrowserLang(){
    const browserLang = this.translate.getBrowserLang();
    const translation = browserLang.match(/en|fr|pt/) ? browserLang : "en";
    
    this.translate.use(translation);
    this.currentTranslationSubject$ = new BehaviorSubject(translation as Languages)
  }

  getCurrentTranslation(): BehaviorSubject<Languages>{
    return this.currentTranslationSubject$;
  }
}

export enum Languages {
  ENGLISH = "en",
  PORTUGUESE_BRAZIL = "pt",
  FRENCH = "fr"
}
