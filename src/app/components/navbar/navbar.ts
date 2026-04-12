import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="isScrolledDown">
      <div class="container nav-content">
        <a (click)="scrollTo('hero')" class="logo">HOME</a>
        <ul class="nav-links" [class.active]="isMobileMenuOpen">
          <li (click)="scrollTo('for-who')">Dla kogo</li>
          <li (click)="scrollTo('story')">O mnie</li>
          <li (click)="scrollTo('what-i-do')">Co robię</li>
          <li (click)="scrollTo('how-it-works')">Jak to działa</li>
          <li (click)="scrollTo('contact')" class="btn btn--primary btn--sm" >Kontakt</li>
        </ul>
        <button class="menu-toggle" (click)="isMobileMenuOpen = !isMobileMenuOpen">
          <span [class.active]="isMobileMenuOpen"></span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: 1.5rem 0;
      transition: all 0.4s ease;

      &.scrolled {
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        padding: 1rem 0;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      }
    }

    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-family: var(--font-headings);
      font-weight: 700;
      font-size: 1.5rem;
      letter-spacing: 4px;
      color: var(--text-color);
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;

      li {
        font-size: 0.9rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--text-color);
        opacity: 0.8;

        &:hover {
          color: var(--accent-color);
          opacity: 1;
          cursor: pointer;
        }

        &.btn {
          color: #fff;
          opacity: 1;
          padding: 0.6rem 1.5rem;
          font-size: 0.8rem;
        }
      }

      @media (max-width: 768px) {
        display: none;
        &.active {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: #fff;
          padding: 2rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
      }
    }

    .menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      width: 30px;
      height: 20px;
      position: relative;

      @media (max-width: 768px) {
        display: block;
      }

      span {
        display: block;
        width: 100%;
        height: 2px;
        background: var(--text-color);
        position: absolute;
        transition: 0.3s;

        &::before, &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background: var(--text-color);
          left: 0;
          transition: 0.3s;
        }

        &::before { top: -8px; }
        &::after { bottom: -8px; }

        &.active {
          background: transparent;
          &::before { transform: rotate(45deg); top: 0; }
          &::after { transform: rotate(-45deg); bottom: 0; }
        }
      }
    }
  `]
})
export class NavbarComponent {
  isScrolledDown = false;
  isMobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolledDown = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isScrolledDown = true;
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : 'auto';
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    if (this.isMobileMenuOpen) {
      this.toggleMobileMenu();
    }
  }
}
