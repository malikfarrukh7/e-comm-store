import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Inject } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-category-form',
  imports: [FormsModule,MatInputModule,MatButtonModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss'
})
export class CategoryFormComponent {
  name!: string;

  categoryService = inject(CategoryService);
  router = inject(Router);
  route = inject(ActivatedRoute)
  isEdit= false;
  id!: string | null;
  ngOnInit() {


  this.id = this.route.snapshot.paramMap.get('id');

    console.log(this.id);
    if (this.id){
      this.isEdit = true;

    this.categoryService.getCategoryById(this.id).subscribe((result: any)=>{
      console.log(result);
      this.name = result.name;

    })

    }

   }
  add(){

    this.categoryService.addCategories(this.name).subscribe((result: any) => {
    console.log(this.name);

    this.router.navigateByUrl("/admin/categories");
  })

}

update(){

   this.categoryService.updateCategory(this.id!, this.name).subscribe((result: any)=>{
    console.log(this.name);
    alert("Category updated ");
    this.router.navigateByUrl("/admin/categories");
   })

  console.log(this.name);

}



}
