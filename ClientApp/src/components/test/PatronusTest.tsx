import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Route } from 'react-router-dom';
import '../../App.css'
interface FetchTestDataState {
    questionList: QuestionDetail[];
    answerList: AnswerDetail[];
    loading: boolean;
    path: string;
}
export class PatronusTest extends React.Component<RouteComponentProps<{}>, FetchTestDataState> {
    constructor() {
        super();
        this.state = { answerList: [], questionList: [], loading: true, path: "data:image/png;base64," };

        fetch('api/Question/Index')
            .then(response => response.json() as Promise<QuestionDetail[]>)
            .then(data => {
                this.setState({ questionList: data, loading: false });
            });
        fetch('api/Answer/AnswerIndex')
            .then(response => response.json() as Promise<AnswerDetail[]>)
            .then(data => {
                this.setState({ answerList: data, loading: false });
            });
        // This binding is necessary to make "this" work in the callback

    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderTestTable(this.state.questionList, this.state.answerList);

        return <div className='lolikk'>
            <label className='lolik'>Визначення твого патронуса</label>
            <p/>
        </div>;

    }
    public renderTestTable(questionList: QuestionDetail[], answerList: AnswerDetail[]) {
        return <form className='form'>
            {questionList.map(q =>
                q.id > 17 ? <><div className='lol'>
                    {q.id > 17 ?
                        <>
                            <label className='lola'>{q.question}</label>
                            {answerList.map(a => <div>
                                {a.questionId == q.id ?
                                    <div className='testblock'>
                                        <label className="radio">
                                            <input className='radio' name={a.questionId.toString()} required type="radio" />
                                            <div className="radio__text">{a.answer}</div>
                                        </label><p />
                                    </div> : null}
                            </div>
                            )}
                        </>
                        : ""}
                    <br />
                </div><br /></> : null
            )}
            <div className='zol'>
                <button className='buta'><NavLink to='/'>Повернутись</NavLink></button>
                <button className='buta' type="submit">Завершити</button>
            </div>
        </form>;
    }
}
export class QuestionDetail {
    id: number = 0
    question_Id: number = 0
    question: string = ""
}
export class AnswerDetail {
    questionId: number = 0
    answer: string = ""
}