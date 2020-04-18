import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PojoconverterComponent } from './pojoconverter/pojoconverter.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SlickCarouselModule } from 'ngx-slick-carousel'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PojoconverterComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    SlickCarouselModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([  
      {path: "home" , component:HomeComponent},
      {path: "pojoconverter" , component:PojoconverterComponent},
      {path: "contact-us" , component:ContactUsComponent},
      {path: "about-us" , component:AboutUsComponent}      
     ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
