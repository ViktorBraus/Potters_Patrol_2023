import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { Forum } from './forumpage';
import { useAuth0 } from "@auth0/auth0-react";
import { TextField } from '@material-ui/core';

interface AddBookDataState {
    title: string;
    loading: boolean;
    forum: Forum;
    path: string;
    nick: string;
}
export var UserName = () => {
    const { user } = useAuth0();
    var User;
    User = user?.nickname
    return (
        <input className="form-control kk" type="text" name="creator" defaultValue={User} required/>
    )
}
export class CreateDiscussion extends React.Component<RouteComponentProps<{}>, AddBookDataState> {
    constructor(props) {
        super(props);
        this.state = { title: "", loading: true, nick: "", forum: new Forum, path: "data:image/png;base64," };
        this.state = { title: "Створення нової теми", loading: false, nick: "", forum: new Forum, path: "data:image/png;base64," };

        // This binding is necessary to make "this" work in the callback
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();

        return <div className='pop'>
            <h1>{this.state.title}</h1>
            {contents}
            <br/>
        </div>;
    }
    // This will handle the submit form event.
    public handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);
            fetch('api/Forum/Create', {
                method: 'POST',
                body: data,

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/forum");
                })
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
            <form className='formchange form-wrapper' onSubmit={this.handleSave} >
                <div className="form-group" >
                    <input type="hidden" name="id" value={this.state.forum.id} />
                </div>
                <div className="form-group" >
                    <label htmlFor="Name">Назва обговорення</label>
                    <div >
                        <input className="form-control kk" type="text" name="title" defaultValue={this.state.forum.title} required />
                    </div>
                </div >
                <div className="form-group ">
                    <label htmlFor="Gender">Автор обговорення</label>
                    <div >
                       <UserName/>
                    </div>
                </div >
                <div className="form-group">
                    <label  htmlFor="Department" >Дата Створення</label>
                    <div>
                        <TextField noValidate
                            name="dateOfCreation"
                            color="secondary"
                            size="medium"
                            id="datetime-local"
                            className='form-group col title'
                            type="datetime-local"
                            defaultValue={this.state.forum.dateOfCreation.toString()}
                            InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-default buta">Створити</button><span/>
                    <button className="btn btn-default buta" onClick={this.handleCancel}>Повернутись</button>
                </div >
            </form >
        )
    }
}