import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Route } from 'react-router-dom';
import './forum.css'
import { User } from '../test/FacultyTest'
interface ContentForumDataState {
    title: string;
    loading: boolean;
    forum: Forum[];
    user: User[];
    forumMessages: ForumMessagges[];
    path: string;
    count: number
}
export class ForumBlock extends React.Component<RouteComponentProps<{}>, ContentForumDataState> {
    constructor(props) {
        super(props);
        this.state = { title: "", count:0, loading: true,user:[], forumMessages: [], forum: [], path: "data:image/png;base64," };
        fetch('api/Forum/Index')
            .then(response => response.json() as Promise<Forum[]>)
            .then(data => {
                this.setState({ forum: data, loading: false });
            });
        fetch('api/User/Index')
            .then(response => response.json() as Promise<User[]>)
            .then(data => {
                this.setState({ user: data, loading: false });
            });
        fetch('api/ForumMessages/Index')
            .then(response => response.json() as Promise<ForumMessagges[]>)
            .then(data => {
                this.setState({ forumMessages: data, loading: false });
            });
        this.handleEdit = this.handleEdit.bind(this);
        this.counting = this.counting.bind(this);
        
    }
    public Statistics_counting(a, forum: Forum[], messagess: ForumMessagges[], user: User[]) {
        var count = 0;
        if (a == 1) {
            forum.map(
                m =>
                    count++)
        }
        else if (a == 2) {
            messagess.map(
                m =>
                    count++)
        }
        else if (a == 3) {
            user.map(
                m => 
                    count++)
        }
        return count
    }
    public counting(b, forummesagges: ForumMessagges[]) {
        var count = 0;
            forummesagges.map(
                m =>
                    b == m.forum_Id ? count++ : null)
        return count
    }
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderForumTable(this.state.forum, this.state.forumMessages);
        console.log(this.state.forum)
        return <div className='ForumBlock'>
            <br />
            {contents}
            <br />
                 <div className="linn">
                < NavLink className='newforum' to="/createDiscussion">Створити нове обговорення</NavLink>
            </div>
        </div>;

    }
    private handleEdit(id: number) {
        this.props.history.push("/messages/" + id);
    }

    public renderForumTable(forum: Forum[], forummesagges: ForumMessagges[]) {
        return <div>
            <div className='zaholovok'>
                <label className='zaholovok'>Potter`s Forum</label>
            </div>
            <table className='horizontal'>
                <tr className='horizontal'>
                    <td>
                        <table className='forumtable'>
                            <tbody className='forumbody'>
                                {forum.map(b =>
                                    <>
                                        <tr>
                                            <td className='details'>
                                                <label style={{ color: "rgb(114, 100, 100)"}}>Назва обговорення</label>
                                                <br />
                                                <a className="action_ details"
                                                    onClick={(id) => this.handleEdit(b.id)} >
                                                    {b.title}
                                                </a>
                                           </td>
                                            <td className='bordering'>
                                                <tr className='second'>
                                                    <label style={{ color: "rgb(114, 100, 100)" }}>Кількість повідомлень</label>
                                                    <br />
                                                    <label style={{ color: "rgb(114, 100, 100)" }}>{this.counting(b.id, this.state.forumMessages)}</label>
                                                </tr>
                                            </td>
                                            <td className='details'>
                                                <tr>
                                                    <label style={{ color: "rgb(114, 100, 100)" }}>Автор: {b.creator}</label>
                                                </tr>
                                                <tr>
                                                    <label style={{ color: "rgb(114, 100, 100)" }}>Дата створення: </label>
                                                    <label style={{ color: "rgb(114, 100, 100)" }}>{b.dateOfCreation.toString()}</label>
                                                </tr>
                                            </td>
                                        </tr>
                                    </>)}
                            </tbody>
                        </table>
                        </td>
                    <td>
            <table className='static'>
                <th className='fg'>Статистика на форумі</th>
                    <tr>
                        <tr >Загальна кількість тем </tr>
                        <tr ><b>{this.Statistics_counting(1, this.state.forum, this.state.forumMessages, this.state.user)}</b></tr>
                        <tr >Загальна кількість повідомлень </tr>
                        <tr ><b>{this.Statistics_counting(2, this.state.forum, this.state.forumMessages, this.state.user)}</b></tr>
                        <tr >Загальна кількість учасників </tr>
                        <tr ><b>{this.Statistics_counting(3, this.state.forum, this.state.forumMessages, this.state.user)}</b></tr>
                </tr>
                        </table>
                        </td>
                    </tr>
            </table>
        </div>;
    }
}
export class Forum {
    id: number = 0;
    title: string = "";
    creator: string = "";
    dateOfCreation: Date = new Date(0,0,0,0,0,0,0);
}
export class ForumMessagges {
    message_Id: number = 0;
    forum_Id: number = 0;
    forum_Title: string = "";
    messageSender: string = "";
    message: string = "";
    dateOfSend: string = "";
    timeOfSend: string = "";
}