import { useEffect, useState } from "react";
import { Header } from '../components/header.jsx';
import Recipes from "../components/Recipes.jsx";
import { useCookies } from 'react-cookie';
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { Link } from 'react-router-dom';


export const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [savedRecipes, setSavedRecipes] = useState([]);
    const [cookies, _] = useCookies(["access_token"])

    const userID = useGetUserID();

    useEffect(() => {

        const fetchRecipe = async () => {

            try {
                const response = await axios.get("http://localhost:3001/recipes");
                setRecipes(response.data);

            } catch (err) {
                console.error(err);
            }

        };

        const fetchSavedRecipe = async () => {

            try {
                const response = await axios.get(`http://localhost:3001/recipes/savedRecipes/ids/${userID}`);
                setSavedRecipes(response.data.savedRecipes);

            } catch (err) {
                console.error(err);
            }

        };

        fetchRecipe();
        if (cookies.access_token) fetchSavedRecipe();

    }, []);

    const saveRecipe = async (recipeID) => {
        try {
            const response = await axios.put("http://localhost:3001/recipes", { recipeID, userID, }, { headers: { Authorization: cookies.access_token } });
            setSavedRecipes(response.data.savedRecipes)
        } catch (err) {
            console.error(err);
        }

    };

    const isRecipeSaved = (id) => savedRecipes.includes(id);

    return (
        <main className="w-full flex flex-col">
            <Header title={<p>Share, Discover, and Savor Culinary Creations with a World of Food Enthusiasts.</p>} type="home" />

            <section className="container mx-auto px-4 lg:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {recipes.map((recipe) => (
                        <div key={recipe._id} className="mb-8">
                            <div className="bg-green-200 p-4 rounded-lg shadow-md">

                                <Link to={`/recipes/${recipe._id}`}>
                                    <h2 className="text-xl font-semibold mb-2 text-orange-600 text-center">
                                        {recipe.name}
                                    </h2>
                                </Link>
                                <button
                                    onClick={() => saveRecipe(recipe._id)}
                                    disabled={isRecipeSaved(recipe._id)}
                                    className={`bg-orange-500 text-white px-4 py-2 rounded-full focus:outline-none ${isRecipeSaved(recipe._id) ? 'bg-gray-500 cursor-not-allowed' : ''
                                        }`}
                                >
                                    {isRecipeSaved(recipe._id) ? 'Saved' : 'Save'}
                                </button>
                            </div>

                            <img
                                className="mt-4 w-full h-48 object-cover rounded-md border-4 border-green-500"
                                src={recipe.imageUrl}
                                alt={recipe.name}
                            />

                            <p className="mt-2 text-orange-600">
                                Cooking Time: {recipe.cookingTime} (Minutes)
                            </p>
                        </div>
                    ))}
                </div>
            </section>




        </main>
    )
}