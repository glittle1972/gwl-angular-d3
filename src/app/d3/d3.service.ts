import { ElementRef, Injectable } from '@angular/core';
import * as d3 from 'd3';

import { Node } from './node.model';
import { Link } from './link.model';
import { ForceDirectedGraph } from './force-directed-graph.model';

/** This service will provide methods to enable user interaction with elements
 *  while maintaining the d3 simulations physics
 */
@Injectable({
  providedIn: 'root'
})
export class D3Service {

  constructor() { }

  /** A method to bind a pan and zoom behaviour to an svg element */
  applyZoomableBehaviour(svgElement: ElementRef<any>, containerElement : SVGElement) {
    let svg: d3.Selection<any, unknown, null, undefined>;
    let container: d3.Selection<any, unknown, null, undefined>;
    let zoomed, zoom: d3.ZoomBehavior<Element, unknown>;

    svg = d3.select(svgElement.nativeElement);
    container = d3.select(containerElement);

    zoomed = (containerElement: SVGElement) => {
      const transform = d3.zoomTransform(containerElement);
      container.attr("transform", "translate(" + transform.x + "," + transform.y + ") scale(" + transform.k + ")");
    }

    zoom = d3.zoom().on("zoom", zoomed);
    svg.call(zoom);
  }

   /** A method to bind a draggable behaviour to an svg element */
   applyDraggableBehaviour(element: SVGElement, node: Node, graph: ForceDirectedGraph) {
    const d3element: d3.Selection<SVGElement, any, null, undefined> = d3.select(element);

     function started(this: SVGElement, event: any, d: unknown) {
      /** Preventing propagation of dragstart to parent elements */
      event.sourceEvent.stopPropagation();
      
      if (!event.active) {
        graph.simulation.alphaTarget(0.3).restart();
      }

      event.on("drag", dragged).on("end", ended);

      function dragged() {
        node.fx = event.x;
        node.fy = event.y;
      }

      function ended() {
        if (!event.active) {
          graph.simulation.alphaTarget(0);
        }

        node.fx = null;
        node.fy = null;
      }
    }

    let behave: d3.DragBehavior<SVGElement, unknown, unknown> = d3.drag();
    behave = behave.on("start", started);
    d3element.call(behave);
  }

  /** The interactable graph we will simulate in this article
   * This method does not interact with the document, purely physical calculations with d3
   */
  getForceDirectedGraph(nodes: Node[], links: Link[], options: { width: number, height: number} ) {
    let graph = new ForceDirectedGraph(nodes, links, options);
    return graph;
  }
}
