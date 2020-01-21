import { Component } from "@angular/core";
import { GlobalTranslateService } from './services/global-translate.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "i18n-angular";


  constructor(private translate: GlobalTranslateService){
    this.translate.setDefaultLang();
  }
    
}
