import { Component, Type, VERSION } from "@angular/core";
import { GeneChildComponent } from "./gene-child.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  geneChildComponent: Type<GeneChildComponent> = GeneChildComponent;
}
