import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { fadeIn } from '../../animations/fade-in';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  animations: [fadeIn],
  template: `
    <section class="story" id="story">
      <div class="container story-content" @fadeIn>
        <div class="story-text">
          <h2 class="section-title">Moja Historia</h2>
          <p>
            Przez lata budowałam swoje doświadczenie w biznesie i pracy z ludźmi. Z czasem zaczęłam
            szukać modelu, który daje nie tylko dochód, ale także wolność i elastyczność.
          </p>
          <p>
            Dziś łączę rozwój osobisty, zdrowy styl życia i biznes. Pomagam innym tworzyć dodatkowe
            źródło dochodu bez konieczności zaczynania wszystkiego od zera.
          </p>
        </div>
        <div class="story-image">
          <img ngSrc="/about.jpeg" alt="about-photo" height="544" width="435" class="image-placeholder"/>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .story-content {
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 4rem;
        align-items: center;

        @media (max-width: 768px) {
          grid-template-columns: 1fr;
        }
      }

      .section-title {
        font-size: 3rem;
        color: var(--text-color);
        margin-bottom: 2rem;
      }

      .story-text {
        p {
          font-size: 1.25rem;
          line-height: 1.8;
          color: var(--text-color);
          opacity: 0.8;
          margin-bottom: 2rem;
        }
      }

      .image-placeholder {
        aspect-ratio: 4/5;
        background: var(--secondary-bg);
        border-radius: 30px;
        position: relative;
        overflow: hidden;

        &::after {
          content: '';
          position: absolute;
          top: 20px;
          left: 20px;
          right: -20px;
          bottom: -20px;
          border: 2px solid var(--accent-color);
          border-radius: 30px;
          z-index: -1;
        }
      }
    `,
  ],
})
export class StoryComponent {}
