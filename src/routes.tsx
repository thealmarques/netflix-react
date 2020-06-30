import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router'
import { Profile } from './components/profile/profile'
import { Dashboard } from './components/dashboard/dashboard'
import { useSelector } from 'react-redux'
import { RootState } from 'shared/interfaces/root-state.interfaces'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const AppRouter = () => {
    const username = useSelector((state: RootState) => state.user.username);
    return (
        <Router history={history}>
            <Switch>
                <Route path='/main' render={() => (
                    username.length > 0 ? <Dashboard></Dashboard> : <Redirect push={true} to='/'></Redirect>
                )} />
                <Route path='/'>
                    <Profile></Profile>
                </Route>
            </Switch>
        </Router>
    )
}
