import * as React from 'react'
import {useAuth0} from "@auth0/auth0-react"

interface UserData {
    userz: UserContent
}

export class NavBar extends React.Component<{}, UserData>
{
    constructor(props) {
        super(props);
        this.state = { userz: new UserContent }
        fetch('api/UserContent/Index')
            .then(response => response.json() as Promise<UserContent>)
            .then(data => {
                this.setState({ userz: data});
            });

    }
    public render() {
        return (
            <Navbar/>
            )
    }
}

const Navibar = () => {
    const auth0 = useAuth0();
    var u = new UserContent;
    fetch('api/UserContent/Index')
        .then(response => response.json() as Promise<UserContent>)
        .then(data => {
            u = data;
            console.log(u)
        });
    return(
        <div className='logo'>

            <input type='checkbox' id="settingsbutton" className='menucursor'></input>
            <label htmlFor="settingsbutton"></label>
            <div className='tiiitle_'><div className='facultyimage'></div></div>
            <div className='tiiitle'>Potter`s Patrol</div>
            <div className='list'><ul className='nav'>
                {auth0?.isAuthenticated ? (auth0?.user?.email == "korolenko.viktor@chnu.edu.ua" ? <li>
                    <a href="/Layout">
                    <button className='AdminButton'></button><br />Адмін
            </a>
                </li> : "" ): ""}
                <li><a href="/About">
              <button className='SearchButton'></button><br />About
            </a>
            </li>
                <li>{auth0?.isAuthenticated ?
                    <a href="/profile">
                        <button className='ProfileButton'></button>
                        <br />Профіль
                        </a> :
                    <a href="/profile">
                        <button disabled className='ProfileButton'></button>
                        <br />Профіль
                        </a>}
            </li>
                <li>{auth0?.isAuthenticated ?
                    <a href="/Forum">
                        <button className='AboutButton'></button>
                        <br />Форум
                        </a> :
                    <a href="/Forum">
                        <button disabled className='AboutButton'></button>
                        <br />Форум
                        </a>}
            </li>
                <li>
                    {auth0?.isAuthenticated ?
                        <a className='a' href="/HomeAfter">
                            <button className='HomeButton'></button>
                            <br />Головна
                            </a> :
                        <a className='a' href="/Home">
                            <button className='HomeButton'></button>
                            <br />Головна
                            </a>}
                </li>
            </ul></div>
            </div>
    )
}
const Navbar = () =>
{
    return(
        <Navibar/>
    )
}
export class UserContent {
    userId: number = 0;
    wand: string = "";
    wandImage: string = "";
    faculty: string = "";
    facultyImage: string = "";
    patronus: string = "";
    patronusImage: string = "";
}
