import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { Property } from '../../model/property';
import {
  NgxGalleryAnimation,
  NgxGalleryImage,
  NgxGalleryOptions,
} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number = 0;
  property = new Property();
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private housingService: HousingService
  ) {}

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe((data: any) => {
      this.property = data['prp'];
    });

    // this.route.params.subscribe((params) => {
    //   this.propertyId = +params['id'];
    //   this.housingService
    //     .getProperty(this.propertyId)
    //     .subscribe((data: Property | undefined) => {
    //       this.property = data as Property;
    //     });
    // });

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true,
      },
    ];

    this.galleryImages = [
      {
        small: 'assets/images/internal1.jpg',
        medium: 'assets/images/internal1.jpg',
        big: 'assets/images/internal1.jpg',
      },
      {
        small: 'assets/images/internal2.jpg',
        medium: 'assets/images/internal2.jpg',
        big: 'assets/images/internal2.jpg',
      },
      {
        small: 'assets/images/internal3.jpg',
        medium: 'assets/images/internal3.jpg',
        big: 'assets/images/internal3.jpg',
      },
      {
        small: 'assets/images/internal4.jpg',
        medium: 'assets/images/internal4.jpg',
        big: 'assets/images/internal4.jpg',
      },
    ];
  }
}
