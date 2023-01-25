import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { GeneChildComponent } from "./gene-child.component";
import { BioTableComponent, ChildWrapper } from "./bio-table.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [
    AppComponent,
    GeneChildComponent,
    BioTableComponent,
    ChildWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
