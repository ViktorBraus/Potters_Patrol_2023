import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
interface FetchForumDataState {
    forumlist: Forum[];
    loading: boolean;
    path: string;
}

export class FetchForum extends React.Component<RouteComponentProps<{}>, FetchForumDataState> {
    constructor() {
        super();
        this.state = { forumlist: [], loading: true, path: "data:image/png;base64," };

        fetch('api/Forum/Index')
            .then(response => response.json() as Promise<Forum[]>)
            .then(data => {
                this.setState({ forumlist: data, loading: false });
            });

        // This binding is necessary to make "this" work in the callback
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderForumTable(this.state.forumlist);

        return <div>
            <h1>Дані по форуму</h1>
            <div className="linn">
                <NavLink to="/Layout">Повернутись до Адмін панелі</NavLink>
            </div>
            {contents}
        </div>;
    }

    // Handle Delete request for an employee
    private handleDelete(id: number) {
        fetch('api/Forum/Delete/' + id, {
            method: 'delete'
        }).then(data => {
            this.setState(
                {
                    forumlist: this.state.forumlist.filter((rec) => {
                        return (rec.id != id);
                    })
                });
        });

    }

    private handleEdit(id: number) {
        this.props.history.push("/messages_/edit/" + id);
    }

    // Returns the HTML table to the render() method.
    private renderForumTable(forumlist: Forum[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Forum Id</th>
                    <th>Forum Title</th>
                    <th>Forum Creator</th>
                    <th>Forum Date of Creation</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {forumlist.map(b =>
                    <tr key={b.id}>
                        <td>{b.id}</td>
                        <td>{b.title}</td>
                        <td>{b.creator}</td>
                        <td>{b.dateOfCreation}</td>
                        <td>
                            <a className="action" onClick={(id) => this.handleEdit(b.id)} >Edit </a>  |
                            <a className="action" onClick={(id) => this.handleDelete(b.id)}> Delete</a>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

export class Forum {
    id: number = 0;
    title: string = "";
    creator: string = "";
    dateOfCreation: Date = new Date(0, 0, 0, 0, 0, 0, 0);
}