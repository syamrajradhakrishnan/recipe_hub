import { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom"



export const CreateRecipe = () => {
    const userID = useGetUserID();
    const [cookies, _] = useCookies(["access_token"])
    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: [],
        instructions: "",
        imageUrl: "",
        cookingTime: 0,
        userOwner: userID,
    });

    const navigate = useNavigate()


    const handleChange = (event) => {
        const { name, value } = event.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleIngredientChange = (event, idx) => {
        const { value } = event.target;
        const ingredients = recipe.ingredients;
        ingredients[idx] = value;
        setRecipe({ ...recipe, ingredients });
        console.log(recipe);
    };

    const addIngredient = () => {
        setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/recipes", recipe, { headers: { Authorization: cookies.access_token } });
            alert("Recipe Created");
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div class="max-w-md mx-auto p-6 bg-orange-100 rounded shadow-md">
            <h2 class="text-2xl font-bold mb-4 mt-11 md:mt-24 text-orange-800">Create Recipe</h2>
            <form onSubmit={onSubmit} class="space-y-4">
                <label htmlFor="name" class="block font-semibold text-orange-800">Name</label>
                <input type="text" id="name" name="name" onChange={handleChange} class="w-full border p-2 rounded focus:outline-none focus:border-orange-500" />

                <label htmlFor="ingredients" class="block font-semibold text-orange-800">Ingredients</label>
                {recipe.ingredients.map((ingredient, idx) => (
                    <input key={idx} type="text" name="ingredients" value={ingredient}
                        onChange={(event) => handleIngredientChange(event, idx)}
                        class="w-full border p-2 rounded focus:outline-none focus:border-orange-500"
                    />
                ))}
                <button onClick={addIngredient} type="button" class="bg-orange-500 text-white px-4 py-2 rounded">Add Ingredient</button>

                <label htmlFor="instructions" class="block font-semibold text-orange-800">Instructions</label>
                <textarea id="instructions" name="instructions" onChange={handleChange} class="w-full border p-2 rounded focus:outline-none focus:border-orange-500"></textarea>

                <label htmlFor="imageUrl" class="block font-semibold text-orange-800">Image URL</label>
                <input type="text" id="imageUrl" name="imageUrl" onChange={handleChange} class="w-full border p-2 rounded focus:outline-none focus:border-orange-500" />

                <label htmlFor="cookingTime" class="block font-semibold text-orange-800">Cooking Time (Minutes)</label>
                <input type="number" id="cookingTime" name="cookingTime" onChange={handleChange} class="w-full border p-2 rounded focus:outline-none focus:border-orange-500" />

                <button type="submit" class="bg-orange-500 text-white px-4 py-2 rounded">Create Recipe</button>
            </form>
        </div>

    );
};