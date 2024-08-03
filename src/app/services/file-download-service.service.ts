import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadServiceService {
  http = inject(HttpClient);
  private url: string = "https://localhost:7088/TemporaryFile/person-file";

  constructor() {}

  public downloadFile() {
    return this.http.get(this.url, {
      observe: "response",
      responseType: "blob"
    }).pipe(share());
  }
}
