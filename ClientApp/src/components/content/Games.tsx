import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Route } from 'react-router-dom';
import './content.css'
interface FetchGameDataState {
    gameList: GameData[];
    loading: boolean;
    path: string;
}
export class info extends React.Component<RouteComponentProps<{}>, FetchGameDataState>
{
    public render_info() {
        return <div>
            {Games}
        </div>
    }
}
export class Games extends React.Component<RouteComponentProps<{}>, FetchGameDataState> {
    constructor() {
        super();
        this.state = { gameList: [], loading: true, path: null ? "data:image/png;base64," : "data: image / png; base64,"};

        fetch('api/Game/Index')
            .then(response => response.json() as Promise<GameData[]>)
            .then(data => {
                this.setState({ gameList: data, loading: false });
            });
    }
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderBookTable(this.state.gameList);

        return <div>
            <div className="linn">
                <NavLink className='contentButton' to="/">На головну</NavLink>
            </div>
            <br />
            {contents}
        </div>;
    }
    private handleEdit(id: number) {
        this.props.history.push("/content/games/" + id);
    }
    public renderBookTable(gameList: GameData[]) {
        return <table className='table1'>
            <thead>
                {gameList.map(b =>
                    <th key={b.gameId}>
                        <td><a className="action" onClick={(id) => this.handleEdit(b.gameId)} >{b.game_Name}</a></td>
                    </th>
                )}
            </thead>
            <tbody>
                {gameList.map(b =>
                    <td><a onClick={(id) => this.handleEdit(b.gameId)} ><img className='imj' alt="" src={this.state.path + b.game_Image} /></a></td>
                )}</tbody>
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