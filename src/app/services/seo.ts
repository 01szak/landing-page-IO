import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  setMetaTags(config: { title?: string, description?: string, image?: string }) {
    const defaultTitle = 'Izabela Olszewska – drugie źródło dochodu';
    const defaultDesc = 'Dowiedz się, jak stworzyć dodatkowe źródło dochodu i zyskać większą niezależność finansową.';
    
    this.title.setTitle(config.title || defaultTitle);
    
    this.meta.updateTag({ name: 'description', content: config.description || defaultDesc });
    
    // OpenGraph
    this.meta.updateTag({ property: 'og:title', content: config.title || defaultTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description || defaultDesc });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
    }
    
    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title || defaultTitle });
    this.meta.updateTag({ name: 'twitter:description', content: config.description || defaultDesc });
  }
}
