import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn, staggerFadeIn } from '../../animations/fade-in';

@Component({
  selector: 'app-what-i-do',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeIn, staggerFadeIn],
  template: `
    <section class="what-i-do" id="what-i-do">
      <div class="container">
        <div class="section-header" @fadeIn>
          <h2 class="section-title">Co robię</h2>
          <p class="section-subtitle">Tworzę przestrzeń dla osób, które chcą:</p>
        </div>
        <div class="cards-grid" [@staggerFadeIn]="items.length">
          <div *ngFor="let item of items" class="feature-card">
            <h3>{{ item }}</h3>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .what-i-do {
      background-color: var(--color-background);
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-title {
      font-size: 3rem;
    }

    .section-subtitle {
      font-size: 1.25rem;
      color: var(--secondary-color);
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      padding: 3rem 2rem;
      border: 1px solid #f0f0f0;
      border-radius: 20px;
      transition: all 0.3s ease;
      text-align: center;

      &:hover {
        border-color: var(--accent-color);
        box-shadow: 0 10px 30px rgba(212, 175, 55, 0.05);
      }

      h3 {
        font-family: var(--font-body);
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 0;
      }
    }
  `]
})
export class WhatIDoComponent {
  items = [
    'zbudować dodatkowe źródło przychodu',
    'zwiększyć pewność siebie i kompetencje',
    'działać w oparciu o sprawdzony model biznesowy',
    'mieć wsparcie i jasny kierunek działania'
  ];
}
