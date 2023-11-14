import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
interface FetchBookDataState {
    bookList: BookData[];
    loading: boolean;
    path: string;
}

export class FetchBook extends React.Component<RouteComponentProps<{}>, FetchBookDataState> {
    constructor() {
        super();
        this.state = { bookList: [], loading: true, path: "data:image/png;base64," };

        fetch('api/Book/Index')
            .then(response => response.json() as Promise<BookData[]>)
            .then(data => {
                this.setState({ bookList: data, loading: false });
            });

       // This binding is necessary to make "this" work in the callback
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderBookTable(this.state.bookList);

        return <div>
            <h1>Дані по книгам</h1>
            <div className="linn">
                <NavLink to="/addBook">Створити нову книгу</NavLink>
            <NavLink to="/Layout">Повернутись до Адмін панелі</NavLink>
            </div>
            {contents}
        </div>;
    }

    // Handle Delete request for an employee
    private handleDelete(id: number) {
            fetch('api/Book/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState(
                    {
                        bookList: this.state.bookList.filter((rec) => {
                            return (rec.bookId != id);
                        })
                    });
            });

    }

    private handleEdit(id: number) {
        this.props.history.push("/Book/edit/" + id);
    }

    // Returns the HTML table to the render() method.
    private renderBookTable(bookList: BookData[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Book Id</th>
                    <th>Book Name</th>
                    <th>Book Description</th>
                    <th>Book Url</th>
                    <th>Book Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {bookList.map(b =>
                    <tr key={b.bookId}>
                        <td>{b.bookId}</td>
                        <td>{b.book_Name}</td>
                        <td>{b.book_description}</td>
                        <td><a href={b.book_url}>{b.book_url}</a></td>
                        <td><img width="200" height="auto" alt="" src={this.state.path + b.book_Image} /></td>
                        <td>
                            <a className="action" onClick={(id) => this.handleEdit(b.bookId)} >Edit </a>  |     
                            <a className="action" onClick={(id) => this.handleDelete(b.bookId)}> Delete</a>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

export class BookData {
    bookId: number = 0;
    book_Name: string = "";
    book_Image: string = "";
    book_description: string = "";
    book_url: string = "";
} 