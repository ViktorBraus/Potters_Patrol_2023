import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { GameData } from './FetchGame';

interface AddGameDataState {
    title: string;
    loading: boolean;
    GameData: GameData;
    path: string;
}

export class AddGame extends React.Component<RouteComponentProps<{}>, AddGameDataState> {
    constructor(props) {
        super(props);

        this.state = { title: "", loading: true, GameData: new GameData, path: null ? "data:image/png;base64," : "data:image/png;base64,"};

        var gameid = this.props.match.params["gameid"];

        // This will set state for Edit employee
        if (gameid > 0) {
            fetch('/api/Game/Details/' + gameid)
                .then(response => response.json() as Promise<GameData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, GameData: data });
                });
        }

        // This will set state for Add employee
        else {
            this.state = { title: "Create", loading: false, GameData: new GameData, path: null ? "data:image/png;base64," : "data:image/png;base64," };
        }

        // This binding is necessary to make "this" work in the callback
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();

        return <div>
            <h1>{this.state.title}</h1>
            <h3>Game: {this.state.GameData.game_Name}</h3>
            <NavLink to="/fetchgame">Повернутись до Списку ігор</NavLink>
            <hr />
            {contents}
        </div>;
    }

    // This will handle the submit form event.
    private handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        // PUT request for Edit employee.
        if (this.state.GameData.gameId) {
            fetch('/api/Game/Edit', {
                method: 'PUT',
                body: data,

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchgame");
                })
        }

        // POST request for Add employee.
        else {
            fetch('/api/Game/Create', {
                method: 'POST',
                body: data,

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchgame");
                })
        }
    }

    // This will handle Cancel button click event.
    private handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/fetchgame");
    }

    // Returns the HTML Form to the render() method.
    private renderCreateForm() {
        return (
            <form style={{ width: "500px" }} className='formchange form-wrapper' onSubmit={this.handleSave} >
                <div>
                    <input type="hidden" name="GameId" value={this.state.GameData.gameId} />
                </div>
                < div >
                    <label className="fl" htmlFor="Name">Game Name</label>
                    <div>
                        <input style={{ width: "400px" }} className="kk" type="text" name="Game_Name" defaultValue={this.state.GameData.game_Name} required />
                    </div>
                </div >
                <div >
                    <label htmlFor="Gender">Game Description</label>
                    <div>
                        <textarea style={{ width: "400px" }} className="kk" type="text" name="Game_description" defaultValue={this.state.GameData.game_description} required />
                    </div>
                </div >
                <div>
                    <label htmlFor="Department" >Game url</label>
                    <div>
                        <input style={{ width: "400px" }} className="kk" type="text" name="Game_url" defaultValue={this.state.GameData.game_url} required />
                    </div>
                </div>
                <div >
                    <label htmlFor="Department" >Book image</label>
                    <div className="jj">
                        <input
                            hidden
                            className="form-control"
                            type="text"
                            name="Game_Image"
                            defaultValue={this.state.GameData.game_Image.toString()}
                        />
                        <img name='book_Image' defaultValue={this.state.GameData.game_Image} width="200" height="auto" alt="" src={this.state.path + this.state.GameData.game_Image} />
                    </div>
                </div>
               <br/>
                <div className="form-group">
                    <button style={{margin:"10px 40px 10px 10px"}} type="submit" className="btn btn-default buta">Save</button>
                    <button className="btn buta" onClick={this.handleCancel}>Cancel</button>
                </div >
            </form >
        )
    }
}