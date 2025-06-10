import { Component } from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { inject } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { MatButtonModule } from '@angular/material/button';

import { RouterLink } from '@angular/router';
import { category } from '../../../../../types/category';


@Component({

  standalone: true,
  selector: 'app-categories',
  imports: [MatFormFieldModule,
            MatInputModule,
            MatTableModule,
            MatSortModule,
            MatPaginatorModule,
            MatButtonModule,
            RouterLink,],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

   displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource: MatTableDataSource<category>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  categoryService = inject(CategoryService);

  constructor() {



    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource([] as category[]);
  }
  ngOnInit() {

    this.getServerData();
  }

  private getServerData() {
    this.categoryService.getCategories().subscribe((result) => {
      console.log(result);
      this.dataSource.data = result;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id: string) {
    this.categoryService.deleteCategory(id).subscribe((result: any) => {
      alert("Category deleted");
      this.getServerData();
  })

}
}
