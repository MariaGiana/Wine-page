import { Component } from '@angular/core';
import { Wines } from './Wines';

@Component({
  selector: 'app-wines-list',
  standalone: false,
  templateUrl: './wines-list.component.html',
  styleUrl: './wines-list.component.scss'
})
export class WinesListComponent{
   wines: Wines[] = [
   {
      wineName: 'Luigi Bosca de Sangre',
      grapeVariety: 'Cabernet Sauvignon',
      winery: 'Familia Arizu',
      description: 'A full-bodied red wine with dark fruit flavors and savory tastes from black currant to tobacco.',
      price: 149.99,
      image: 'assets/img/luigiBosca.png', 
      stock: 23,
      clearance: false,
      quantity:0,
    },
    
    {
      wineName: 'Trapiche Chardonnay',
      grapeVariety: 'Chardonnay',
     winery: 'Trapiche',
      description: 'A rich and creamy white wine with hints of ripe fruit, butter, and vanilla.',
      price: 59.49,
      image:'assets/img/trapicheChardonnay.png',
      stock: 57,
      clearance: true,
      quantity:0,

    },
    {
      wineName: 'Nieto Senetiner',
      grapeVariety: 'Pinot Noir',
      winery: 'Nieto Senetiner',
      description: 'A light and elegant red wine with notes of cherry, strawberry, and a hint of spice.',
      price: 129.99,
      image: 'assets/img/nietoSenetinerNoir.png',
      stock: 0,
      clearance: false,
      quantity:0,
    },
    {
      wineName: 'Reservado',
      grapeVariety: 'Cabernet Sauvignon',
      winery: 'Concha e Toro',
      description: 'A full-bodied red wine with dark fruit flavors and savory tastes from black currant to tobacco.',
      price: 49.99,
      image: 'assets/img/reservado.png',
      stock: 15,
      clearance: false,
      quantity:0,
    }
  ];
  maxReached(m:string){
    alert(m);
  }

}
  

