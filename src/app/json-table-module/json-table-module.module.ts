import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JsonDataService } from './json-table.service';
@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [JsonDataService],
})
export class JsonTableModule {}
