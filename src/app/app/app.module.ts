import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';  // Import GridModule

import { AppComponent } from '../app.component';
import { GridComponent } from '../grid/grid.component';
import { DataService } from '../data.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GridModule  // Add GridModule to imports
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
