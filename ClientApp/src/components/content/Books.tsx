import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Route } from 'react-router-dom';
import './content.css'
interface FetchBookDataState {
    bookList: BookData[];
    loading: boolean;
    path: string;
}
export class Books extends React.Component<RouteComponentProps<{}>, FetchBookDataState> {
    constructor() {
        super();
        this.state = { bookList: [], loading: true, path: "data:image/png;base64," };

        fetch('api/Book/Index')
            .then(response => response.json() as Promise<BookData[]>)
            .then(data => {
                this.setState({ bookList: data, loading: false });
            });
        // This binding is necessary to make "this" work in the callback
        this.handleEdit = this.handleEdit.bind(this);
    }
    private handleEdit(id: number) {
        this.props.history.push("/content/books/" + id);
    }

    public render()
    {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderBookTable(this.state.bookList);

        return <div>
            <div className="linn">
                <NavLink className='contentButton' to="/">На головну</NavLink>
            </div>
            <br />
            {contents}
        </div>;
        
    }
    public renderBookTable(bookList: BookData[]) {
        return <table className='table1'>
            <thead>
                {bookList.map(b =>
                    <th key={b.bookId}>
                        <td><a className="action" onClick={(id) => this.handleEdit(b.bookId)} >{b.book_Name}</a></td>
                    </th>
                )}
            </thead>
            <tbody>
                {bookList.map(b =>
                    <td><a onClick={(id) => this.handleEdit(b.bookId)} ><img className='imj' alt="" src={this.state.path + b.book_Image} /></a></td>
                )}</tbody>
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