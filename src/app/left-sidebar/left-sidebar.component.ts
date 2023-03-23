import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent {

  // Link Names //
  home = 'Home';
  gallery = 'Gallery';
  aboutMe = 'About Me';
  contact = 'Contact';

  // Link management //
  activeLink: string = 'Home';

  setActiveLink(link: string) {
    this.activeLink = link;
  }

  // Art Text //
  pieceName = "My Piece";
  size = "60\" x 60\"";
  medium = "oil on canvas";

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && !event.urlAfterRedirects) {
        this.router.navigate(['/']);
      }
    });
  }


}
