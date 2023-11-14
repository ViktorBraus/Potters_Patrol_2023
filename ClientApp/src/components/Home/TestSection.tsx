import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Tests } from '../test/TestSection'
import './HomeAfter.css'
interface testData {
    testList: Tests[];
    loading: boolean;
}
export class TestSection extends React.Component<{},testData>
{
    constructor(props) {
        super(props);
        this.state = {loading: true, testList: [] }
        fetch('api/Tests/TestIndex')
            .then(response => response.json() as Promise<Tests[]>)
            .then(data => {
                this.setState({ testList: data, loading: false });
            });
    }
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.table(this.state.testList);

        return <div className='tundra'>
            {contents}
        </div>;

    }
    public table(test : Tests[]) {
        return (
            <div className='HometestSection'>
                <br />
                <div className='testvariantiv'>
                    {test.map(t =>
                        <a href={
                            t.test_Title == "Вибір чарівної палички" ? '/wand' :
                                t.test_Title == "Розподіл на факультети" ? '/faculty' :
                                    t.test_Title == "Вибір патронуса" ? '/patronus' : ""}>
                            <div className='ull'>
                                {t.test_Title}
                                <br />
                                Кількість запитань: {t.count_of_questions}
                                <div className={
                                    t.test_Title == "Вибір чарівної палички" ? 'imga_' :
                                        t.test_Title == "Розподіл на факультети" ? 'imga2_' :
                                            t.test_Title == "Вибір патронуса" ? 'imga1_' : ""}/>
                            </div>
                        </a>)
                    }
                </div>
                <br />
                <div className='textstyling'>
                    <div className='diff'>
                        <NavLink className='block' to='/testSection'>Секція тестів</NavLink>
                        <NavLink className='block' to='/forum'>Секція форуму</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
   