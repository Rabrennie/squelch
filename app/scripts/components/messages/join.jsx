import React from 'react';
import Nick from '../nick';

export default class Join extends React.Component {
    render() {
        const message = this.props.message;

        return (
            <span className='join'>
                <Nick nick={message.nick} />&nbsp;
                has joined {message.chan}
            </span>
        );
    }
}

Join.propTypes = {
    message: React.PropTypes.shape({
        nick: React.PropTypes.string.isRequired,
        chan: React.PropTypes.string.isRequired
    }).isRequired
};
