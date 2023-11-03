import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent {
  @Input() boldText?: string ;
  @Input() Text?: string ;
  @Input() svg?: string ;
  @Input() num?: string;


}
