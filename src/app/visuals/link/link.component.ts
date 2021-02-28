import { Component, Input, OnInit } from '@angular/core';

import { Link } from '../../d3';

@Component({
  selector: '[link]',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input('link') link!: Link;

  constructor() { }

  ngOnInit(): void {
  }

}

export class LinkVisualComponent  {
}