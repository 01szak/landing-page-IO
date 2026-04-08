import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="isScrolled">
      <div class="container nav-content">
        <a href="#hero" class="logo">IZA</a>
        <div class="nav-links" [class.active]="isMenuOpen">
          <a href="#for-who" (click)="isMenuOpen = false">Dla kogo</a>
          <a href="#story" (click)="isMenuOpen = false">O mnie</a>
          <a href="#what-i-do" (click)="isMenuOpen = false">Co robię</a>
          <a href="#how-it-works" (click)="isMenuOpen = false">Jak to działa</a>
          <a href="#contact" class="btn btn--primary btn--sm" (click)="isMenuOpen = false">Kontakt</a>
        </div>
        <button class="menu-toggle" (click)="isMenuOpen = !isMenuOpen">
          <span [class.active]="isMenuOpen"></span>
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

      a {
        font-size: 0.9rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--text-color);
        opacity: 0.8;
        
        &:hover {
          color: var(--accent-color);
          opacity: 1;
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
  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
