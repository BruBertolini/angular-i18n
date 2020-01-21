import { Component, OnInit } from "@angular/core";
import {
  GlobalTranslateService,
  Languages
} from "../services/global-translate.service";

@Component({
  selector: "app-change-lang",
  templateUrl: "./change-lang.component.html",
  styleUrls: ["./change-lang.component.scss"]
})
export class ChangeLangComponent implements OnInit {
  currentLang: string;
  languagesEnum: typeof Languages = Languages;

  constructor(public translate: GlobalTranslateService) {}

  ngOnInit() {
    this.translate.getCurrentTranslation().subscribe(lang => this.currentLang = lang);
  }

  changeLang(lang) {
    this.translate.changeLang(lang);
  }
}
