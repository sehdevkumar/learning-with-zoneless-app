import { DeferedBlocksComponent } from './../defered-blocks/defered-blocks.component';
import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { ProjectionComponent } from '../projection/projection.component';
import { OperatorsComponent } from '../operators/operators.component';
import { FormsComponent } from '../forms/forms.component';
import { InjectionTokenComponent } from '../injection-token/injection-token.component';
import { HighlightDirective } from '../Directives/HightLightDirective';
import { ShadowDomComponent } from '../shadow-dom/shadow-dom.component';
import { HttpClient } from '@angular/common/http';
import { UploadDownloadComponent } from '../upload-download-progress/upload-download-progress.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, ProjectionComponent,OperatorsComponent,FormsComponent,InjectionTokenComponent,DeferedBlocksComponent, HighlightDirective,ShadowDomComponent,UploadDownloadComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = signal('Hey, I am zoneless');
  observable$: Observable<any> = toObservable(this.title) // Moved to the injection context

  cdRef = inject(ChangeDetectorRef);
  https  = inject(HttpClient)

  constructor() {
    // Now you can set up anything that relies on Angular's injection context here
  }

  ngOnInit(): void {

    this.https.get("https://jsonplaceholder.typicode.com/todos").subscribe()

    setTimeout(() => {
      this.title.set("We are not happy")
      // this.cdRef.detectChanges(); // This will trigger change detection
    }, 6000);
  }
}
