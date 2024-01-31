import { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";

export const SavedRecipes = () => {
    const [savedRecipes, setSavedRecipes] = useState([]);
    const userID = useGetUserID();

    useEffect(() => {

        const fetchSavedRecipe = async () => {

            try {
                const response = await axios.get(`http://localhost:3001/recipes/savedRecipes/${userID}`);
                setSavedRecipes(response.data.savedRecipes);
                                
            }catch (err) {
                console.error(err);
            }

        };

        fetchSavedRecipe()
    }, []);

    

    
    return (
        <div>
        <section className="container mx-auto px-4 lg:px-0 pt-24">
            <h1 className="text-4xl font-bold mb-8 text-orange-500 text-center">Saved Recipes</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {savedRecipes.map((recipe) => (
                    <li key={recipe._id} className="mb-8">
                        <div className="bg-green-200 p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-2 text-orange-600 text-center">{recipe.name}</h2>
                        </div>
    
                        <img
                            className="mt-4 w-full h-48 object-cover rounded-md border-4 border-green-300"
                            src={recipe.imageUrl}
                            alt={recipe.name}
                        />
    
                        <p className="mt-2 text-orange-600">Cooking Time: {recipe.cookingTime} (Minutes)</p>
                    </li>
                ))}
            </ul>
        </section>
    </div>
    
    )
    
};