import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: any[] = [];
  page: number = 1;
  category: string = '';

  // Selected image for the viewer
  selectedImage: string | null = null;

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    const searchTerm = this.category || 'popular';
    this.imageService.getImages(this.page, searchTerm).subscribe((data: any) => {
      this.images = [...this.images, ...data.results];
      this.page++;
    });
  }
  

  onScroll() {
    this.loadImages();
  }

  // Triggered when a category button is clicked
  onCategoryChange(newCategory: string) {
    if (this.category !== newCategory) {
      this.category = newCategory;
      this.images = [];  // Clear previous images
      this.page = 1;     // Reset page number
      this.loadImages(); // Fetch new images based on the selected category
    }
  }

  
  viewImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closeViewer() {
    this.selectedImage = null;
  }
}
