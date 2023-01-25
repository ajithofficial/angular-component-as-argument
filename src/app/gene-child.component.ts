import { Component, EventEmitter, Input, Output } from "@angular/core";
import { GenericChild } from "./bio-table.component";

@Component({
  selector: "hello",
  template: `
    <h1 (click)="geneSelection.emit(geneData)">
      Hello from Child {{ geneData | json }}!
    </h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class GeneChildComponent extends GenericChild {
  @Input() geneData: any;
  @Output() geneSelection = new EventEmitter<any>();
}
