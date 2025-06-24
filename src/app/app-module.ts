import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Header } from './header/header';
import { RecipeList } from './reipes/recipe-list/recipe-list';
import { RecipeItem } from './reipes/recipe-list/recipe-item/recipe-item';
import { RecipeDetail } from './reipes/recipe-detail/recipe-detail';
import { ShoppingList } from './shopping-list/shopping-list';
import { ShoppingListEdit } from './shopping-list/shopping-list-edit/shopping-list-edit';
import { Reipes } from './reipes/reipes';
import { DropdownDirective } from './shared/dropdown.directive';


@NgModule({
  declarations: [
    App,
    Header,
    ShoppingList,
    ShoppingListEdit,
    RecipeList,
    RecipeItem,
    RecipeDetail,
    Reipes,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
