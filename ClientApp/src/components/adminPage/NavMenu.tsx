import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='vv'>
            <ul className='ul'>
                <li>
                    <a><NavLink className='lol1' to={'/'} exact activeClassName='active'>
                        Головна    
                        </NavLink>
                    </a>
                </li>
                <li>
                    <NavLink className='lol1' to={'/fetchbook'} activeClassName='active'>
                        Книги
                        </NavLink>
                </li>
                <li>
                    <NavLink className='lol1' to={'/fetchgame'} activeClassName='active'>
                        Ігри
                        </NavLink>
                </li>
                <li>
                    <NavLink to={'/fetchmovie'} activeClassName='active'>
                        Фільми  
                        </NavLink>
                </li>
                <li>
                    <NavLink to={'/fetchForum'} activeClassName='active'>
                        Форум
                            </NavLink>
                </li>
                    </ul>
        </div>;
    }
}
