import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn } from '../../animations/fade-in';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeIn],
  template: `
    <section class="cta-section" id="cta">
      <div class="container" @fadeIn>
        <div class="cta-card">
          <h2 class="section-title">Sprawdź, czy ten model jest dla Ciebie.</h2>
          <div class="cta-actions">
<!--            <a href="https://calendly.com" target="_blank" class="btn btn&#45;&#45;primary">Umów rozmowę</a>-->
            <a href="#contact" class="btn btn--secondary">Wyślij wiadomość</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta-section {
      padding: 8rem 0;
      background: radial-gradient(circle at 0% 100%, rgba(168, 181, 162, 0.1) 0%, transparent 50%);
    }

    .cta-card {
      text-align: center;
      background: #fff;
      padding: 6rem 3rem;
      border-radius: 40px;
      box-shadow: 0 30px 60px rgba(47, 58, 52, 0.05);
      border: 1px solid var(--secondary-bg);
    }

    .section-title {
      font-size: 3.5rem;
      margin-bottom: 3.5rem;
      color: var(--text-color);

      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }

    .cta-actions {
      display: flex;
      justify-content: center;
      gap: 2rem;

      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
      }
    }
  `]
})
export class CtaSectionComponent {}
