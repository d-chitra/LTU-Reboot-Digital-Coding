objRecipe ={
    recipeTitle:'Beans on Toast',
    servings: 1,
    ingredients: [
    'Baked Beans',
    'bread',
    'butter',
    'black pepper'
    ],
    directions:[
        'Empty tin of beans into a pan',
        'Put bread in toaster and toast until golden brown',
        'butter the toast',
        'Place beans on top of buttered toast',
        'Apply black pepper as you see fit'
    ]
};

console.log(objRecipe.recipeTitle);
console.log(objRecipe.servings);
for(counter=0; counter<objRecipe.ingredients.length; counter++){
    let ingredient =objRecipe.ingredients[counter];
    console.log(ingredient);
}
for(counter=0; counter<objRecipe.directions.length; counter++){
    let direction =objRecipe.directions[counter];
    console.log(direction);
}