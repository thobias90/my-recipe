
import { generateRecipe } from "@/services/AI/generator";
import styles from "@/styles";
import { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
export default function Index() {
  const [ingredient, setIngredient] = useState("");
  const [recipe, setRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const callRecipie = async () => {

    setIsLoading(true);
    setIngredient("");
    setRecipe("");

    try {
      const result = await generateRecipe(ingredient);
      setRecipe(result);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }

  }

  return (

    <View
      style={styles.container}

    >
      <Text style={styles.title}>My Recipe</Text>
      <Text style={styles.subtitle}>Create your recipe from whatever you have in your fridge</Text>
      <TextInput
        onChangeText={setIngredient}
        value={ingredient}
        style={styles.input}
        placeholder="add your ingredient" ></TextInput>

      <TouchableOpacity style={styles.button} onPress={callRecipie}>
        <Text style={styles.buttonText}>{isLoading ? "Thinking.." : "Get a recipe"}</Text>
      </TouchableOpacity>


      {
        recipe && <View style={styles.card}>
          <Text style={styles.cardTitle}>Recipe:</Text>
          <Text style={styles.cardText}>{recipe}</Text>
        </View>
      }

    </View>
  );
}

