import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Component, Inject, Optional } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { REQUEST, RESPONSE } from '../express.tokens';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ssr-injection-issue';

  constructor(
    @Optional() @Inject(APP_BASE_HREF) private appBaseHref: string,
    @Optional() @Inject(REQUEST) private request: string,
    @Optional() @Inject(RESPONSE) private response: string
  ) {
    console.log('basehref', this.appBaseHref);
    console.log('request', this.request);
    console.log('response', this.response);
  }
}
