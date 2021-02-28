import { Component, Input, OnInit } from '@angular/core';

import { D3Service, ForceDirectedGraph, Node, Link } from '../../d3';

@Component({
  selector: 'graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  @Input('nodes') nodes!: Node[];
  @Input('links') links!: Link[];

  graph!: ForceDirectedGraph;

  constructor(private d3Service: D3Service) { }

  ngOnInit() {
    /** Receiving an initialized simulated graph from our custom d3 service */
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }

  private _options: { width: number, height: number } = { width: 800, height: 600 };

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

}
