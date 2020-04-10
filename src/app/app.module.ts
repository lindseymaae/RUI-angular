import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsSectionComponent } from './news-section/news-section.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { FooterComponent } from './footer/footer.component';
import { ListSectionsComponent } from './list-sections/list-sections.component';
import { CompanyNewsComponent } from './company-news/company-news.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    NewsSectionComponent,
    AnnouncementsComponent,
    FooterComponent,
    ListSectionsComponent,
    CompanyNewsComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
