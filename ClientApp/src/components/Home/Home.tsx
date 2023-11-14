import '../../App.css';
import Notifications from 'react-notify-toast'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Authentication/login-button"
import LogoutButton from "../Authentication/logout-button"
import * as React from 'react';
import './HomeAfter.css';
import { RouteComponentProps } from 'react-router';
export class Home extends React.Component<RouteComponentProps<{}>,{}>{
  render = () => {
    const AuthNav = () => {
      const {error, isAuthenticated} = useAuth0();
      return(
        <div>
          {isAuthenticated ? <LogoutButton/> : !error ? <LoginButton/> : <div>Будь ласка, Вийдіть з облікового запису та підтвердіть свою електронну пошту<br/><LogoutButton/></div>}
        </div>
      );
    };
    const content = () => {

      return (
        
        <div className='HomePage'>
            <div className='at_hog'>
                  У Хогвартсі Кожен хто <br />потребує допомоги, завжди її отримує
        </div>
              <br/>
              <div className='at_hog1'>
                  Для того аби почати свою подорож,
              <p>Авторизуйтесь</p>
                  </div>
        <AuthNav/>
        <Notifications />
        </div>
      )
    }
    return (
      <div>
        <main>
          {content()}
        </main>
      </div>
    )
  }
}