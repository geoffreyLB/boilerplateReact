import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import InputPreview from '../../components/InputPreview';
import { setMessage } from '../../actions/message';

type Props = {
    message: '',
    dispatch: () => void,
};

class HomeContainer extends Component<Props> {
    _onChange = value => {
        this.props.dispatch(setMessage(value));
    };

    render() {
        const { message } = this.props;

        return (
            <div>
                <InputPreview value={message} onChange={this._onChange} />
                <Link to="/about">
                    <button>Go to About</button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = ({ message: { message } }) => ({
    message,
});

export default connect(mapStateToProps, null)(HomeContainer);
