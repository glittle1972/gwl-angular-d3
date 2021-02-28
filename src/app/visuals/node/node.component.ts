import { Component, Input, OnInit } from '@angular/core';
import { Node } from '../../d3';

@Component({
  selector: '[node]',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input('node') node!: Node;

  constructor() { }

  ngOnInit(): void {
  }

}
