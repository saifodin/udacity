import { Component, Input, OnInit } from '@angular/core';
import Program from '../../models/Program'
@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  @Input() program:Program={
    title:"Front End Web Developer",
    conceptsCovered:"Concepts Covered:HTML5, CSS3, JavaScript, Angular",
    status:"Top Rated!",
    date:"June 8",
    toEnroll:"6 days to enroll",
    level:"intermediat"
};
  constructor() { }

  ngOnInit(): void {
  }

}
