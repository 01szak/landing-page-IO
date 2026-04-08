import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn, staggerFadeIn } from '../../animations/fade-in';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeIn, staggerFadeIn],
  template: `
    <section class="benefits" id="benefits">
      <div class="container">
        <div class="section-header" @fadeIn>
          <h2 class="section-title">Co zyskujesz</h2>
        </div>
        <div class="benefits-grid" [@staggerFadeIn]="benefits.length">
          <div *ngFor="let benefit of benefits" class="benefit-item">
            <div class="benefit-icon">✓</div>
            <p>{{ benefit }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .benefits {
      background-color: #fff;
    }

    .section-header {
      text-align: center;
      margin-bottom: 5rem;
    }

    .section-title {
      font-size: 3rem;
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2.5rem;
    }

    .benefit-item {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 1.5rem;
      border-radius: 15px;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: rgba(212, 175, 55, 0.03);
      }

      .benefit-icon {
        flex-shrink: 0;
        width: 2.5rem;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
        background-color: var(--accent-color);
        color: #fff;
        border-radius: 50%;
        font-weight: 700;
      }

      p {
        margin: 0;
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--text-color);
      }
    }
  `]
})
export class BenefitsComponent {
  benefits = [
    'dodatkowy strumień przychodów',
    'większą niezależność',
    'elastyczność czasową',
    'rozwój osobisty i biznesowy',
    'możliwość skalowania'
  ];
}
