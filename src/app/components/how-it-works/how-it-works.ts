import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn, staggerFadeIn } from '../../animations/fade-in';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeIn, staggerFadeIn],
  template: `
    <section class="how-it-works" id="how-it-works">
      <div class="container">
        <div class="section-header" @fadeIn>
          <h2 class="section-title">Jak to działa</h2>
        </div>
        <div class="steps-container" [@staggerFadeIn]="steps.length">
          <div *ngFor="let step of steps; let i = index" class="step-card">
            <span class="step-num">{{ i + 1 }}</span>
            <h3>{{ step }}</h3>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .how-it-works {
      background-color: #f9f9f9;
    }

    .section-header {
      text-align: center;
      margin-bottom: 5rem;
    }

    .section-title {
      font-size: 3rem;
    }

    .steps-container {
      display: flex;
      justify-content: space-between;
      gap: 3rem;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }

    .step-card {
      flex: 1;
      text-align: center;
      position: relative;
      
      &:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 2rem;
        right: -1.5rem;
        width: 3rem;
        height: 1px;
        background: var(--accent-color);
        opacity: 0.3;
        
        @media (max-width: 768px) {
          display: none;
        }
      }

      .step-num {
        display: inline-block;
        width: 4rem;
        height: 4rem;
        line-height: 4rem;
        background: #fff;
        border: 1px solid var(--accent-color);
        color: var(--accent-color);
        border-radius: 50%;
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 2rem;
        font-family: var(--font-headings);
      }

      h3 {
        font-family: var(--font-body);
        font-size: 1.25rem;
        font-weight: 500;
      }
    }
  `]
})
export class HowItWorksComponent {
  steps = [
    'Poznaj model biznesowy',
    'Sprawdź, czy pasuje do Twojego stylu życia',
    'Zacznij działać z moim wsparciem'
  ];
}
