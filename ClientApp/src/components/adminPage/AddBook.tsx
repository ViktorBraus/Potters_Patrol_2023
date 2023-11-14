import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { BookData } from './FetchBook';

interface AddBookDataState {
    title: string;
    loading: boolean;
    BookData: BookData;
    path: string;
}

export class AddBook extends React.Component<RouteComponentProps<{}>, AddBookDataState> {
    constructor(props) {
        super(props);

        this.state = { title: "", loading: true, BookData: new BookData, path: "data:image/png;base64,"};

        var bookid = this.props.match.params["bookid"];

        // This will set state for Edit employee
        if (bookid > 0) {
            fetch('/api/Book/Details/' + bookid)
                .then(response => response.json() as Promise<BookData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, BookData: data });
                });
        }

        // This will set state for Add employee
        else {
            this.state = { title: "Create", loading: false, BookData: new BookData, path: "data:image/png;base64,"};
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
            <h3>Book : {this.state.BookData.book_Name}</h3>
            <NavLink to="/fetchbook">Повернутись до Списку книг</NavLink>
            <hr />
            {contents}
        </div>;
    }

    // This will handle the submit form event.
    public handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        // PUT request for Edit employee.
        if (this.state.BookData.bookId) {
            fetch('/api/Book/Edit', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchbook");
                })
        }
        // POST request for Add employee.
        else {
            fetch('/api/Book/Create', {
                method: 'POST',
                body: data,

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchbook");
                })
        }
    }

    // This will handle Cancel button click event.
    private handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/fetchbook");
    }
    fileSelectHandler = e => {
        const param = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(param);
    };
    // Returns the HTML Form to the render() method.
    private renderCreateForm() {
        return (
            <form style={{width: "500px"}} className='formchange form-wrapper' onSubmit={this.handleSave} >
                <div className="form-group" >
                    <input  type="hidden" name="BookId" value={this.state.BookData.bookId} />
                </div>
                <div>
                    <label htmlFor="Name">Book Name</label>
                    <div >
                        <input style={{ width: "400px" }} className="kk" type="text" name="Book_Name" defaultValue={this.state.BookData.book_Name} required />
                    </div>
                </div >
                <div>
                    <label htmlFor="Gender">Book Description</label>
                    <div>
                        <textarea style={{ width: "400px" }} className="kk" name="Book_description" defaultValue={this.state.BookData.book_description} required />
                    </div>
                </div >
                <div className="form-group">
                    <label htmlFor="Department" >Book url</label>
                    <div >
                        <input style={{ width: "400px" }} className="kk" type="text" name="Book_url" defaultValue={this.state.BookData.book_url} required />
                    </div>
                </div>
               <div className="form-group">
                    <label className="" htmlFor="Department" >Book image</label>
                    <div>
                        <input
                            
                            className="kk"
                            type="text"
                            name="Book_Image"
                            defaultValue={this.state.BookData.book_Image.toString()}
                        />
                        <img defaultValue={this.state.BookData.book_Image} width="200" height="auto" alt="" src={this.state.path + this.state.BookData.book_Image} />
                    </div>
                </div>
                <div className="form-group">
                    <button style={{ margin: "10px 40px 10px 10px" }} type="submit" className="btn btn-default buta">Savsse</button>
                    <button className="btn buta" onClick={this.handleCancel}>Cancel</button>
                </div >
            </form >
        )
    }
}