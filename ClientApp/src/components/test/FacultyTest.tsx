import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Route } from 'react-router-dom';
import '../../App.css'
import { useAuth0 } from "@auth0/auth0-react";
import { Tests} from './TestSection'
interface FetchTestDataState {
    gryfindor: number;
    slytherin: number;
    ravenclaw: number;
    hufflepuff: number;
    check: boolean;
    result: string;
    Test: Tests[];
    questionList: QuestionDetail[];
    answerList: AnswerDetail[];
    resulting: TestResult[];
    User: User;
    User_: User[];
    UserContent: UserContent;
    User_Content: UserContent[];
    loading: boolean;
    path: string;
}
var u;
const UserName = () => {
    const { user } = useAuth0();
    u = user?.nickname;
    return (<>
        <input hidden name="Id" value="1" />
        <input hidden className="form-control kk" type="text" name="UserName" defaultValue={u} required />
        </>
    )
}
export class FacultyTest extends React.Component<RouteComponentProps<{}>, FetchTestDataState> {
    constructor() {
        super();
        this.state = {
            check: false,
            gryfindor: 0,
            slytherin: 0,
            ravenclaw: 0,
            result: "",
            hufflepuff: 0,
            resulting: [],
            Test: [],
            UserContent: new UserContent,
            User_Content: [],
            answerList: [],
            questionList: [],
            User_: [],
            User: new User, loading: true, path: "data:image/png;base64,"
        };
        fetch('api/Question/Index')
            .then(response => response.json() as Promise<QuestionDetail[]>)
            .then(data => {
                this.setState({ questionList: data, loading: false });
            });
        fetch('api/Tests/TestIndex')
            .then(response => response.json() as Promise<Tests[]>)
            .then(data => {
                this.setState({ Test: data, loading: false });
            });
        fetch('api/User/Index')
            .then(response => response.json() as Promise<User>)
            .then(data => {
                this.setState({ User: data, loading: false });
            });
        fetch('api/User/Index')
            .then(response => response.json() as Promise<User[]>)
            .then(data => {
                this.setState({ User_: data, loading: false });
            });
        fetch('api/Result/Index')
            .then(response => response.json() as Promise<TestResult[]>)
            .then(data => {
                this.setState({ resulting: data, loading: false });
            });
        fetch('api/UserContent/Index')
            .then(response => response.json() as Promise<UserContent>)
            .then(data => {
                this.setState({ UserContent: data, loading: false });
            });
        fetch('api/UserContent/Index')
            .then(response => response.json() as Promise<UserContent[]>)
            .then(data => {
                this.setState({ User_Content: data, loading: false });
            });
        fetch('api/Answer/AnswerIndex')
            .then(response => response.json() as Promise<AnswerDetail[]>)
            .then(data => {
                this.setState({ answerList: data, loading: false });
            });
        this.imaging = this.imaging.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.onSiteChanged = this.onSiteChanged.bind(this);
        // This binding is necessary to make "this" work in the callback
    }

