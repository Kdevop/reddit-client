import React from 'react';

import Footer from '../components/footer/footer';
import Styles from './error.module.css';
import skull from '../assets/skull-crossbones-solid.png';
import { useNavigate } from 'react-router-dom';
import useErrorBoundary from '../components/errorBoundary/useErrorBoundary';



// styling to be completed after routing is sorted. 

const ErrorPage = () => {
    const error = useErrorBoundary();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (error) {
            navigate('/error');
        }
    }, [error, navigate])

    return(
        <div>
        <div className={Styles.home}>
            {/* <aside className={Styles.griditem1}>
                <Subreddits/>
            </aside> */}
            {/* I dont think I will need the below, need to think this one through */}
            <main className={Styles.griditem2}>
                <div className={Styles.errorcontainer}>
                    <img src={skull} className={Styles.skull} alt='Image of skull and cross bones'/>
                    <h4>Woops - looks like we couldn't find that.</h4>
                    <p>Please press home, select another subreddit, or try a different search</p>
                </div>
            </main>
        </div>
        <Footer/>
        </div>
    );
};

export default ErrorPage;