import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { NavMenu } from './NavMenu';


export class Layout extends React.Component<RouteComponentProps<{}>,{}> {
    public render() {
        return <div>
            <div>
                <div >
                    <NavMenu />
                </div>
            </div>
        </div>;
    }
}
