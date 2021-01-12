import React from 'react';
import classes from './Home.module.css'
const Home = (props) => {
    return ( 
        <div className={classes.Home}>
            <h1> {props.name}</h1>
        </div>
     );
}
 
export default Home;