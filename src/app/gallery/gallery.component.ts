import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {


  // TODO: Better way of organizing this.
  imageUrls: string[] = [
    'https://i.imgur.com/Gzb9fYF.png',
    'https://i.imgur.com/57BvRnf.png',
    'https://i.imgur.com/3yIkgP2.png',
    'https://i.imgur.com/X68LxfY.png',
    'https://i.imgur.com/7x5JJxS.png',
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
    'https://i.imgur.com/sWUT4lE.png',
    'https://i.imgur.com/c6YWT9S.png',
    'https://i.imgur.com/JawRP0L.png',
    'https://i.imgur.com/nb2PWO0.png',
    'https://i.imgur.com/IKtMHTW.png',
    'https://i.imgur.com/2f76FAl.png',
    'https://i.imgur.com/S07gZqt.png',
    'https://i.imgur.com/Qgau0Nq.png',
    'https://i.imgur.com/OR5wbtz.png',
    'https://i.imgur.com/TgIyS66.png',
    'https://i.imgur.com/yMvJFWQ.png',
    'https://i.imgur.com/JNMmaAJ.png',
    'https://i.imgur.com/Tq2BbNs.png',
    'https://i.imgur.com/oyla7ux.gif',
    'https://i.imgur.com/euxBH9r.png',
    'https://i.imgur.com/iHEPr1G.png',
    'https://i.imgur.com/oRKkygS.png',
    'https://i.imgur.com/fZWslqw.png',
    'https://i.imgur.com/genhkEd.png',
    'https://i.imgur.com/RYMRCm4.png',
    'https://i.imgur.com/HbNY00B.png',
    'https://i.imgur.com/tQJ3tYY.png',
    'https://i.imgur.com/H6bygle.png',
    'https://i.imgur.com/i9KHF63.jpeg',
    'https://i.imgur.com/QIooNv9.png',
    'https://i.imgur.com/sFH7pCK.png',
    'https://i.imgur.com/27FNGOR.png',
    'https://i.imgur.com/KJ6H41v.png',
    'https://i.imgur.com/Tx20AIT.png',
    'https://i.imgur.com/uY0WFtq.png',
    'https://i.imgur.com/cQqF9SQ.jpeg',
    'https://i.imgur.com/2HfRsb4.jpeg',
    'https://i.imgur.com/fRrAIPy.png',

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


