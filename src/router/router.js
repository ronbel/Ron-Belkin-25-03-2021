import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainScreen from '../screens/MainScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Header from '../components/header/header';

import Switch from 'react-router-transition-switch';
import Fader from 'react-fader';

export default function AppRouter() {

    return (
        <Router>
            <Header/>
            <Switch component={Fader}>
                <Route exact path="/" component={MainScreen} />
                <Route exact path="/favorites" component={FavoritesScreen} />
            </Switch>
        </Router>
    )
}