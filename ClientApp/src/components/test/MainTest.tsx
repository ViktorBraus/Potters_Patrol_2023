import * as React from 'react'
import { RouteComponentProps } from 'react-router';
import { Tests } from './TestSection'
import { FacultyTest } from './FacultyTest'
import { WandTest } from './WandTest';
import { PatronusTest } from './PatronusTest';
import { Link, NavLink, Route } from 'react-router-dom';
interface ContentBookDataState {
    testId: string;
    title: string;
    loading: boolean;
    Tests: Tests;
    path: string;
}
export class MainTest extends React.Component<RouteComponentProps<{}>, ContentBookDataState> {
    constructor(props) {
        super(props);
        var testid = this.props.match.params["testid"];
        this.state = { title: "", loading: true, testId: testid, Tests: new Tests, path: "data:image/png;base64," };


        // This will set state for Edit employee
        if (testid > 0) {
            fetch('/api/Test/Details/' + testid)
                .then(response => response.json() as Promise<Tests>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, Tests: data });
                });
        }

        else {
            this.state = { title: "Create", testId: testid, loading: false, Tests: new Tests, path: "data:image/png;base64," };
        }

    }
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.state.Tests.testId == 1 ? <NavLink to='/facultyTest'></NavLink>
                : this.state.Tests.testId == 2 ? <NavLink to='/patronusTest'></NavLink>
                    : this.state.Tests.testId == 3 ? <NavLink to='/wandTest'></NavLink> : "";

        return <div>
            {contents}
        </div>;

    }
}