import { Component } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  constructor(private shoppingListService: ShoppingListService) { }

  mystring: string = "asdfasd "
  getHeroes(): void {
    this.mystring = this.shoppingListService.getHeroes();
  }
}
