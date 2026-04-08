import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { ForWhoComponent } from './components/for-who/for-who';
import { StoryComponent } from './components/story/story';
import { WhatIDoComponent } from './components/what-i-do/what-i-do';
import { HowItWorksComponent } from './components/how-it-works/how-it-works';
import { BenefitsComponent } from './components/benefits/benefits';
import { NotForEveryoneComponent } from './components/not-for-everyone/not-for-everyone';
import { CtaSectionComponent } from './components/cta-section/cta-section';
import { ContactFormComponent } from './components/contact-form/contact-form';
import { FooterComponent } from './components/footer/footer';
import { SeoService } from './services/seo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroSectionComponent,
    ForWhoComponent,
    StoryComponent,
    WhatIDoComponent,
    HowItWorksComponent,
    BenefitsComponent,
    NotForEveryoneComponent,
    CtaSectionComponent,
    ContactFormComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero-section id="hero"></app-hero-section>
      <app-for-who id="for-who"></app-for-who>
      <app-story id="story"></app-story>
      <app-what-i-do id="what-i-do"></app-what-i-do>
      <app-how-it-works id="how-it-works"></app-how-it-works>
      <app-benefits id="benefits"></app-benefits>
      <app-not-for-everyone id="not-for-everyone"></app-not-for-everyone>
      <app-cta-section id="cta"></app-cta-section>
      <app-contact-form id="contact"></app-contact-form>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main {
      overflow-x: hidden;
    }
  `]
})
export class AppComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.setMetaTags({});
  }
}
