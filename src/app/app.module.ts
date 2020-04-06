import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsSectionComponent } from './news-section/news-section.component';
import { MarketNewsComponent } from './market-news/market-news.component';
import { RecentlySignedComponent } from './recently-signed/recently-signed.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { FooterComponent } from './footer/footer.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { CeoCornerComponent } from './ceo-corner/ceo-corner.component';
import { CompanyNewsComponent } from './company-news/company-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    NewsSectionComponent,
    MarketNewsComponent,
    RecentlySignedComponent,
    AnnouncementsComponent,
    FooterComponent,
    UpcomingEventsComponent,
    CeoCornerComponent,
    CompanyNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
