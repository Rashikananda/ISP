import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { faSearch,faChevronCircleRight,faWifi,faRupeeSign,faEnvelope,faStar,faSortDown,faSortUp, faPhoneAlt,faShare, faDownload, faLink, faSort } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { IspsEffects } from './store/effects/isps.effects';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects, IspsEffects]),
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private library: FaIconLibrary) {
    library.addIcons(faSearch, faTimesCircle,faWifi,faSortDown,faSortUp, faEnvelope,faStar,faSort, faRupeeSign,faPhoneAlt, faChevronCircleRight,
      faShare, faDownload, farStar, faLink);
  }
}
