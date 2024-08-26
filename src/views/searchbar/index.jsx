import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { update } from "../../state/slices/searchInputSlice";

const SearchBar = () => {

    const search = useSelector((state) => state.searchInput.value);
    const dispatch = useDispatch();

    const onSearchInputChange = (event) => {
        dispatch(update(event.target.value));
    }

    return (
        <input type="text" placeholder="Type here to filter" className="input input-bordered w-3/4 min-h-16 flex-row" onChange={onSearchInputChange} value={search} />
    )
};

export default SearchBar;