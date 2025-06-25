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

import { ShoppingListService } from './shopping-list/shopping-list.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStart } from './reipes/recipe-start/recipe-start';
import { RecipeEdit } from './reipes/recipe-edit/recipe-edit';


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
    DropdownDirective,
    RecipeStart,
    RecipeEdit
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
    ,ShoppingListService
  ],
  bootstrap: [App]
})
export class AppModule { }
