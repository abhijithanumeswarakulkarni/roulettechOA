import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRecipeDetails } from "../../state/slices/recipeSlice";
import { useNavigate } from "react-router-dom";

const RecipeDetails = () => {
    const selectedRecipe = useSelector((state) => state.recipe.selectedRecipe);
    const recipeDetails = useSelector((state) => state.recipe.recipeDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:8000/recipe/details?id=${selectedRecipe}`).then(response => {
            dispatch(updateRecipeDetails(response.data));
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, []);

    const handleHomeClick = () => {
        navigate("/");
    }

    return (
        <>
            {
                loading ? <div className="loader-bg"><span className="loading loading-infinity loading-lg" /></div> :
                    <div className="prose flex-col items-center">
                        <h1>{recipeDetails?.title}</h1>
                        <div className="flex recipe-details-cards">
                            <div className="card bg-base-100 shadow-xl p-10 mr-2.5 w-1/4">
                                <h3>Ingredients:</h3>
                                <div>
                                    {
                                        recipeDetails?.ingredients?.map((ingridient, index) => {
                                            return (
                                                <label class="label cursor-pointer" key={index}>
                                                    <input type="checkbox" class="checkbox" />
                                                    <span class="label-text">{ingridient}</span>
                                                </label>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl w-3/4">
                                <ul class="steps steps-vertical">
                                    {
                                        recipeDetails?.steps?.map((step, index) => {
                                            return (
                                                <li class="step step-neutral" key={index}>{step}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
            }
            <button class="btn btn-neutral btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-10" onClick={handleHomeClick}>Home</button>
        </>
    )
}

export default RecipeDetails;