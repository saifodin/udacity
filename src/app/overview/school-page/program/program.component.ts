import { Component, Input, OnInit } from '@angular/core';
import Program from '../../models/Program'
@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  @Input() program:Program={
    title:"Product Management",
    conceptsCovered:"OOP, C#",
    status:"New!",
    date:"May 25",
};
  constructor() { }

  ngOnInit(): void {
  }

}
