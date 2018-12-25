import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test', 'https://www.thespruceeats.com/thmb/_aVW6M204ROQkzKLBB6eu_my4pE=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/goulash-2500-56a20fa53df78cf7727185be.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
