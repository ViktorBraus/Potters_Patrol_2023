import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
interface FetchGameDataState {
    gameList: GameData[];
    loading: boolean;
    path: string;
}

export class FetchGame extends React.Component<RouteComponentProps<{}>, FetchGameDataState> {
    constructor() {
        super();
        this.state = { gameList: [], loading: true, path: null ? "data:image/png;base64," : "data:image/png;base64," };

        fetch('api/Game/Index')
            .then(response => response.json() as Promise<GameData[]>)
            .then(data => {
                this.setState({ gameList: data, loading: false });
            });

        // This binding is necessary to make "this" work in the callback
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderGameTable(this.state.gameList);

        return <div>
            <h1>Дані по Іграм</h1>
            <div className="linn">
                <NavLink to="/addGame">Створити нову Гру</NavLink>
                <NavLink to="/Layout">Повернутись до Адмін панелі</NavLink>
            </div>
            {contents}
        </div>;
    }

    // Handle Delete request for an employee
    private handleDelete(id: number) {
        fetch('api/Game/Delete/' + id, {
            method: 'delete'
        }).then(data => {
            this.setState(
                {
                    gameList: this.state.gameList.filter((rec) => {
                        return (rec.gameId != id);
                    })
                });
        });

    }

    private handleEdit(id: number) {
        this.props.history.push("/Game/edit/" + id);
    }

    // Returns the HTML table to the render() method.
    private renderGameTable(gameList: GameData[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Game Id</th>
                    <th>Game Name</th>
                    <th>Game Description</th>
                    <th>Game Url</th>
                    <th>Game Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {gameList.map(b =>
                    <tr key={b.gameId}>
                        <td>{b.gameId}</td>
                        <td>{b.game_Name}</td>
                        <td>{b.game_description}</td>
                        <td><a href={b.game_url}>{b.game_url}</a></td>
                        <td><img width="200" height="auto" alt="" src={this.state.path + b.game_Image} /></td>
                        <td>
                            <a className="action" onClick={(id) => this.handleEdit(b.gameId)}>Edit </a>  |
                            <a className="action" onClick={(id) => this.handleDelete(b.gameId)}> Delete</a>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

export class GameData {
    gameId: number = 0;
    game_Name: string = "";
    game_Image: string = "";
    game_description: string = "";
    game_url: string = "";
} 