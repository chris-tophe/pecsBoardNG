import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root',
})
export class PrintingService {
  constructor() {}

  public printToPdf(element: HTMLElement): void {
    html2canvas(element).then((canvas) => {
      let content = canvas.toDataURL('image/png');
      let pdf = new jsPDF();
      pdf.addImage(content, 'PNG', 0, 0, 208, 295);
      pdf.save('board.pdf');
    });
  }
}
