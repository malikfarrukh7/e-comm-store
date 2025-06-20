import { Component } from '@angular/core';




import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { MatButtonModule } from '@angular/material/button';

import { RouterLink } from '@angular/router';
import { Brand } from '../../../../../types/brand';
import { Product } from '../../../../../types/product';


@Component({
  selector: 'app-products',
  imports: [MatFormFieldModule,
            MatInputModule,
            MatTableModule,
            MatSortModule,
            MatPaginatorModule,
            MatButtonModule,
            RouterLink,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {



   displayedColumns: string[] = ['id', 'name', 'actions'];
    dataSource: MatTableDataSource<Product>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    ProductService = inject(ProductService);

    constructor() {



      // Create 100 users
      // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource([] as any);
    }
    ngOnInit() {

      this.getServerData();
    }

    private getServerData() {
      this.ProductService.getAllProducts().subscribe((result:any) => {
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

  //   delete(id: string) {
  //     this.categoryService.deleteCategory(id).subscribe((result: any) => {
  //       alert("Category deleted");
  //       this.getServerData();
  //   })

  // }

  delete(id: string){

  }

}
