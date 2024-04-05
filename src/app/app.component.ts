import { APP_BASE_HREF, CommonModule, isPlatformServer } from '@angular/common';
import { Component, Inject, Optional, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Response } from 'express';
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
    @Inject(PLATFORM_ID) private platformId: Object,
    @Optional() @Inject(APP_BASE_HREF) private appBaseHref: Response,
    @Optional() @Inject(REQUEST) private request: Response,
    @Optional() @Inject(RESPONSE) private response: Response
  ) {
    if (isPlatformServer(platformId) && this.response) {
      console.log('basehref', this.appBaseHref);
      console.log('request', this.request);
      console.log('response', this.response);
      // this.response.status(404); // if you want to send a 404 status code error to the client (this won't work if you don't reload the page, as angular handles routes internally in the browser)
      console.log('This console output will only appear server-side, not client-side (browser).');
    }
  }
}
