import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Component, Inject, Optional } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ssr-injection-issue';

  constructor(@Optional() @Inject(APP_BASE_HREF) private appBaseHref: string) {
    console.log('basehref', this.appBaseHref);
  }
}
