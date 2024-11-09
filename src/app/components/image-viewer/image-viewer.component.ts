// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-image-viewer',
//   templateUrl: './image-viewer.component.html',
//   styleUrl: './image-viewer.component.css'
// })
// export class ImageViewerComponent {

// }

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent {
  @Input() image!: string;
  @Output() close = new EventEmitter<void>();

  closeViewer() {
    this.close.emit();
  }
}
