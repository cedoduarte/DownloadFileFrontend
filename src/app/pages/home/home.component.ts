import { Component, inject } from '@angular/core';
import { FileDownloadServiceService } from '../../services/file-download-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  fileDownloadService = inject(FileDownloadServiceService);

  downloadFile() {
    this.fileDownloadService.downloadFile().subscribe(response => {
      const fileName = response.headers.get("content-disposition")?.split(";")[1].split("=")[1];
      const blob: Blob = response.body as Blob;
      let a = document.createElement("a");
      a.download = fileName!;
      a.href = window.URL.createObjectURL(blob);
      a.click();
    });
  }
}
