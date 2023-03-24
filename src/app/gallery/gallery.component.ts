import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {


  imageUrls: string[] = [
    'https://i.imgur.com/Gzb9fYF.png',
    'https://i.imgur.com/57BvRnf.png',
    'https://i.imgur.com/3yIkgP2.png',
    'https://i.imgur.com/X68LxfY.png',
    'https://i.imgur.com/7x5JJxS.png',
    'https://i.imgur.com/3Xi3d5k.png',
    'https://i.imgur.com/2lKAIFm.png',
    'https://i.imgur.com/8nYqppS.png',
    'https://i.imgur.com/WQtkMMC.png',
    'https://i.imgur.com/okT1CYY.png',
    'https://i.imgur.com/ChQEUqn.png',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/238/200/300',
    'https://picsum.photos/id/239/200/300',
    'https://picsum.photos/id/240/200/300',
    'https://picsum.photos/id/241/200/300',
    'https://picsum.photos/id/242/200/300',
    // Add more image URLs here...
  ];

  columns: number = 4;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    const breakpoints = [Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge];
    const images = Array.from(document.getElementsByClassName('gallery-image')) as HTMLElement[];
    
    this.breakpointObserver.observe(breakpoints).subscribe(result => {
      this.columns = Object.keys(result.breakpoints).findIndex(breakpoint => result.breakpoints[breakpoint]) + 1;
      
      const rowWidth = window.innerWidth - (this.columns * 10);
      let totalWidth = 0;
      let imagesInRow = 0;
      
      images.forEach((image, i) => {
        image.style.width = 'auto';
        image.style.height = 'auto';
        totalWidth += image.offsetWidth;
        
        if (totalWidth > rowWidth) {
          (images[i].previousElementSibling as HTMLElement).style.marginRight = '0'; 
          return;
        }
        
        imagesInRow++;
        (images[i].previousElementSibling as HTMLElement).style.marginRight = '5px';
      });
      
      if (imagesInRow > 0) {
        this.columns = imagesInRow;
      }
    });
  }
}


