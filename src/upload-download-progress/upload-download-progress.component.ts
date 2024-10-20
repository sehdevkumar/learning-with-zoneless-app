import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-download',
  standalone:true,
  imports: [CommonModule],
  template: `
    <div style="color: red;" *ngIf="downloadProgress !== null">
      Download Progress: {{ downloadProgress }}%
    </div>
    <div style="color: green;" *ngIf="uploadProgress !== null">
      Upload Progress: {{ uploadProgress }}%
    </div>
  `,
})
export class UploadDownloadComponent implements OnInit {
  downloadProgress: number | null = null;
  uploadProgress: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.downloadFile()
  }

  downloadFile() {
    this.http
      .get('http://ipv4.download.thinkbroadband.com/5MB.zip', {
        reportProgress: true,
        observe: 'events',
        responseType:"blob"
      })
      .subscribe((event) => {
        if (event.type === HttpEventType.DownloadProgress) {
          this.downloadProgress = Math.round(
            100 * (event.loaded / event.total!)
          );
        } else if (event instanceof HttpResponse) {
          console.log('Download complete!');
          this.downloadProgress = null;
        }
      });
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);

    this.http
      .post('your-upload-url', formData, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total!));
        } else if (event instanceof HttpResponse) {
          console.log('Upload complete!');
          this.uploadProgress = null;
        }
      });
  }
}
