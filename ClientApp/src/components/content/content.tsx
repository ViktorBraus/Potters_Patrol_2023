import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Route } from 'react-router-dom';
import './content.css'
import { BookData } from './Books';
import { GameData } from './Games';
import { MovieData } from './Movies';
interface ContentBookDataState {
    title: string;
    loading: boolean;
    BookData: BookData;
    MovieData: MovieData;
    GameData: GameData;
    path: string;
}
export class Content extends React.Component<RouteComponentProps<{}>, ContentBookDataState> {
    constructor(props) {
        super(props);
        this.state = { title: "", loading: true, BookData: new BookData, MovieData: new MovieData, GameData: new GameData, path: "data:image/png;base64," };

        var bookid = this.props.match.params["bookid"];
        var gameid = this.props.match.params["gameid"];
        var movieid = this.props.match.params["movieid"];
        // This will set state for Edit employee
        if (bookid > 0) {
            fetch('/api/Book/Details/' + bookid)
                .then(response => response.json() as Promise<BookData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, BookData: data });
                });
        }
        if (gameid > 0) {
            fetch('/api/Game/Details/' + gameid)
                .then(response => response.json() as Promise<GameData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, GameData: data });
                });
        }
        if (movieid > 0) {
            fetch('/api/Movie/Details/' + movieid)
                .then(response => response.json() as Promise<MovieData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, MovieData: data });
                });
        }
    }
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.state.BookData.bookId > 0 ? this.renderBookTable()
                : this.state.GameData.gameId > 0 ? this.renderGameTable()
                    : this.state.MovieData.movieId > 0 ? this.renderMovieTable() : "";
        return <div>
            <div className="linn">
                {this.state.BookData.bookId > 0 ? < NavLink className='contentButton' to="/Books">На головну</NavLink> :
                    this.state.GameData.gameId > 0 ? < NavLink className='contentButton' to="/Games">На головну</NavLink> :
                        this.state.MovieData.movieId > 0 ? < NavLink className='contentButton' to="/Movies">На головну</NavLink> : ""}
            </div>
            <br/>
            {contents}
        </div>;

    }
    public renderBookTable() {
        return <div>
            <table cellSpacing={4} width="70%" className='tablecontent'>
            <tbody>
                <tr>
                    <td rowSpan={2}>
                        <img width="200" height="auto" alt="" src={this.state.path + this.state.BookData.book_Image} />
                    </td>
                    <th>
                        <div>
                            <label><h1>{this.state.BookData.book_Name}</h1></label>
                        </div>
                    </th>
                </tr>
                <tr>
                <th>
                    <div>
                        <label>{this.state.BookData.book_description}</label>
                    </div>
                </th >
                <th>
                            <div>
                                <label>Корисне посилання</label><br /><br /><br />
                            <a href={this.state.BookData.book_url}>{this.state.BookData.book_url}</a>
                    </div>
                </th>
                </tr>
                </tbody>
                </table>
        </div>;
    }
    public renderGameTable() {
        return <div>
            <table cellSpacing={4} width="70%" className='tablecontent'>
                <tbody>
                    <tr>
                        <td rowSpan={2}>
                            <img width="200" height="auto" alt="" src={this.state.path + this.state.GameData.game_Image} />
                        </td>
                        <th>
                            <div>
                                <label><h1>{this.state.GameData.game_Name}</h1></label>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div>
                                <label>{this.state.GameData.game_description}</label>
                            </div>
                        </th >
                        <th>
                            <div>
                                <label>Корисне посилання</label><br /><br /><br />
                                <a href={this.state.GameData.game_url}>{this.state.GameData.game_url}</a>
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>;
    }
    public renderMovieTable() {
        return <div>
            <table cellSpacing={4} width="70%" className='tablecontent'>
                <tbody>
                    <tr>
                        <td rowSpan={2}>
                            <img width="200" height="auto" alt="" src={this.state.path + this.state.MovieData.movie_Image} />
                        </td>
                        <th>
                            <div>
                                <label><h1>{this.state.MovieData.movie_Name}</h1></label>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div>
                                <label>{this.state.MovieData.movie_description}</label>
                            </div>
                        </th >
                        <th>
                            <div>
                                <label>Корисне посилання</label><br /><br /><br />
                                <a href={this.state.MovieData.movie_url}>{this.state.MovieData.movie_url}</a>
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>;
    }
}