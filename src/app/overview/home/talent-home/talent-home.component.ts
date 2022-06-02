import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-talent-home',
  templateUrl: './talent-home.component.html',
  styleUrls: ['./talent-home.component.scss'],
})
export class TalentHomeComponent implements OnInit {
  whichOpen: number = 1;

  constructor() {}
  ngOnInit(): void {}

  selectAccordion(number: any) {
    this.whichOpen = number;
  }
}
