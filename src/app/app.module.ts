import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppComponent } from "./app.component";
import { UnderConstructionComponent } from "./under-construction/under-construction.component";
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { ChangeLangComponent } from './change-lang/change-lang.component';
import { GlobalTranslateService } from './services/global-translate.service';

registerLocaleData(localeFr, "fr");

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [AppComponent, UnderConstructionComponent, HomeComponent, ChangeLangComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [GlobalTranslateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
