import { Component, OnInit } from '@angular/core';
import Alumni from '../../models/Alumni';
import Path from '../../models/Path';
import Program from '../../models/Program';

@Component({
  selector: 'app-paths-section',
  templateUrl: './paths-section.component.html',
  styleUrls: ['./paths-section.component.scss']
})
export class PathsSectionComponent implements OnInit {
  pathes: Path[] = [];
  path: Path = { title: "Front-End Web Development", description: "Demand for front-end developers is widespread across every industry and continues to rise. By mastering the valuable skills of this career path, youll be prepared for roles at a wide array of companies, from startups to global organizations." };
  pathPrograms: Program[]=[];
  alumnis:Alumni[]=[];
  aluminiProgram:Program={
    title: "Full Stack Web Developer",
    conceptsCovered: "HTML5, CSS3, JavaScript, Angular",
    status: " ",
    date: "June 8",
    toEnroll: "6 days to enroll",
    level:"intermediat",
  };
  constructor() { }

  ngOnInit(): void {
    this.pathes = [{ title: "Front-End Web Development", description: "Demand for front-end developers is widespread across every industry and continues to rise. By mastering the valuable skills of this career path, youll be prepared for roles at a wide array of companies, from startups to global organizations." },
    { title: "Back-End Web Development", description: "Demand for front-end developers is widespread across every industry and continues to rise. By mastering the valuable skills of this career path, youll be prepared for roles at a wide array of companies, from startups to global organizations." }]

    this.pathPrograms = [{
      title: "Front End Web Developer",
      conceptsCovered: "HTML5, CSS3, JavaScript, Angular",
      status: "Top Rated!",
      date: "June 8",
      toEnroll: "6 days to enroll",
      level:"intermediat",
    },
    {
      title: "Full Stack Web Developer",
      conceptsCovered: "HTML5, CSS3, JavaScript, Angular",
      status: " ",
      date: "June 8",
      toEnroll: "6 days to enroll",
      level:"intermediat",
    }, {
      title: "Full Stack Web Developer",
      conceptsCovered: "HTML5, CSS3, JavaScript, Angular",
      status: " ",
      date: "June 8",
      toEnroll: "6 days to enroll",
      level:"intermediat",
    }, {
      title: "Full Stack Web Developer",
      conceptsCovered: "HTML5, CSS3, JavaScript, Angular",
      status: " ",
      date: "June 8",
      toEnroll: "6 days to enroll",
      level:"intermediat",
    }]
    this.alumnis=[{
      img:"src/assets/images/student-omar.jpg",
      name:"Omar Albeik",
      title:"Lead IOS Developer",
      company:"Mobilion",
      story:"https://medium.com/udacity/from-0-to-githubs-1-trending-swift-developer-in-less-than-2-years-3f8b7772c54f",
    
   }]
   
  }

}
