import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

interface TestList {
    title: string;
    loading: boolean;
    Test: Tests[];
    path: string;
}
export class TestSection extends React.Component<RouteComponentProps<{}>, TestList> {
    constructor(props) {
        super(props);
        this.state = { title: "", loading: true, Test:[], path: "data:image/png;base64," };

        fetch('api/Tests/TestIndex')
            .then(response => response.json() as Promise<Tests[]>)
            .then(data => {
                this.setState({ Test: data, loading: false });
            });
        this.handleEdit = this.handleEdit.bind(this);
    }
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderTestTable(this.state.Test);

        return <div className='tundra'>
            {contents}
        </div>;

    }
    private handleEdit(id: number) {
        this.props.history.push("/testSection/entering/" + id);
    }

    public renderTestTable(test: Tests[]) {

        return (
            <table className='table2'>
                {test.map(t => <>
                    <td className='ulling tt'>
                        <div>
                            <label htmlFor="Name">Назва Тесту</label>
                            <div>
                                <label className='cfr' name="test_Title" value={t.test_Title}>{t.test_Title}</label>
                            </div>
                        </div >
                        <div>
                            <label htmlFor="Gender">Кількість питань</label>
                            <div>
                                <label className='cfr' name="count_of_questions" value={t.count_of_questions.toString()}>{t.count_of_questions}</label>
                            </div>
                        </div >
                        <div>
                            <a className="action" onClick={(id) => this.handleEdit(t.testId)}>Перейти</a>
                            <NavLink to='/' className="nmnm btn">Повернутись</NavLink>
                        </div >
                    </td ></>)}
                </table>)
    }
}

export class Tests {
    testId: number = 0;
    test_Title: string = "";
    count_of_questions: number = 0;
    result_: number = 0;
}