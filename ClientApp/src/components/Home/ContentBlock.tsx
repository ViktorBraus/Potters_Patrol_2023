import * as React from 'react';
import LoginButton from "../Authentication/login-button"
import LogoutButton from "../Authentication/logout-button"
import { useAuth0 } from "@auth0/auth0-react"
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
    const { isLoading, isAuthenticated } = useAuth0();
    return (
      <div>
        {!isLoading ? (isAuthenticated ? <LogoutButton /> : <LoginButton />) : ""}
      </div>
    );
  };
  export class ContentBlock extends React.Component
  {
    
    render()
    {
  const ContentBlock = () =>
    {
        return(
        <div className='Main'>
        <div className='HomePage'>
          <div className='title'>
            Пізнай світ Магії та чарівництва
      </div>
          <div className='homediv'>
            <div>
                Книги
            <NavLink to='/Books'>
                <br /><img className='edge' width="400" height="300" src='https://media.phillyvoice.com/media/images/020420_HarryPotterBooks_HarryPotte.2e16d0ba.fill-735x490.jpg' />
            </NavLink>
            </div>
            <div>
              Фільми
                <br />
             <NavLink to='/Movies'>
                <img className='edge' width="400" height="300" src='https://yc.cldmlk.com/rjks7wfanfevew4g35ze2yhczw/1591847288564_HarryPottercollage.jpg' />
             </NavLink>
            </div>
            <div>
              Ігри
                <br />
            <NavLink to='/Games'>
                <img className='edge' width="400" height="300" src='https://i.ytimg.com/vi/3GMjVCHOIgg/maxresdefault.jpg' />
            </NavLink></div>
          </div>
          <div>
          </div>
          <br />
          <AuthNav />
        </div>
        </div>
        )
        }
        return (<div><ContentBlock /></div>)
  }
}
export default ContentBlock;