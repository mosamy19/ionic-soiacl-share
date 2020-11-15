import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  repoUrl = 'https://github.com/Epotignano/ng2-social-share';
  imageUrl = 'https://avatars2.githubusercontent.com/u/10674541?v=3&s=200';
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
  
  constructor() {}

}
