import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent {
  @Input() boldText?: string ;
  @Input() body?: string ;
  @Input() num?: string;


}
