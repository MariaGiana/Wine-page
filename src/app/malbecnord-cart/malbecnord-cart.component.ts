import { Component, OnInit } from '@angular/core';
import {WineCartService} from '../wine-cart.service';
import { Wines } from '../wines-list/Wines';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-malbecnord-cart',
  standalone: false,
  templateUrl: './malbecnord-cart.component.html',
  styleUrl: './malbecnord-cart.component.scss'
})
export class MalbecnordCartComponent implements OnInit {
  
  cartList$: Observable<Wines[]>;

  constructor(private cart: WineCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }
  ngOnInit(): void {}

  removeFromCart(wine: Wines): void {
    this.cart.removeFromCart(wine); 
  }
  
}
