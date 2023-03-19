import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/Ingredient';
import { ShoppingListService } from '../shopping-list.service'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  constructor(private shoppingListService: ShoppingListService) { }

  ingredients: Ingredient[] =[];

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getHeroes();
  }

  getHeroes(): void {
  }
  onSubmit(form: NgForm): void {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.setHeroes(newIngredient);
    console.log('hello');
    this.ingredients = this.shoppingListService.getHeroes();

  }

  delete(): void{
    this.ingredients = [];
    this.shoppingListService.deleteHeroes();
  }
}
