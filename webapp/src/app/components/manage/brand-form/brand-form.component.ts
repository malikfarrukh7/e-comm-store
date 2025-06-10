import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { inject } from '@angular/core';
import { BrandService } from '../../../services/brand.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-brand-form',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './brand-form.component.html',
  styleUrl: './brand-form.component.scss'
})
export class BrandFormComponent {

  name!: string;

  brandsSevice = inject(BrandService);
  router = inject(Router);








  route = inject(ActivatedRoute)
  isEdit= false;
  id!: string | null;
  ngOnInit() {


  this.id = this.route.snapshot.paramMap.get('id');

    console.log(this.id);
    if (this.id){
      this.isEdit = true;

    this.brandsSevice.getBrandById(this.id).subscribe((result: any)=>{
      console.log(result);
      this.name = result.name;

    })

    }

   }






  // add(){


  //   this.brandsSevice.addBrand(this.name).subscribe( () => {

  //     alert('Brand added successfully');

  //     this.router.navigateByUrl('/admin/brands');

  //   });
  // }

   add(){

    this.brandsSevice.addBrand(this.name).subscribe((result: any) => {
    console.log(this.name);
    alert('Brand added successfully');

    this.router.navigateByUrl("/admin/brands");
  });

  }



  update(){

   this.brandsSevice.updateBrand(this.id!, this.name).subscribe((result: any)=>{
    console.log(this.name);
    alert("Brand updated ");
    this.router.navigateByUrl("/admin/brands");
   })

  console.log(this.name);

}




}
