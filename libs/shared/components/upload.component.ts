import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  Output,
  ViewChild,
  inject,
  EventEmitter,
} from '@angular/core';
import { fromEvent, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

{
}

@Component({
  selector: 'vg-uploader',
  template: `
    <label for="uploader">
      <!--  You can implement styles on this div container -->
      <div>上傳</div>
      <!-- ^^^^ You can implement styles on this div container -->
    </label>
    <input #upload id="uploader" type="file" style="display:none" />
  `,
  standalone: true,
})
export class UploadComponent implements AfterViewInit {
  private destroyRef = inject(DestroyRef);

  @ViewChild('upload') input!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'change')
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        map((data) => (data as any).target.files[0]),
      )
      .subscribe((file) => {
        console.log(file);
        //  Implement file upload here
      });
  }
}
