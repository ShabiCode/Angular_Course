import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'Mole',
      description: 'Mole Recipe',
      imagePath:
        'https://assets.elgourmet.com/wp-content/uploads/2023/03/mole-_9IMJjkql3RCWT1eg6AHUD8PKyZLh7o-1024x683.png.webp',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

}
