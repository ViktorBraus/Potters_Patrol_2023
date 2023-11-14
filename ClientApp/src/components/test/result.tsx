import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

interface ResultList {
    title: string;
    loading: boolean;
    UserContent: UserContent[];
    User: User[];
    path: string;
}
export class Result extends React.Component<RouteComponentProps<{}>, ResultList> {
    constructor(props) {
        super(props);
        this.state = { title: "", loading: true, UserContent: [], User: [], path: "data:image/png;base64," };

        fetch('api/UserContent/Index')
            .then(response => response.json() as Promise<UserContent[]>)
            .then(data => {
                this.setState({ UserContent: data, loading: false });
            });
    }
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderTestTable(this.state.UserContent, this.state.User);

        return <div className='lolikk'>
            {contents}
        </div>;

    }
    public renderTestTable(userContent: UserContent[], user: User[]) {
        
        return <form>
            {user.map(u =>
                userContent.map(q =>
                    <div>
                        <label>{u.userName == q.userName ? q.userName : ""}</label>
                </div>
                ))}
            <div className='zol'>
                <button className='buta'><NavLink to='/'>Повернутись</NavLink></button>
                <button id='12' className='buta' type="submit">Завершити</button>
            </div>
        </form>;
    }
}

export class UserContent {
    userId: number = 0;
    userName: string = "";
    wand: string = "";
    wandImage: string = "";
    faculty: string = "";
    facultyImage: string = "";
    patronus: string = "";
    patronusImage: string = "";
}
export class User {
    userId: number = 0;
    userName: string = "";
    password: string = "";
    email: string = "";
    profileImage: string = "";
}