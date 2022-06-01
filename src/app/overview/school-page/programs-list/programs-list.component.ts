import { Component, OnInit } from '@angular/core';
import Program from '../../models/Program'
@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.scss']
})
export class ProgramsListComponent implements OnInit {
  programs:Program[]=[{
    title:"Front End Web Developer",
    conceptsCovered:"HTML5, CSS3, JavaScript, Angular",
    status:"Top Rated!",
    date:"June 8",
    toEnroll:"6 days to enroll"
},
{
  title:"Full Stack Web Developer",
  conceptsCovered:"HTML5, CSS3, JavaScript, Angular",
  status:" ",
  date:"June 8",
  toEnroll:"6 days to enroll"
}];
  constructor() { }

  ngOnInit(): void {
  }

}
