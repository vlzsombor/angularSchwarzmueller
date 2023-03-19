import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient';
import { INGREDIENTS } from '../mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  getHeroes(): Ingredient[] {
    return this.ingredients;
  }

  setHeroes(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }

  deleteHeroes(): void{
    this.ingredients = [];
  }


  ngOnInit() {
    this.ingredients = INGREDIENTS;
  }
  private ingredients: Ingredient[] = [];
  constructor() { }
}
