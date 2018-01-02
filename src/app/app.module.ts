import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ContentBodyComponent } from './content-body/content-body.component';
import { ContentsuasComponent } from './contentsuas/contentsuas.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { ContentschedComponent } from './contentsched/contentsched.component';
import { ContentAboutComponent } from './content-about/content-about.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ContentBodyComponent,
    ContentsuasComponent,
    JumboComponent,
    ContentschedComponent,
    ContentAboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot ([
      {
        path: '',
        component: ContentBodyComponent
      },
      {
        path: 'about',
        component: ContentAboutComponent
      },
      {
        path: 'sched',
        component: ContentschedComponent
      },
      {
        path: 'suas',
        component: ContentsuasComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
