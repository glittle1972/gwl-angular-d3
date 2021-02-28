import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LineExampleComponent } from './line-example/line-example.component';
import { GraphComponent } from './visuals/graph/graph.component';
import { NodeComponent } from './visuals/node/node.component';
import { LinkComponent } from './visuals/link/link.component';
import { ZoomableDirective } from './d3/zoomable.directive';
import { DraggableDirective } from './d3/draggable.directive';

@NgModule({
  declarations: [
    AppComponent,
    LineExampleComponent,
    GraphComponent,
    NodeComponent,
    LinkComponent,
    ZoomableDirective,
    DraggableDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
