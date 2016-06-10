import State from '../stores/state';

const showInfoMsg = (msg) => {
    State.trigger('message:receive', {
        type: 'info',
        message: msg
    });
};

export default showInfoMsg;
