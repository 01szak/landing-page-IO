import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn } from '../../animations/fade-in';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeIn],
  template: `
    <section class="hero" @fadeIn>
      <div class="container hero-content">
        <h1 class="hero-title">Zbuduj drugie <br><span>źródło dochodu.</span> <br>Na własnych zasadach.</h1>
        <p class="hero-subheading">Pokazuję, jak stworzyć dodatkowe źródło zarobków w oparciu o nowoczesny model biznesowy i rozwój osobisty.</p>
        <div class="hero-actions">
          <a href="#for-who" class="btn btn--primary">Sprawdź, czy to dla Ciebie</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: 100vh;
      display: flex;
      align-items: center;
      background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.4)),
                        url("/hero.jpeg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .hero-content {
      max-width: 800px;
    }

    .hero-title {
      font-size: 4.5rem;
      margin-bottom: 2rem;
      color: var(--text-color);

      span {
        color: var(--accent-color);
        font-style: italic;
      }

      @media (max-width: 768px) {
        font-size: 3rem;
      }
    }

    .hero-subheading {
      font-size: 1.25rem;
      color: var(--text-color);
      opacity: 0.8;
      margin-bottom: 3rem;
      max-width: 600px;
      line-height: 1.8;
    }

    .hero-actions {
      display: flex;
      gap: 1.5rem;
    }
  `]
})
export class HeroSectionComponent {}
