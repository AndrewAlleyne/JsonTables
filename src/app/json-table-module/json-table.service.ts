import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface TableData {
  table: {
    headers: string[];
    rows: (string | number)[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class JsonDataService {
  constructor(private http: HttpClient) {}

  //Grab the JSON Data
  getJsonData(urlToFilePath: string): Object {
    const data = this.getRequest(urlToFilePath);
    return data;
  }

  async getRequest(path: string): Promise<TableData> {
    const response = await this.http.get<TableData>(path).toPromise();

    console.log('From service ', response);
    return response;
  }
}
