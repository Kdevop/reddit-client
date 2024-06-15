import React, { useState, useEffect } from 'react';
import Styles from './search.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { fetchFromSearch } from '../../reduxstore/postSlice';
import { setSearchTerm, clearSearchTerm, selectSearchTerm } from '../../components/search/searchSlice';

const SearchBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchTerm = useSelector(selectSearchTerm);
    
       
    const searchResults = (e) => {
        e.preventDefault();
                
        dispatch(fetchFromSearch(searchTerm));
    

        const searchQuery = {
            name: searchTerm,
        }

        const query = createSearchParams(searchQuery);

        navigate({
            pathname: '/search',
            search: `?${query.toString()}` 
        })

        dispatch(setSearchTerm(''))
    }

    const handleChange = e => dispatch(setSearchTerm(e.target.value));

    return (
        <form className={Styles.search} onSubmit={searchResults}>
        <input type='text' 
        placeholder='Search' 
        value={searchTerm}
        onChange={handleChange}
        className={Styles.searchsubmit}
        aria-label='Search posts'
        />
        </form>
    )
};

export default SearchBar;