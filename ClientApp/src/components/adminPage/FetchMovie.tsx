import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
interface FetchMovieDataState {
    movieList: MovieData[];
    loading: boolean;
    path: string;
}

export class FetchMovie extends React.Component<RouteComponentProps<{}>, FetchMovieDataState> {
    constructor() {
        super();
        this.state = { movieList: [], loading: true, path: "data:image/png;base64," };

        fetch('api/Movie/Index')
            .then(response => response.json() as Promise<MovieData[]>)
            .then(data => {
                this.setState({ movieList: data, loading: false });
            });

        // This binding is necessary to make "this" work in the callback
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderMovieTable(this.state.movieList);

        return <div>
            <h1>Дані по Фільмам</h1>
            <div className="linn">
                <NavLink to="/addMovie">Створити новий фільм</NavLink>
                <NavLink to="/Layout">Повернутись до Адмін панелі</NavLink>
            </div>
            {contents}
        </div>;
    }

    // Handle Delete request for an employee
    private handleDelete(id: number) {
        fetch('api/Movie/Delete/' + id, {
            method: 'delete'
        }).then(data => {
            this.setState(
                {
                    movieList: this.state.movieList.filter((rec) => {
                        return (rec.movieId != id);
                    })
                });
        });

    }

    private handleEdit(id: number) {
        this.props.history.push("/Movie/edit/" + id);
    }

    // Returns the HTML table to the render() method.
    private renderMovieTable(movieList: MovieData[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Movie Id</th>
                    <th>Movie Name</th>
                    <th>Movie Description</th>
                    <th>Movie Url</th>
                    <th>Movie Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {movieList.map(b =>
                    <tr key={b.movieId}>
                        <td>{b.movieId}</td>
                        <td>{b.movie_Name}</td>
                        <td>{b.movie_description}</td>
                        <td><a href={b.movie_url}>{b.movie_url}</a></td>
                        <td><img width="200" height="auto" alt="" src={this.state.path + b.movie_Image} /></td>
                        <td>
                            <a className="action" onClick={(id) => this.handleEdit(b.movieId)}>Edit </a>  |
                            <a className="action" onClick={(id) => this.handleDelete(b.movieId)}> Delete</a>
                        </td>
                    </tr>
                )}
            </tbody>
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