import { Component, OnInit } from '@angular/core';
import Program from '../../models/Program'
@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.scss']
})
export class ProgramsListComponent implements OnInit {
  programs:Program[]=[{
    title:"Product Management",
    conceptsCovered:"OOP, C#",
    status:"New!",
    date:"May 25",
},
{
  title:"Product Management",
  conceptsCovered:"OOP, C#",
  status:"New!",
  date:"May 25",
}];
  constructor() { }

  ngOnInit(): void {
  }

}
