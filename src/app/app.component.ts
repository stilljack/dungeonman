import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';
  public imagesUrl = ['/assets/images/sketches.png',
    '/assets/images/background_2.jpg',
    '/assets/images/background_idea.jpg',
    '/assets/images/bees.jpg',
    '/assets/images/bees_colour.jpg',
    ];
}
