import { Component, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy, State } from '@progress/kendo-data-query';
import { DataService } from '../data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  public gridView: GridDataResult = { data: [], total: 0 }; // Initialize gridView
  public pageSize: number = 10;
  public skip: number = 0;
  public sort: SortDescriptor[] = [];
  public state: State = {
    skip: 0,
    take: 10
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.dataService.getAllData().subscribe(data => {
      this.gridView = {
        data: data,
        total: data.length
      };
    });
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.state = { ...this.state, skip: this.skip };
  }

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
  }
}
