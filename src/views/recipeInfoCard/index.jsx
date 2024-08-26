import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { updateSelectedRecipe } from "../../state/slices/recipeSlice";

const RecipeCardInfo = (cardProps) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(updateSelectedRecipe(cardProps?.recipe?.id))
        navigate("/details");
    }

    return (
        <div className="card card-side bg-base-100 w-96 shadow-xl recipe-info">
            <figure>
                <img
                    className="recipe-image"
                    src={cardProps?.recipe?.image}
                    alt="Recipe"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{cardProps?.recipe?.title}</h2>
                {/* <ul className="steps steps-vertical">
                    {getInstructions()}
                </ul> */}
                <p>{cardProps?.recipe?.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-neutral btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={handleClick}>Get Recipe</button>
                </div>
            </div>
        </div>
    );
}

export default RecipeCardInfo;