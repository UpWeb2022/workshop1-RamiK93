import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public titleApp: string;
  public list:Product[];
  public priceMax: number=400;
  constructor() {

   }

  ngOnInit(): void {
    this.titleApp= 'First angular App';
    this.list= [
      {id: 12,
      title : 't-shirt',
      descreption: '100% coton',
      price: 120,
      quantity: 0,
      picture: 'https://contents.mediadecathlon.com/p1901252/k$5b79ad35576fa8adc7330b6c770fc6e3/t-shirt-sportee-100-coton-homme-noir.jpg?&f=452x452',
      like: 25},
      {id: 32,
        title : 'djean',
        descreption: '100% djean',
        price: 150,
        quantity: 63,
        picture: 'https://pochettesquareplus.tn/wp-content/uploads/2021/06/8A3C2E22-5F6B-46CF-973B-04C55EEBC38E.jpeg',
        like: 29},
        {id: 2,
          title : 'chemise',
          descreption: '100% djean',
          price: 10,
          quantity: 93,
          picture: 'https://photos6.spartoo.com/photos/188/18830844/18830844_500_B.jpg',
          like: 2}

    ]
  }
  public incrementLike(p:Product):void{
    let i= this.list.indexOf(p)
    if(i!=-1){
      this.list[i].like++;
    }

  }
  public incrementProduct(p:Product):void{
    let i= this.list.indexOf(p)
    
      this.list[i].quantity--;
    

  }

}
