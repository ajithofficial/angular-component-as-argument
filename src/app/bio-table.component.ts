import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  Output,
  Type,
  ViewChild,
  ViewContainerRef
} from "@angular/core";

export abstract class GenericChild {
  abstract geneData: any;
  abstract geneSelection: EventEmitter<any>;
}

@Component({
  selector: "child-wrapper",
  template: `
    <ng-container #child></ng-container>
  `
})
export class ChildWrapper extends GenericChild {
  @Input()
  genericChild: Type<GenericChild>;
  @Input()
  geneData: any;
  @Output()
  geneSelection: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("child", { read: ViewContainerRef })
  childsContainer: ViewContainerRef;

  constructor(
    private factory: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef
  ) {
    super();
  }

  ngAfterViewInit(): void {
    const componentFactory = this.factory.resolveComponentFactory(
      this.genericChild
    );
    const ref = this.childsContainer.createComponent(componentFactory);

    ref.instance.geneData = this.geneData;
    ref.instance.geneSelection.subscribe(event => {
      this.geneSelection.emit(event);
    });
    this.cdr.detectChanges();
  }
}

@Component({
  selector: "bio-tables",
  template: `
    <!-- simulates ngTemplate from priemng -->
    <ng-container
      *ngTemplateOutlet="pTemplate; context: { $implicit: data }"
    ></ng-container>

    <ng-template #pTemplate let-rowData>
      <tr>
        <child-wrapper
          [genericChild]="genericChild"
          [geneData]="rowData"
          (geneSelection)="selection($event)"
        ></child-wrapper>
      </tr>
    </ng-template>
  `
})
export class BioTableComponent implements AfterViewInit {
  @Input()
  genericChild: Type<GenericChild>;

  data: any[] = ["Some data 1", "Some data 2"];

  ngAfterViewInit() {}

  selection(event) {
    console.log("selection called " + event);
  }
}
