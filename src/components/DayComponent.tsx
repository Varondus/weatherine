import React from 'react';
import temp from './formComponent';

interface iAmState {
    day?: string;
    temperature?: number;
}
interface iAmProps {
    
}

export default class DayComponent extends React.Component<iAmProps,iAmState> {
    constructor(props: any) {
        super(props)
        this.state = {day: "first", temperature: 0 }
    }

    render() {

        const weatherData = Response

        return (
            <div>
                <h1>
                    {this.state.day}
                </h1>
                <p>
                {temp}</p>
            </div>
        )
    }
};
