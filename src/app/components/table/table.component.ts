import { Component, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonDataService } from 'src/app/json-table-module/json-table.service';

interface TableData {
  table: {
    headers: string[];
    rows: any[][];
  };
}

//Model;
@Component({
  selector: 'json-table',
  template: '<table> </table>',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  //HttpClient to load the data.json file
  private jsonData: any;

  constructor(
    private http: HttpClient,
    private ref: ElementRef,
    private renderer: Renderer2,
    private jsonService: JsonDataService
  ) {}

  async ngOnInit() {
    try {
      //Get the table data
      let data = await this.http
        .get<TableData>('/assets/data.json')
        .toPromise();

      //TRYING WITH SERVICE
      // this.jsonData = this.jsonService.getJsonData('/assets/data.json');

      // console.log('Table data ', this.jsonData);

      // Query the DOM for the element. Native Element use might be bad
      const tableElement = this.ref.nativeElement.querySelector('table');
      console.log(tableElement);

      const headerRow = this.renderer.createElement('tr');
      this.renderer.appendChild(tableElement, headerRow);

      data.table.headers.forEach((header) => {
        const headerCell = this.renderer.createElement('th');
        const headerText = this.renderer.createText(header);
        this.renderer.appendChild(headerCell, headerText);
        this.renderer.appendChild(headerRow, headerCell);
      });

      // Create the table body
      data.table.rows.forEach((rowData) => {
        const dataRow = this.renderer.createElement('tr');
        this.renderer.appendChild(tableElement, dataRow);
        rowData.forEach((cellData) => {
          const dataCell = this.renderer.createElement('td');
          const dataText = this.renderer.createText(cellData);
          this.renderer.appendChild(dataCell, dataText);
          this.renderer.appendChild(dataRow, dataCell);
        });
      });
    } catch (error) {
      console.error(error);
    }
  }
}
