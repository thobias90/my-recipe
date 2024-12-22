const Groq = require('groq-sdk');

const groq = new Groq({apiKey: ''});

export async function generateRecipe(ingredient: string) {
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {
        "role": "user",
        "content": "I'm creating a mobile app where the user will add ingredients and I's like to see a suggestion of recipe "
      },
      {
        "role": "assistant",
        "content": "That sounds like a great idea! To suggest recipes to users based on the ingredients they add, you'll need to implement a recipe suggestion algorithm. Here's a high-level overview of how you can approach this:\n\n**Database and Data Collection**\n\n1. **Recipe Database**: Create a database of recipes, each with a unique ID, ingredients, cooking instructions, and other relevant details. You can either create your own database or use an existing one like Yummly, Spoonacular, or BigOven.\n2. **Ingredient Database**: Create a separate database of ingredients, each with a unique ID, name, and potential variations (e.g., \"chicken breast\" and \"boneless chicken breast\").\n\n**Algorithm**\n\n1. **Ingredient Parsing**: When a user adds ingredients, parse the input to identify individual ingredients and their quantities (if specified).\n2. **Ingredient Matching**: Compare the user-input ingredients with the ingredients in your recipe database to find matches. You can use techniques like:\n\t* Exact matching: Compare the user-input ingredient with the exact ingredient names in the recipe database.\n\t* Fuzzy matching: Use techniques like Levenshtein distance or cosine similarity to match similar ingredient names (e.g., \"chicken\" and \"chicken breast\").\n3. **Recipe Filtering**: Filter the recipes in your database based on the matched ingredients. You can consider factors like:\n\t* Ingredient relevance: Give more weight to recipes that use the most common or essential ingredients.\n\t* Ingredient quantity: Consider recipes that require similar quantities of the input ingredients.\n4. **Ranking and Suggestion**: Rank the filtered recipes based on their relevance, popularity, or other criteria, and suggest the top N recipes to the user.\n\n**Technical Implementation**\n\n1. **Natural Language Processing (NLP)**: Use NLP libraries like NLTK, spaCy, or Stanford CoreNLP to parse user-input ingredients and extract individual ingredients.\n2. **Database Querying**: Use a database querying language like SQL or NoSQL to retrieve recipes from your database that match the user-input ingredients.\n3. **Algorithmic Logic**: Implement the algorithmic logic using a programming language like Python, Java, or JavaScript.\n\n**Challenges and Optimization**\n\n1. **Handling Variations**: Account for variations in ingredient names, quantities, and units (e.g., \"1 cup\" vs. \"250ml\").\n2. **Handling Substitutions**: Consider allowing users to substitute ingredients and adjust the recipe suggestions accordingly.\n3. **Performance Optimization**: Optimize your algorithm and database queries to ensure fast response times, even with a large recipe database.\n4. **User Feedback and Learning**: Collect user feedback and adjust your algorithm to improve recipe suggestions over time.\n\n**Additional Ideas**\n\n1. **User Profile and Preferences**: Store user preferences, dietary restrictions, and cooking skills to provide personalized recipe suggestions.\n2. **Recipe Clustering**: Cluster recipes based on ingredients, cooking techniques, or cuisines to provide more diverse suggestions.\n3. **Image and Video Content**: Integrate images and videos of recipes to make the suggestions more engaging and informative.\n\nBy following this approach, you can create a robust recipe suggestion algorithm that provides users with relevant and appealing recipe ideas based on the ingredients they add. Good luck with your mobile app development!"
      },
      {
        "role": "user",
        "content": "beef \n"
      },
      {
        "role": "assistant",
        "content": "You've entered \"beef\" as an ingredient. Here are some recipe suggestions based on beef:\n\n**Top 5 Recipe Suggestions:**\n\n1. **Beef Stroganoff**: A classic Russian dish featuring sautéed beef, mushrooms, and a creamy sauce, served with egg noodles.\n2. **Beef Tacos**: A flavorful and spicy Mexican-inspired recipe with seasoned ground beef, crispy tacos, and your favorite toppings.\n3. **Beef and Broccoli Stir-Fry**: A quick and easy Chinese-style stir-fry with beef, broccoli, and a savory sauce, served over rice.\n4. **Beef Burgers**: Juicy beef burgers with your choice of toppings, served on a toasted bun with crispy fries.\n5. **Beef and Mushroom Gravy over Mashed Potatoes**: A hearty, comforting dish featuring slow-cooked beef and mushrooms in a rich gravy, served over creamy mashed potatoes.\n\n**More Recipe Ideas:**\n\n* Beef Fajitas\n* Beef and Vegetable Kabobs\n* Beef and Guinness Stew\n* Beef and Onion Meatball Subs\n* Beef and Spinach Calzones\n\nThese are just a few ideas to get you started. You can always add or modify ingredients to suit your taste preferences and dietary needs.\n\nWould you like to add another ingredient to refine the recipe suggestions or choose one of these recipes to explore further?"
      },
      {
        "role": "user",
        "content": "please suggest just one recipe at time, with the step by step to prepare it \n"
      },
      {
        "role": "assistant",
        "content": "Let's start with a simple and delicious recipe:\n\n**Recipe:** Beef Tacos\n\n** Servings:** 4-6 people\n\n**Prep Time:** 20 minutes\n\n**Cook Time:** 15 minutes\n\n**Total Time:** 35 minutes\n\n**Ingredients:**\n\n* 1 pound ground beef (you've already entered this ingredient!)\n* 1 medium onion, diced\n* 1 packet of taco seasoning (or homemade blend of chili powder, cumin, paprika, and salt)\n* 8-10 corn tortillas\n* Shredded cheese (cheddar or Monterey Jack work well)\n* Optional toppings: diced tomatoes, shredded lettuce, diced avocado, sour cream, salsa, cilantro\n\n**Step-by-Step Instructions:**\n\n1. **Prepare the Ground Beef:**\nIn a large skillet, heat 1 tablespoon of oil over medium-high heat. Add the ground beef and cook until browned, breaking it up into small pieces as it cooks.\n2. **Soften the Onion:**\nAdd the diced onion to the skillet and cook until it's translucent and starting to caramelize (about 5 minutes).\n3. **Add Taco Seasoning:**\nSprinkle the taco seasoning over the beef and onion mixture. Stir well to combine. Cook for 1-2 minutes, until the flavors are fragrant.\n4. **Season and Simmer:**\nAdd 1/2 cup of water to the skillet and stir to combine. Bring the mixture to a simmer and let cook for 5-7 minutes, until the liquid has thickened slightly and the flavors have melded together.\n5. **Warm Tortillas:**\nWrap a damp paper towel around a stack of 4-6 tortillas and microwave for 20-30 seconds, until they're warm and pliable.\n6. **Assemble Tacos:**\nSpoon the beef mixture onto a tortilla, followed by any desired toppings (cheese, tomatoes, lettuce, etc.). Fold the tortilla in half to enclose.\n7. **Serve and Enjoy:**\nServe immediately and enjoy your delicious beef tacos!\n\nHow was that? Would you like to try this recipe or would you like me to suggest another one?"
      },
      {
        "role": "user",
        "content": "beef, corn and rice "
      },
      {
        "role": "assistant",
        "content": "With beef, corn, and rice, I'd like to suggest a simple and flavorful recipe:\n\n**Recipe:** Beef and Corn Fried Rice\n\n**Servings:** 4-6 people\n\n**Prep Time:** 15 minutes\n\n**Cook Time:** 20 minutes\n\n**Total Time:** 35 minutes\n\n**Ingredients:**\n\n* 1 pound beef (you've already entered this ingredient!)\n* 1 cup corn kernels (fresh or frozen, thawed)\n* 2 cups cooked rice (preferably day-old rice)\n* 1 tablespoon vegetable oil\n* 2 cloves garlic, minced\n* 1 teaspoon soy sauce\n* Salt and pepper to taste\n* Scallions, chopped (optional)\n\n**Step-by-Step Instructions:**\n\n1. **Prepare the Beef:**\nCut the beef into small pieces and season with salt and pepper. Heat 1 tablespoon of oil in a large skillet or wok over medium-high heat. Add the beef and cook until browned, about 3-4 minutes. Remove from heat and set aside.\n2. **Cook the Corn:**\nIn the same skillet, add another tablespoon of oil if needed. Add the corn kernels and cook until they're lightly browned and tender, about 5 minutes.\n3. **Prepare the Rice:**\nAdd the cooked rice to the skillet, breaking up any clumps with a spatula. Cook for about 2-3 minutes, until the rice is heated through and starting to brown.\n4. **Add Garlic and Soy Sauce:**\nAdd the minced garlic to the skillet and cook for 1 minute, until fragrant. Then, add the soy sauce and stir-fry for another minute.\n5. **Combine Beef and Corn:**\nAdd the cooked beef and corn to the skillet with the rice. Stir-fry everything together for about 2-3 minutes, until the ingredients are well combined.\n6. **Season and Serve:**\nTaste and adjust the seasoning as needed. Transfer the beef and corn fried rice to a serving platter or individual plates. Garnish with chopped scallions if desired.\n\nEnjoy your delicious and filling beef and corn fried rice!\n\nWould you like to try this recipe or would you like me to suggest another one?"
      },
      {
        "role": "user",
        "content": ingredient
      },
    ],
    "model": "llama-3.1-70b-versatile",
    "max_tokens": 100,
    "temperature": 1,

  });

  console.log(ingredient);


  return chatCompletion.choices[0]?.message?.content;
}
