import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ContentBodyComponent } from './content-body/content-body.component';
import { ContentsuasComponent } from './contentsuas/contentsuas.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { ContentschedComponent } from './contentsched/contentsched.component';
import { ContentAboutComponent } from './content-about/content-about.component';
import { BusinessComponent } from './business/business.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactComponent } from './contact/contact.component';
import { DelivComponent } from './deliv/deliv.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule,
    ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ContentBodyComponent,
    ContentsuasComponent,
    JumboComponent,
    ContentschedComponent,
    ContentAboutComponent,
    BusinessComponent,
    InsuranceComponent,
    PrivacyComponent,
    ContactComponent,
    DelivComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
