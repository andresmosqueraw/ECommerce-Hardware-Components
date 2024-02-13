import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };
  isAuthenticated: boolean = false; // Añadido para controlar la autenticación

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });

    this.checkAuthentication();
  }

  checkAuthentication() {
    // Verificar si el usuario está autenticado al cargar la app
    const user = localStorage.getItem('loggedUser');
    this.isAuthenticated = !!user; // Esto será true si 'loggedUser' existe, false de lo contrario
  }
}
