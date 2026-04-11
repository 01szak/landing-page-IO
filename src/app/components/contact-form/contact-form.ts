import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeIn } from '../../animations/fade-in';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  animations: [fadeIn],
  template: `
    <section class="contact-section" id="contact">
      <div class="container">
        <div class="contact-container" @fadeIn>
          <div class="contact-info">
            <h2 class="section-title">Porozmawiajmy</h2>
            <p>Jeśli szukasz zmiany i chcesz budować coś własnego, jestem tutaj, aby Cię w tym wesprzeć.</p>
          </div>

          <div class="form-wrapper">
            <form *ngIf="!submitted" [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label>Imię</label>
                <input type="text" formControlName="name" placeholder="Twoje imię">
              </div>

              <div class="form-group">
                <label>Email</label>
                <input type="email" formControlName="email" placeholder="Twój adres email">
              </div>

              <div class="form-group">
                <label>Czym się obecnie zajmujesz?</label>
                <textarea formControlName="currentActivity" rows="3"></textarea>
              </div>

              <div class="form-group">
                <label>Dlaczego szukasz zmiany?</label>
                <textarea formControlName="reasonForChange" rows="3"></textarea>
              </div>

              <div class="form-group">
                <label>Ile godzin tygodniowo możesz poświęcić?</label>
                <input type="text" formControlName="hoursAvailable" placeholder="np. 5-10 godzin">
              </div>

              <button type="submit" class="btn btn--primary" [disabled]="contactForm.invalid">
                Wyślij wiadomość
              </button>
            </form>

            <div *ngIf="submitted" class="success-message" @fadeIn>
              <h3>Dziękuję za wiadomość!</h3>
              <p>Odezwę się do Ciebie najszybciej, jak to możliwe.</p>
              <button class="btn btn--secondary btn--sm" (click)="submitted = false">Wyślij kolejną</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-container {
      display: grid;
      grid-template-columns: 0.8fr 1.2fr;
      gap: 5rem;
      background: #fff;
      padding: 5rem;
      border-radius: 40px;
      box-shadow: 0 40px 100px rgba(47, 58, 52, 0.05);
      border: 1px solid var(--secondary-bg);

      @media (max-width: 992px) {
        grid-template-columns: 1fr;
        padding: 3rem;
      }
    }

    .contact-info {
      h2 {
        font-size: 3rem;
        color: var(--text-color);
      }
      p {
        font-size: 1.2rem;
        color: var(--text-color);
        opacity: 0.8;
      }
    }

    .form-group {
      margin-bottom: 2rem;

      label {
        display: block;
        font-size: 0.9rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--text-color);
      }

      input, textarea {
        width: 100%;
        padding: 1rem 1.5rem;
        border: 1px solid var(--secondary-bg);
        border-radius: 12px;
        font-family: var(--font-body);
        font-size: 1rem;
        transition: all 0.3s ease;
        background: #fafafa;

        &:focus {
          outline: none;
          border-color: var(--accent-color);
          background: #fff;
          box-shadow: 0 0 0 4px rgba(168, 181, 162, 0.1);
        }
      }
    }

    .success-message {
      text-align: center;
      padding: 3rem 0;

      h3 {
        margin-bottom: 1rem;
        color: var(--accent-color);
      }

      p {
        margin-bottom: 2rem;
        color: var(--text-color);
      }
    }

    button[type="submit"] {
      width: 100%;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
      }
    }
  `]
})
export class ContactFormComponent {
  http = inject(HttpClient);
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      currentActivity: ['', Validators.required],
      reasonForChange: ['', Validators.required],
      hoursAvailable: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formRequest = {
        firstname: this.contactForm.get('name')?.value,
        email: this.contactForm.get('email')?.value,
        topic: 'Wiadomość ze strony https://izabelaolszewska.pl/',
        message: this.buildFormMessage()
      }
      this.http.put('/api/email-service/', formRequest)
        .pipe(take(1))
        .subscribe({
          next: () => {
            setTimeout(() => {
              this.submitted = true;
              this.contactForm.reset();
            }, 300);
            },
          error: (error) => {console.log(formRequest)},
        })

    }
  }

  buildFormMessage(): string {
    const message =
      `Czym się obecnie zajmujesz?
       \n${this.contactForm.get('currentActivity')?.value}
        \nDlaczego szukasz zmiany?
        \n${this.contactForm.get('reasonForChange')?.value}
        \nIle godzin tygodniowo możesz poświęcić?
        \n${this.contactForm.get('hoursAvailable')?.value}`
    return message.toString();
  }
}
export type FormRequest = {email: string; topic: string; message: string, firstname: string;}
