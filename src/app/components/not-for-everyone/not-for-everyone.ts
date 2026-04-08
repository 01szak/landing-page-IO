import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn, staggerFadeIn } from '../../animations/fade-in';

@Component({
  selector: 'app-not-for-everyone',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeIn, staggerFadeIn],
  template: `
    <section class="not-for-everyone" id="not-for-everyone">
      <div class="container">
        <div class="section-header" @fadeIn>
          <h2 class="section-title">To nie jest dla każdego:</h2>
        </div>
        <div class="not-list" [@staggerFadeIn]="points.length">
          <div *ngFor="let point of points" class="not-item">
            <span class="cross">✕</span>
            <p>{{ point }}</p>
          </div>
        </div>
        <div class="section-footer" @fadeIn>
          <p class="final-word">Jeśli jesteś gotowy/a wziąć odpowiedzialność za swoją przyszłość — to może być ten moment.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .not-for-everyone {
      background-color: var(--text-color);
      color: #fff;
    }

    .section-header {
      text-align: center;
      margin-bottom: 5rem;
    }

    .section-title {
      font-size: 3rem;
      color: #fff;
    }

    .not-list {
      max-width: 800px;
      margin: 0 auto 5rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .not-item {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 1rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      
      .cross {
        color: var(--accent-color);
        font-size: 1.2rem;
        font-weight: 700;
      }

      p {
        margin: 0;
        font-size: 1.2rem;
        color: rgba(255,255,255,0.8);
      }
    }

    .section-footer {
      text-align: center;
      max-width: 600px;
      margin: 0 auto;
    }

    .final-word {
      font-family: var(--font-headings);
      font-size: 1.5rem;
      font-style: italic;
      line-height: 1.6;
    }
  `]
})
export class NotForEveryoneComponent {
  points = [
    'jeśli oczekujesz szybkich efektów bez wkładu pracy',
    'jeśli nie chcesz się rozwijać',
    'jeśli nie jesteś gotowy/a na regularne działanie'
  ];
}
