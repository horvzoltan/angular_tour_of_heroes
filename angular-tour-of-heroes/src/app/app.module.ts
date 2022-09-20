import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BreweryListComponent} from './brewery-list/brewery-list.component';
import {BreweryDetailsComponent} from './brewery-details/brewery-details.component';
import {FooterComponent} from './footer/footer.component';
import {NavigationComponent} from './navigation/navigation.component';
import {SubmitFormComponent} from './submit-form/submit-form.component';
import {HeaderComponent} from './header/header.component';
import {SpinnerComponent} from './spinner/spinner.component';
import {HttpLoadingInterceptor} from 'src/shared/interceptors/http-request-interceptor.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from 'src/shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    BreweryListComponent,
    BreweryDetailsComponent,
    FooterComponent,
    NavigationComponent,
    SubmitFormComponent,
    HeaderComponent,
    SpinnerComponent,
  ],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MaterialModule,
	],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
