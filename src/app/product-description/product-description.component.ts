import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Album } from '../album';

@Component({
  selector: 'app-poduct-description',
  templateUrl: './poduct-description.component.html',
  styleUrls: ['./poduct-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo: Album;
  errorMessage: string;
  constructor(private _productService: ProductService) { }
  ngOnInit() {
   this._productService.getAlbum(1)
          .subscribe(response => this.albumInfo = response, 
              error => this.errorMessage = <any>error);
  }

}
