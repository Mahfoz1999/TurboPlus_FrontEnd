import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {apiBaseUrl} from "../data/api-config";

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {
  imageUrl?: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.imageUrl = params['image'];
    });
  }

  protected readonly apiBaseUrl = apiBaseUrl;
}
