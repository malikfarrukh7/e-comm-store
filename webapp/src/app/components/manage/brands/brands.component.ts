import { Component } from '@angular/core';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { inject } from '@angular/core';
import { BrandService } from '../../../services/brand.service';
import { MatButtonModule } from '@angular/material/button';

import { RouterLink } from '@angular/router';
import { Brand } from '../../../../../types/brand';

@Component({
  selector: 'app-brands',
  imports: [
    MatFormFieldModule,
            MatInputModule,
            MatTableModule,
            MatSortModule,
            MatPaginatorModule,
            MatButtonModule,
            RouterLink,
  ],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {




  displayedColumns: string[] = ['id', 'name', 'actions'];
    dataSource: MatTableDataSource<Brand>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    BrandService = inject(BrandService);

    constructor() {



      // Create 100 users
      // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource([] as Brand[]);
    }
    ngOnInit() {

      this.getServerData();
    }

    private getServerData() {
      this.BrandService.getBrands().subscribe((result) => {
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
      this.BrandService.deleteBrand(id).subscribe((result: any) => {
        alert("Category deleted");
        this.getServerData();
    })

  }



}
