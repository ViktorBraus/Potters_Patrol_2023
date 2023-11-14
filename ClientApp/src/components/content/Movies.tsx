import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Route } from 'react-router-dom';
import { Movie } from '../../config';
import './content.css'
interface FetchMovieDataState {
    movieList: MovieData[];
    loading: boolean;
    path: string;
}
export class info extends React.Component<RouteComponentProps<{}>, FetchMovieDataState>
{
    public render_info() {
        return <div>
            {Movies}
        </div>
    }
}
export class Movies extends React.Component<RouteComponentProps<{}>, FetchMovieDataState> {
    constructor() {
        super();
        this.state = { movieList: [], loading: true, path: "data:image/png;base64," };

        fetch('api/Movie/Index')
            .then(response => response.json() as Promise<MovieData[]>)
            .then(data => {
                this.setState({ movieList: data, loading: false });
            });
        // This binding is necessary to make "this" work in the callback
        this.handleEdit = this.handleEdit.bind(this);
    }
    private handleEdit(id: number) {
        this.props.history.push("/content/movies/" + id);
    }
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderBookTable(this.state.movieList);

        return <div>
            <div className="linn">
                <NavLink className='contentButton' to="/">На головну</NavLink>
            </div>
            <br />
            {contents}
        </div>;

    }
    public renderBookTable(movieList: MovieData[]) {
        return <table className='table1'>
            <thead>
                {movieList.map(b =>
                    <th key={b.movieId}>
                        <td><a className="action" onClick={(id) => this.handleEdit(b.movieId)} >{b.movie_Name}</a></td>
                    </th>
                )}
            </thead>
            <tbody>
                {movieList.map(b =>
                    <td><a className="action" onClick={(id) => this.handleEdit(b.movieId)} ><img className='imj' alt="" src={this.state.path + b.movie_Image} /></a></td>
                )}</tbody>
        </table>;
    }
    
}
export class MovieData {
    movieId: number = 0;
    movie_Name: string = "";
    movie_Image: string = "";
    movie_description: string = "";
    movie_url: string = "";
} 