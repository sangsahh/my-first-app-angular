import { Component, NgModule } from "@angular/core";
import { Reipes } from "./reipes/reipes";
import { ShoppingList } from "./shopping-list/shopping-list";
import { RouterModule, Routes } from "@angular/router";
import { RecipeStart } from "./reipes/recipe-start/recipe-start";
import { RecipeDetail } from "./reipes/recipe-detail/recipe-detail";
import { RecipeEdit } from "./reipes/recipe-edit/recipe-edit";

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes' , pathMatch: 'full'},
    {path: 'recipes', component: Reipes, children:[
        {path: '', component: RecipeStart},
        {path: ':id', component: RecipeDetail},
        {path: 'new', component: RecipeEdit},
        {path: ':id/edit', component: RecipeEdit}
    ]},
    {path: 'shopping-list', component: ShoppingList}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}