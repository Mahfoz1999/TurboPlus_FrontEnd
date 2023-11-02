import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-model',
  templateUrl: './image-model.component.html',
  styleUrls: ['./image-model.component.css']
})
export class ImageModelComponent {
  @Input() imageSrc: string | undefined;
  @Output() close: EventEmitter<void> = new EventEmitter();

  closeImage() {
    this.close.emit();
  }
}
