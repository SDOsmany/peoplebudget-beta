import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/index';
import { Context } from '../store/store';
import Button from '../components/Button';
import Card from '../components/Card';
import map from '../../src/miamiMap.png';
import { home, card, getStarted } from './Home.module.css';
import Info from '../components/Info Section/Info';

const Home = () => {
    const {
        actions: { getMenus }
    } = useContext(Context);
    // console.log(getMenus());
    return (
        <div className={`${home} container-fluid`}>
            <Navbar options={getMenus()} />

            <div className={getStarted}>
                <Card
                    customClassName={card}
                    height="fit-content"
                    top="50%"
                    left="50%"
                    radius="2em"
                    border
                    shadow
                >
                    <div className="mx-auto p-3" style={{ width: 'auto' }}>
                        <div className="row">
                            <div className="col text-center">
                                <h1>People Budget</h1>
                                <p>A civic enagement process for educating Miamians on budgeting</p>
                            </div>
                        </div>
                        <Link color="white" to="/register">
                            <Button>Get Started</Button>
                        </Link>
                    </div>
                </Card>
                <Info/>
            </div>
        </div>
    );
};

export default Home;
