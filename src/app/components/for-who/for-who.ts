import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn, staggerFadeIn } from '../../animations/fade-in';

@Component({
  selector: 'app-for-who',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeIn, staggerFadeIn],
  template: `
    <section class="for-who" id="for-who">
      <div class="container">
        <div class="section-header" @fadeIn>
          <h2 class="section-title">To dla Ciebie, jeśli:</h2>
        </div>
        <ul class="points-list" [@staggerFadeIn]="points.length">
          <li *ngFor="let point of points" class="point-item">
            <span class="icon">🌿</span>
            <p>{{ point }}</p>
          </li>
        </ul>
        <div class="section-footer" @fadeIn>
          <p class="accent-text">Jeśli choć jeden punkt brzmi znajomo — warto dowiedzieć się więcej.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .for-who {
      background-color: var(--secondary-bg);
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-title {
      font-size: 3rem;
      color: var(--text-color);
    }

    .points-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .point-item {
      background: #fff;
      padding: 2.5rem;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(47, 58, 52, 0.05);
      transition: transform 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
      }

      .icon {
        font-size: 1.5rem;
        display: block;
        margin-bottom: 1.5rem;
      }

      p {
        font-size: 1.1rem;
        margin-bottom: 0;
        color: var(--text-color);
      }
    }

    .section-footer {
      text-align: center;
    }

    .accent-text {
      font-family: var(--font-headings);
      font-size: 1.5rem;
      font-style: italic;
      color: var(--accent-color);
    }
  `]
})
export class ForWhoComponent {
  points = [
    'chcesz mieć więcej niż jedno źródło dochodu',
    'interesuje Cię rozwój i niezależność',
    'chcesz budować coś własnego przy wsparciu innych',
    'szukasz możliwości, która pasuje do Twojego stylu życia'
  ];
}
