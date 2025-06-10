import {inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../../../types/brand';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {


  http=inject(HttpClient);


    constructor() {}

    getBrands() {
      return this.http.get<Brand[]>(environment.apiUrl + "/brand");
    }
    getBrandById(id: string) {
      return this.http.get<Brand>(environment.apiUrl + `/brand/${id}`);
    }

    addBrand(name: string) {

      // return this.http.post(environment.apiUrl + "/brand", { name: name });

      return this.http.post("http://localhost:3000/brand", { name: name });

      // "http://localhost:3000/category", { name: name }
    }


    updateBrand(id: string, name: string){
      return this.http.put(environment.apiUrl + `/brand/${id}`, { name: name });
    }

    deleteBrand(id: string) {
      return this.http.delete(environment.apiUrl + `/brand/${id}`);
    }

}
