import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { HttpClientModule } from '@angular/common/http';

import { JsonTableModule } from '../../json-table-module/json-table-module.module';

// Register any needed components, directives o pipes in module files.

//Declarations - We must tell Angualr that Table Componenet belongs to the module before we export it to be used by other modules, such as AppModule

// Exports - An array of components that can be used in any template that this module is imported into.

@NgModule({
  imports: [HttpClientModule, JsonTableModule],
  exports: [TableComponent],
  declarations: [TableComponent],
})
export class TableModule {}
