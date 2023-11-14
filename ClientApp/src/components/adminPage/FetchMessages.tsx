import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import {Forum } from './FetchForum'
interface FetchMessageDataState {
    messagelist: Message[];
    forum: Forum;
    loading: boolean;
    path: string;
    title: string;
}

export class FetchMessages extends React.Component<RouteComponentProps<{}>, FetchMessageDataState> {
    constructor(props) {
        super(props);
        this.state = { title: "Edit", forum: new Forum ,messagelist: [], loading: true, path: "data:image/png;base64," };
        var forumid = this.props.match.params["forumid"];
        fetch('/api/ForumMessages/Index')
            .then(response => response.json() as Promise<Message[]>)
            .then(data => {
                this.setState({ messagelist: data });
            });

        if (forumid > 0) {
            fetch('/api/Forum/Details/' + forumid)
                .then(response => response.json() as Promise<Forum>)
                .then(data => {
                    this.setState({ title: "Чат", loading: false, forum: data });
                });
        }

        // This binding is necessary to make "this" work in the callback
        this.handleDelete = this.handleDelete.bind(this);
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderMessageTable(this.state.messagelist);

        return <div>
            <h1>Дані по обговоренню</h1>
            <div className="linn">
                <NavLink to="/fetchForum">Повернутись до Керуванням форумами</NavLink>
            </div>
            {contents}
        </div>;
    }

    // Handle Delete request for an employee
    private handleDelete(id: number) {
        console.log(id)
        fetch('/api/Message/Delete/' + id, {
            method: 'delete'
        }).then(data => {
            this.setState(
                {
                    messagelist: this.state.messagelist.filter((rec) => {
                        return (rec.messageId != id);
                    })
                });
        });

    }

    // Returns the HTML table to the render() method.
    private renderMessageTable(messagelist: Message[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Message Id</th>
                    <th>Forum Id</th>
                    <th>Forum_Title</th>
                    <th>Message Sender</th>
                    <th>Message</th>
                    <th>Date of Sent</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {messagelist.map(b =>
                    b.forum_Id == this.state.forum.id ? 
                        <tr key={b.messageId}>
                        <td>{b.messageId}</td>
                        <td>{b.forum_Id}</td>
                        <td>{b.forum_Title}</td>
                        <td>{b.messageSender}</td>
                        <td>{b.message}</td>
                        <td>{b.dateOfSend +"-"+ b.timeOfSend}</td>
                        <td>
                                <a className="action" onClick={(id) => this.handleDelete(b.messageId)}> Delete</a>
                        </td>
                    </tr>
                :null)}
            </tbody>
        </table>;
    }
}

export class Message {
    messageId: number = 0;
    forum_Id: number = 0;
    forum_Title: string = "";
    messageSender: string = "";
    message: string = "";
    dateOfSend: string = "";
    timeOfSend: string = "";
}