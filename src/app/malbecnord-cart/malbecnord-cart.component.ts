import { Component, OnInit } from '@angular/core';
import {WineCartService} from '../wine-cart.service';
import { Wines } from '../wines-list/Wines';

@Component({
  selector: 'app-malbecnord-cart',
  standalone: false,
  templateUrl: './malbecnord-cart.component.html',
  styleUrl: './malbecnord-cart.component.scss'
})
export class MalbecnordCartComponent implements OnInit {
  
  cartList:Wines[]=[];
  constructor(private cart: WineCartService) { 
    cart.cartList.subscribe(cart => {
      this.cartList = cart;});
  }
  ngOnInit(): void {}
}