    public onSiteChanged(event) {

        if (event.target.id == 1) {
                this.setState({
                    gryfindor: this.state.gryfindor + 0.7,
                    slytherin: this.state.slytherin + 0.3,
                    hufflepuff: this.state.hufflepuff + 0.5,
                    ravenclaw: this.state.ravenclaw + 0.1
                });
            }
        if (event.target.id == 2) {
                this.setState({
                    gryfindor: this.state.gryfindor + 0.4,
                    slytherin: this.state.slytherin + 1,
                    hufflepuff: this.state.hufflepuff + 0.2,
                    ravenclaw:  this.state.ravenclaw + 0.2
                });
            }
        if (event.target.id == 3) {
                this.setState({
                    gryfindor: this.state.gryfindor + 0.9,
                    slytherin: this.state.slytherin + 0.2,
                    hufflepuff: this.state.hufflepuff + 1,
                    ravenclaw: this.state.ravenclaw + 0.5
                });
            }
        if (event.target.id == 4) {
                this.setState({
                    gryfindor:this.state.gryfindor + 1,
                    slytherin: this.state.slytherin + 0.7,
                    hufflepuff: this.state.hufflepuff + 0.6,
                    ravenclaw: this.state.ravenclaw + 0.5
                });
            }
        if (event.target.id == 5) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.4,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.5,
                ravenclaw: this.state.ravenclaw + 1
            });
        }
        if (event.target.id == 6) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.8,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 0.8,
                ravenclaw: this.state.ravenclaw + 0.5
            });
        }
        if (event.target.id == 7) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.7,
                slytherin: this.state.slytherin + 0.5,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.2
            });
        }
        if (event.target.id == 8) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 0.7,
                ravenclaw: this.state.ravenclaw + 0.2
            });
        }
        if (event.target.id == 9) {
            this.setState({
                gryfindor:this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.8,
                hufflepuff: this.state.hufflepuff + 0.2,
                ravenclaw: this.state.ravenclaw + 0.2
            });
        }
        if (event.target.id == 10) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.7,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.2
            });
        }
        if (event.target.id == 11) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.2,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 0.6,
                ravenclaw: this.state.ravenclaw + 1
            });
        }
        if (event.target.id == 12) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.7,
                slytherin: this.state.slytherin + 0.1,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.3
            });
        }
        if (event.target.id == 13) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.8,
                hufflepuff: this.state.hufflepuff + 0.2,
                ravenclaw: this.state.ravenclaw + 0.2
            });
        }
        if (event.target.id == 14) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.2,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 0.2,
                ravenclaw: this.state.ravenclaw + 1
            });
        }
        if (event.target.id == 15) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.6,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.3
            });
        }
        if (event.target.id == 16) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.2,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.2,
                ravenclaw: this.state.ravenclaw + 0.8
            });
        }//стрелец
        if (event.target.id == 17) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.8,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.2,
                ravenclaw: this.state.ravenclaw + 0.2
            });
        }
        if (event.target.id == 18) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.2,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.2,
                ravenclaw: this.state.ravenclaw + 0.8
            });
        }
        if (event.target.id == 19) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.2,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 0.2,
                ravenclaw: this.state.ravenclaw + 1
            });
        }
        if (event.target.id == 20) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.8,
                slytherin: this.state.slytherin + 0.8,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.8
            });
        }//4 вопрос
        if (event.target.id == 21) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 0.7,
                ravenclaw: this.state.ravenclaw + 0.4
            });
        }
        if (event.target.id == 22) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.6,
                slytherin: this.state.slytherin + 0.8,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.6
            });
        }
        if (event.target.id == 23) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.7,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.3,
                ravenclaw: this.state.ravenclaw + 0.8
            });
        }
        if (event.target.id == 24) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.9,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 0.6,
                ravenclaw: this.state.ravenclaw + 1
            });
        }
        if (event.target.id == 25) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.9,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 0.6,
                ravenclaw: this.state.ravenclaw + 1
            });
        }
        if (event.target.id == 26) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.8,
                hufflepuff: this.state.hufflepuff + 0.3,
                ravenclaw: this.state.ravenclaw + 0.5
            });
        }
        if (event.target.id == 27) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.7,
                slytherin: this.state.slytherin + 0.3,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.7
            });
        } if (event.target.id == 28) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.8,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.6,
                ravenclaw: this.state.ravenclaw + 0.7
            });
        } if (event.target.id == 29) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.6,
                slytherin: this.state.slytherin + 0.6,
                hufflepuff: this.state.hufflepuff + 0.6,
                ravenclaw: this.state.ravenclaw + 1
            });
        } if (event.target.id == 30) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.4,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.6,
                ravenclaw: this.state.ravenclaw + 0.7
            });
        } if (event.target.id == 31) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.8,
                hufflepuff: this.state.hufflepuff + 0.6,
                ravenclaw: this.state.ravenclaw + 0.7
            });
        } if (event.target.id == 32) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.5,
                slytherin: this.state.slytherin + 0.5,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.7
            });
        } if (event.target.id == 33) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.3,
                slytherin: this.state.slytherin + 0.3,
                hufflepuff: this.state.hufflepuff + 0.3,
                ravenclaw: this.state.ravenclaw + 1
            });
        } if (event.target.id == 34) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.3,
                slytherin: this.state.slytherin + 0.3,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.3
            });
        } if (event.target.id == 35) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.3,
                hufflepuff: this.state.hufflepuff + 0.3,
                ravenclaw: this.state.ravenclaw + 0.3
            });
        } if (event.target.id == 36) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.3,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.3,
                ravenclaw: this.state.ravenclaw + 0.3
            });
        } if (event.target.id == 37) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.3,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.3,
                ravenclaw: this.state.ravenclaw + 0.7
            });
        } if (event.target.id == 38) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.7,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.6
            });
        } if (event.target.id == 39) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 0.7,
                ravenclaw: this.state.ravenclaw + 0.6
            });
        } if (event.target.id == 40) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.4,
                slytherin: this.state.slytherin + 0.6,
                hufflepuff: this.state.hufflepuff + 0.4,
                ravenclaw: this.state.ravenclaw + 1
            });
        } if (event.target.id == 41) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.3,
                slytherin: this.state.slytherin + 0.7,
                hufflepuff: this.state.hufflepuff + 0.3,
                ravenclaw: this.state.ravenclaw + 1
            });
        } if (event.target.id == 42) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.3,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.3,
                ravenclaw: this.state.ravenclaw + 0.6
            });
        } if (event.target.id == 43) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.3,
                hufflepuff: this.state.hufflepuff + 0.6,
                ravenclaw: this.state.ravenclaw + 0.3
            });
        } if (event.target.id == 44) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.7,
                slytherin: this.state.slytherin + 0.3,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.3
            });
        } if (event.target.id == 45) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.5,
                hufflepuff: this.state.hufflepuff + 0.5,
                ravenclaw: this.state.ravenclaw + 0.5,
                check: true
            });
        }
        if (event.target.id == 46) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.5,
                slytherin: this.state.slytherin + 0.5,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.5,
                check: true
            });
        }
        if (event.target.id == 47) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.5,
                slytherin: this.state.slytherin + 0.5,
                hufflepuff: this.state.hufflepuff + 0.5,
                ravenclaw: this.state.ravenclaw + 1,
                check: true
            });
        }
        if (event.target.id == 48) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.5,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.5,
                ravenclaw: this.state.ravenclaw + 0.5,
                check: true
            });
        }
        if (this.state.gryfindor > this.state.slytherin &&
            this.state.gryfindor > this.state.hufflepuff &&
            this.state.gryfindor > this.state.ravenclaw)
            this.setState({ result: "Ґрифіндор" });
        else if (this.state.slytherin > this.state.gryfindor &&
            this.state.slytherin > this.state.hufflepuff &&
            this.state.slytherin > this.state.ravenclaw) {
            this.setState({
                result: "Слізерін"
            });
        }
        else if (this.state.hufflepuff > this.state.slytherin &&
            this.state.hufflepuff > this.state.gryfindor &&
            this.state.hufflepuff > this.state.ravenclaw) {
            this.setState({
                result: "Хафелпаф"
            });
        }
        else if (this.state.ravenclaw > this.state.slytherin &&
            this.state.ravenclaw > this.state.gryfindor &&
            this.state.ravenclaw > this.state.hufflepuff) {
            this.setState({
                result: "Рейвенкло"
            });
        }
        console.log(this.state.result)
    }
    public handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        if (this.state.gryfindor > this.state.slytherin &&
            this.state.gryfindor > this.state.hufflepuff &&
            this.state.gryfindor > this.state.ravenclaw)
            this.setState({result : "Ґрифіндор"});
        else if (this.state.slytherin > this.state.gryfindor &&
            this.state.slytherin > this.state.hufflepuff &&
            this.state.slytherin > this.state.ravenclaw) {
            this.setState({
                result: "Слізерін"
            });
        }
        else if (this.state.hufflepuff > this.state.slytherin &&
            this.state.hufflepuff > this.state.gryfindor &&
            this.state.hufflepuff > this.state.ravenclaw) {
            this.setState({
                result: "Хафелпаф"
            });
        }
        else if (this.state.ravenclaw > this.state.slytherin &&
            this.state.ravenclaw > this.state.gryfindor &&
            this.state.ravenclaw > this.state.hufflepuff) {
            this.setState({
                result: "Рейвенкло"
            });
        }
        if (this.state.UserContent.userId) {
                fetch('/api/UserContent/Edit', {
                    method: 'PUT',
                    body: data,
                }).then((response) => response.json())
                    .then((responseJson) => {
                        this.props.history.push("/result");
                    })
        }
            // POST request for Add employee.
            else {
                fetch('/api/UserContent/Create', {
                    method: 'POST',
                    body: data,
                }).then((response) => response.json())
                    .then((responseJson) => {
                        this.props.history.push("/result");
                    })
        }
    }
    public imaging(result: string, ob: TestResult[]) {
        var source;
        source = ob.map(t => result == t.result ? t.resultImage : "")
        return source
    }
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderTestTable(this.state.resulting, this.state.questionList, this.state.answerList, this.state.User_);

        return <div className='lolikk'>
            <label className='lolik'>Розподіл на Факультет</label>
            <p />
            {contents}
        </div>;
    }
    public renderTestTable(result: TestResult[], questionList: QuestionDetail[], answerList: AnswerDetail[], user_: User[]) {
        return <form id='11' className='form'>
            {questionList.map(q => 
                q.id <=10 ?
                    <>
                        <div className='lol'>
                            {q.id <= 10 ?
                                <>
                                    <label className='lola'>{q.question}</label>
                                    {answerList.map(a => <div>
                                        {a.questionId == q.id ?
                                            <div className='testblock'>
                                                <label className="radio">
                                                    <input required onChange={this.onSiteChanged} name={a.questionId.toString()} id={a.answerId.toString()} type="radio" />
                                                    <div className="radio__text">{a.answer}</div>
                                                </label><p />
                                            </div> : null}
                                    </div>
                                    )}
                                    <br />
                                </>
                                : null}
                        </div>
                        <br />
                    </> : null)}
            <form className='row-md-3 zol' onSubmit={this.handleSave}>
                {result.map(r =>
                    this.state.result != "" ?
                        this.state.check ?
                            this.state.result == r.result ?
                        <div>
                            <input hidden
                            className=""
                            type="text"
                            name="Faculty_Image"
                            defaultValue={this.state.result == r.result ? r.resultImage.toString() : ""} />
                        <img defaultValue={this.state.path + r.result == this.state.result ? r.resultImage : ""}
                                        width="200" height="200" src={this.state.path + (r.result == this.state.result ? r.resultImage : "")} />
                                    <input className='buta' type="text" name="Faculty" defaultValue={this.state.result} /><span />
                                </div>
                                : null
                            : null
                        : null
                )}
               
                <UserName/>
            <button className='buta'><NavLink to='/'>Повернутись</NavLink></button>
            <button id='12' className='row-md-3 buta' type="submit">Завершити</button>
            </form>
        </form>;
    }
}
export class QuestionDetail {
    id: number = 0;
    testTitle: string = "";
    question_Id: number = 0;
    question: string = "";
}
export class AnswerDetail {
    answerId: number = 0;
    questionId: number = 0;
    answer: string = "";
}
export class User {
    userId: number = 0;
    userName: string = "";
    password: string = "";
    email: string = "";
    profileImage: string = "";
}
export class TestResult {
    test_Id_: number = 0;
    result: string = "";
    resultImage: string = "";
}
export class UserContent {
    userId: number = 0;
    wand: string = "";
    wandImage: string = "";
    faculty: string = "";
    facultyImage: string = "";
    patronus: string = "";
    patronusImage: string = "";
}