import { Component, OnInit } from '@angular/core';
import * as ElasticBubbleAnimation from 'elastic-bubble-animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const bubble = new ElasticBubbleAnimation({
      el: document.querySelector('.bubble-container'),
      bubbleSize: '25px'
    });

    bubble.init();
  }
}
