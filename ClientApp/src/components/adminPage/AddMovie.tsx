import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { MovieData } from './FetchMovie';

interface AddMovieDataState {
    title: string;
    loading: boolean;
    MovieData: MovieData;
    path: string;
}

export class AddMovie extends React.Component<RouteComponentProps<{}>, AddMovieDataState> {
    constructor(props) {
        super(props);

        this.state = { title: "", loading: true, MovieData: new MovieData, path: "data:image/png;base64," };

        var movieid = this.props.match.params["movieid"];

        // This will set state for Edit employee
        if (movieid > 0) {
            fetch('/api/Movie/Details/' + movieid)
                .then(response => response.json() as Promise<MovieData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, MovieData: data });
                });
        }

        // This will set state for Add employee
        else {
            this.state = { title: "Create", loading: false, MovieData: new MovieData, path: "data:image/png;base64," };
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
            <h3>Movie : {this.state.MovieData.movie_Name}</h3>
            <NavLink to="/fetchmovie">Повернутись до Списку фільмів</NavLink>
            <hr />
            {contents}
        </div>;
    }

    // This will handle the submit form event.
    private handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        // PUT request for Edit employee.
        if (this.state.MovieData.movieId) {
            fetch('/api/Movie/Edit', {
                method: 'PUT',
                body: data,

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchmovie");
                })
        }

        // POST request for Add employee.
        else {
            fetch('/api/Movie/Create', {
                method: 'POST',
                body: data,

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchmovie");
                })
        }
    }

    // This will handle Cancel button click event.
    private handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/fetchmovie");
    }

    // Returns the HTML Form to the render() method.
    private renderCreateForm() {
        return (
            <form style={{ width: "500px" }} className='formchange form-wrapper' onSubmit={this.handleSave} >
                <div>
                    <input type="hidden" name="MovieId" value={this.state.MovieData.movieId} />
                </div>
                <div>
                    <label htmlFor="Name">Movie Name</label>
                    <div>
                        <input style={{ width: "400px" }} className="kk" type="text" name="Movie_Name" defaultValue={this.state.MovieData.movie_Name} required />
                    </div>
                </div >
                <div>
                    <label  htmlFor="Gender">Movie Description</label>
                    <div>
                        <textarea style={{ width: "400px" }} className="kk" type="text" name="Movie_description" defaultValue={this.state.MovieData.movie_description} required />
                    </div>
                </div >
                <div>
                    <label htmlFor="Department" >Movie url</label>
                    <div >
                        <input style={{ width: "400px" }} className="kk" type="text" name="Movie_url" defaultValue={this.state.MovieData.movie_url} required />
                    </div>
                </div>
                <div >
                    <label htmlFor="Department" >Book image</label>
                    <div className="jj">
                        <input
                            hidden
                            className="form-control"
                            type="text"
                            name="Book_Image"
                            defaultValue={this.state.MovieData.movie_Image.toString()}
                        />
                        <img name='book_Image' defaultValue={this.state.MovieData.movie_Image} width="200" height="auto" alt="" src={this.state.path + this.state.MovieData.movie_Image} />
                    </div>
                </div>
                <br/>
                <div className="form-group">
                    <button style={{ margin: "10px 40px 10px 10px" }} type="submit" className="btn btn-default buta">Save</button>
                    <button className="btn buta" onClick={this.handleCancel}>Cancel</button>
                </div >
            </form >
        )
    }
}