import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div class="container footer-content">
        <div class="footer-brand">
          <h2 class="logo">IZABELA OLSZEWSKA</h2>
          <p>Budowanie drugiego źródła dochodu poprzez rozwój osobisty i nowoczesne modele biznesowe.</p>
        </div>
        <div class="footer-links">
          <div class="link-group">
            <h4>Szybkie Linki</h4>
            <a href="#hero">Start</a>
            <a href="#for-who">Dla kogo</a>
            <a href="#story">O mnie</a>
            <a href="#contact">Kontakt</a>
          </div>
          <div class="link-group">
            <h4>Social Media</h4>
            <a href="https://www.instagram.com/iza_olszewska/">Instagram</a>
            <a href="https://www.facebook.com/iza.olszewska.16?locale=pl_PL">Facebook</a>
          </div>
        </div>
      </div>
      <div class="container footer-bottom">
        <p>&copy; 2026 Izabela Olszewska. Wszelkie prawa zastrzeżone.</p>
      </div>g
    </footer>
  `,
  styles: [`
    footer {
      background-color: #fcfcfc;
      padding: 6rem 0 3rem;
      border-top: 1px solid #f0f0f0;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 5rem;
      margin-bottom: 5rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
    }

    .logo {
      font-family: var(--font-headings);
      font-size: 1.5rem;
      letter-spacing: 2px;
      margin-bottom: 1.5rem;
    }

    .footer-brand p {
      max-width: 400px;
      color: var(--secondary-color);
      font-size: 1.1rem;
    }

    .footer-links {
      display: flex;
      gap: 5rem;

      @media (max-width: 576px) {
        gap: 2rem;
        flex-wrap: wrap;
      }
    }

    .link-group {
      h4 {
        font-family: var(--font-body);
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 2rem;
      }

      a {
        display: block;
        color: var(--secondary-color);
        margin-bottom: 1rem;
        font-size: 1rem;

        &:hover {
          color: var(--accent-color);
        }
      }
    }

    .footer-bottom {
      padding-top: 3rem;
      border-top: 1px solid #f0f0f0;
      display: flex;
      justify-content: space-between;
      color: #999;
      font-size: 0.9rem;

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {}
