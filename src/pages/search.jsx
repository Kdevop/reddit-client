import React from 'react';
import Reddits from '../components/post/reddits';
import Subreddits from '../components/subreddits/subreddits';
import Footer from '../components/footer/footer';
import Styles from './search.module.css';

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