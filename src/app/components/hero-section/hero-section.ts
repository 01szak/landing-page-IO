import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn } from '../../animations/fade-in';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeIn],
  template: `
    <section class="hero" id="hero" @fadeIn>
      <div class="bckgrnd-photo"></div>
      <div class="hero-text-container">
        <div class="content-wrapper">
          <h1 class="hero-title">Zbuduj drugie <br><span>źródło dochodu.</span> <br>Na własnych zasadach.</h1>
          <p class="hero-subheading">Pokazuję, jak stworzyć dodatkowe źródło zarobków w oparciu o nowoczesny model
            biznesowy i rozwój osobisty.</p>
          <div class="hero-actions">
            <a href="#for-who" class="btn btn--primary">Sprawdź, czy to dla Ciebie</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: 100vh;
      width: 100%;
      display: flex;
      position: relative;
      overflow: hidden;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }

    .bckgrnd-photo {
      flex: 1;
      height: 100%;
      background-image: url("/hero.jpeg");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;

      @media (max-width: 768px) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.7);
        }
      }
    }

    .hero-text-container {
      flex: 1;
      display: flex;
      align-items: center;
      padding: 0 4rem;
      background-color: var(--bg-color);
      z-index: 2;

      @media (max-width: 1024px) {
        padding: 0 2rem;
      }

      @media (max-width: 768px) {
        background-color: transparent;
        padding: 2rem;
        justify-content: center;
        text-align: center;
      }
    }

    .content-wrapper {
      max-width: 600px;
    }

    .hero-title {
      font-size: 4rem;
      line-height: 1.1;
      margin-bottom: 2rem;
      color: var(--text-color);

      span {
        color: var(--accent-color);
        font-style: italic;
      }

      @media (max-width: 1200px) {
        font-size: 3.5rem;
      }

      @media (max-width: 768px) {
        font-size: 2.8rem;
      }
    }

    .hero-subheading {
      font-size: 1.25rem;
      color: var(--text-color);
      opacity: 0.8;
      margin-bottom: 3rem;
      line-height: 1.8;

      @media (max-width: 768px) {
        font-size: 1.1rem;
        margin-bottom: 2.5rem;
      }
    }

    .hero-actions {
      display: flex;
      gap: 1.5rem;

      @media (max-width: 768px) {
        justify-content: center;
      }
    }
  `]
})
export class HeroSectionComponent {}
