import * as React from 'react';
import './HomeAfter.css';
export class Distribution extends React.Component {
    constructor() {
        super();
    }
    Distribution1 = () => {
        return (
            <div className='distribution'>
                <div className="circle">
                <a href='/wand'>
                    <div className='imga'></div>
                    </a>
                </div>
                <div className="circle">
                <a href="/patronus">
                    <div className='imga1'
                        alt="" />
                    </a>
                </div>
               <div className="circle">
                <a href="/faculty">
                    <div className='imga2'
                        alt="" />
                    </a>
                </div>
            </div>
        )
    }
    render() {
        return this.Distribution1();
    }
}