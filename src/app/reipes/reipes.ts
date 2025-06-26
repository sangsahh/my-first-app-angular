import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-reipes',
  standalone: false,
  templateUrl: './reipes.html',
  styleUrl: './reipes.css',
  providers: [RecipeService]
})
export class Reipes implements OnInit{
  
  constructor(){}

  ngOnInit(): void {
  }
}
