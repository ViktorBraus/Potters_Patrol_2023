import { useAuth0 } from "@auth0/auth0-react";
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { Forum } from './forumpage';
import { ForumMessagges } from './forumpage'
var date = new Date().toLocaleDateString();
var time = new Date().toLocaleTimeString();
interface AddBookDataState {
    title: string;
    loading: boolean;
    forum: Forum;
    nick: string;
    forumid: string;
    messages: ForumMessagges;
    mesmassive: ForumMessagges[];
    path: string;
}
export var UserName = () => {
    const { user } = useAuth0();
    var User;
    User = user?.nickname
    return (
        <input name='messageSender' type="hidden" defaultValue={User} />
    )
}
export class Messages extends React.Component<RouteComponentProps<{}>, AddBookDataState> {
    constructor(props) {
        super(props);
        this.state = { title: "", loading: true, forumid: this.props.match.params["forumid"], nick: "", forum: new Forum, mesmassive: [], messages: new ForumMessagges, path: "data:image/png;base64," };
        this.setState({ nick: "" })
        var forumid = this.props.match.params["forumid"];
        fetch('/api/ForumMessages/Index')
            .then(response => response.json() as Promise<ForumMessagges[]>)
            .then(data => {
                this.setState({ mesmassive: data });
            });

        // This will set state for Edit employee
        if (forumid > 0) {
            fetch('/api/Forum/Details/' + forumid)
                .then(response => response.json() as Promise<Forum>)
                .then(data => {
                    this.setState({ title: "Чат", loading: false, forum: data });
                });
        }

        // This binding is necessary to make "this" work in the callback
        this.handleSave = this.handleSave.bind(this);
        this.redirect = this.redirect.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    
    public render() {
        
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();

        return <div>
            <h1>{this.state.title}</h1>
            <NavLink to="/forum">Повернутись до Форуму</NavLink>
            <hr />
            {contents}
        </div>;
    }
    componentDidMount() {
        setInterval(() => fetch('/api/ForumMessages/Index')
            .then(response => response.json() as Promise<ForumMessagges[]>)
            .then(data => {
                this.setState({ mesmassive: data });
                date = new Date().toLocaleDateString();
                time = new Date().toLocaleTimeString();
            }), 2000);
    }
    // This will handle the submit form event.
    public handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('/api/ForumMessages/Create', {
            method: 'POST',
            body: data,
        }).then((response) => response.json())
            .then((responseJson) => {
                this.redirect();
            })
    }
    public redirect() {
        fetch('/api/ForumMessages/Index')
            .then(response => response.json() as Promise<ForumMessagges[]>)
            .then(data => {
                this.setState({ mesmassive: data });
            });

    }
    // This will handle Cancel button click event.
    private handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/forum");
    }
    fileSelectHandler = e => {
        const param = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(param);
    };
    // Returns the HTML Form to the render() method.
    private renderCreateForm() {
        return (
            <div >
                <div className=''>
                    <div className="form-group col" >
                    <input type="hidden" name="forum_Id" value={this.state.forum.id} />
                    </div>
                    < div className="form-group col" >
                    <label className=" control-label col-md-12" htmlFor="Name">Назва обговорення: <b>{this.state.forum.title}</b></label>
                    </div >
                    <div className="form-group col">
                    <label className=" control-label col-md-12" htmlFor="Name">Автор: <b>{this.state.forum.creator}</b></label>
                    </div >
                    <div className="form-group col">
                        <label className=" control-label col-md-12" htmlFor="Name">Дата створення: <b>{this.state.forum.dateOfCreation.toString()}</b></label>
                    </div>
                </div>
                <br />
                <table className='messageff'>
                    <tr>
                        <td>
                <div className='chatting'>
                    {this.state.mesmassive.map(m =>
                        m.forum_Id == this.state.forum.id ?
                            <div >
                                <label className='coloring1'>{m.messageSender}</label>
                                <br />
                                <label className='coloring2'>{m.message} <br /><h5>{m.dateOfSend != null ? m.dateOfSend : ""} - {m.timeOfSend != null ? m.timeOfSend : ""}</h5></label>
                            </div>
                            : null)}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                <form onSubmit={this.handleSave}>
                    <tr>
                                    <input name='forum_Id' type="hidden" value={this.state.forum.id} />
                                    <input name='forum_Title' type="hidden" value={this.state.forum.title} />
                                    <input name='dateOfSend' type="hidden" value={date} />
                                    <input name='timeOfSend' type="hidden" value={time} />
                                    <UserName />
                                    <input className='send' name='message' type="text" placeholder="Напишіть повідомлення" defaultValue={this.state.messages.message} />
                                </tr>
                    <br/>
                <div className="form-group col">
                        <button onClick={this.redirect} type="submit" className="btn btn-default buta">Відправити</button>
                    <button className="btn buta" onClick={this.handleCancel}>Повернутись</button>
                    </div >
                            </form>
                            </td>
                        </tr>
                </table>
            </div >
        )
    }
}
