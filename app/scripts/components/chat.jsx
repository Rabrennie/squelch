import React from 'react';
import _ from 'lodash';

import Message from './message';

export default class Chat extends React.Component {

    render() {
        const messages = this.props.messages;
        return (
            <div className='message-container'>
                <ul className='messages'>{
                    _(messages).compact().reverse().map((message) =>
                        <Message message={message} key={message.id} />
                    ).value()
                }</ul>
            </div>
        );
    }
}
