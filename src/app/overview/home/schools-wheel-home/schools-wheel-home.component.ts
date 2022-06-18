import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-schools-wheel-home',
  templateUrl: './schools-wheel-home.component.html',
  styleUrls: ['./schools-wheel-home.component.scss'],
})
export class SchoolsWheelHomeComponent implements OnInit {
  @ViewChild('mySVG') el: ElementRef | undefined;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
  mouseOverWheal(nthOfPathSvg: number): void {
    this.renderer.setAttribute(this.el?.nativeElement.children[nthOfPathSvg], "class", "svgHover");
  }
  mouseOutWheal(nthOfPathSvg: number): void {
    this.renderer.removeAttribute(this.el?.nativeElement.children[nthOfPathSvg],"class")

  }
}
