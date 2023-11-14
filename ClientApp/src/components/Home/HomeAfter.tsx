import * as React from 'react';
import './HomeAfter.css';
import Notifications from 'react-notify-toast'
import ContentBlock from './ContentBlock'
import { Distribution } from './Distribution'
import { TestSection } from './TestSection';
import { RouteComponentProps } from 'react-router';
export class HomeAfter extends React.Component<RouteComponentProps<{}>> {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            testList: []
        }
    }
  render = () => {
    const content = () => {
      return (
        <div>
          <ContentBlock/>
          <div className='textstyling'>
                  Почніть ваш розподіл у світі магії та нехай <br />
                  ваше серце обере свій рідний дім
          </div>
              <Distribution/>
          <div className='textstyling'>
          Найбільш популярні тести
          </div>
              <TestSection/>
          <Notifications />
        </div>
      )
    }
    return (
      <div>
        <main>
          {content()}
        </main>
      </div>
    )
  }
}