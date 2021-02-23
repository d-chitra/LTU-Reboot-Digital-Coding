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
    ],
    letsCook: function(){
        console.log("I'm hungry, lets cook" + ' ' +this.recipeTitle);
    }
};

objRecipe.letsCook();

// 