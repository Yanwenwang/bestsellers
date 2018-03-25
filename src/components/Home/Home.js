import React, { PropTypes } from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { getList } = this.props;
        getList();
    }

    render () {
        const { list } = this.props;

        return (
            <div>
                Home
            </div>
        );
    }
}

Home.propTypes = {
    //list: PropTypes.array.isRequired
};

export default Home;