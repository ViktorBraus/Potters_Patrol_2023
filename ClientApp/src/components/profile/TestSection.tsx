import * as React from 'react';
import './profile.css'
import { Tests } from '../test/TestSection'
interface testData {
    testList: Tests[];
    userList: UserContent[];
    loading: boolean;
}
export class TestSection extends React.Component<{}, testData>
{
        constructor(props) {
            super(props);
            this.state = { loading: true, testList: [], userList: []}
            fetch('api/Tests/TestIndex')
                .then(response => response.json() as Promise<Tests[]>)
                .then(data => {
                    this.setState({ testList: data, loading: false });
                });
            fetch('api/UserContent/Index')
                .then(response => response.json() as Promise<UserContent[]>)
                .then(data => {
                    this.setState({ userList: data, loading: false });
                });
    }
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.table(this.state.testList);

        return <div>
            {contents}
        </div>;
    }
    public table(testList: Tests[]) {
        return(
            <div className='HometestSection'>
                <br />
                <div className='testvariantiv'>
                    {testList.map(t =>
                        <div>
                            <div className='ull'>
                                {t.test_Title}
                                <br />
                                Кількість запитань: {t.count_of_questions}
                                <div className={
                                    t.test_Title == "Вибір чарівної палички" ? 'imga_' :
                                        t.test_Title == "Розподіл на факультети" ? 'imga2_' :
                                            t.test_Title == "Вибір патронуса" ? 'imga1_' : ""} />
                            </div>
                        </div>)
                    }
                </div>
                <div>
                    <button className='buttontest'>
                        Create an own Test
                    </button>
                </div>
            </div>
        )
    }
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