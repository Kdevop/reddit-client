import React from 'react';
import Reddits from '../components/post/reddits';
import Subreddits from '../components/subreddits/subreddits';
import Footer from '../components/footer/footer';
import Styles from './search.module.css';

// This page should essenitally be the same as the home page, but with different reddits, logix to be included in the reddits page.

const SearchPage = () => {
    return(
        <div>
        <div className={Styles.home}>
            <aside className={Styles.griditem1}>
                <Subreddits/>
            </aside>
            <main className={Styles.griditem2}>
                <Reddits/>
            </main>
        </div>
        <Footer/>
        </div>
    )
}

export default SearchPage;