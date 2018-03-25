import { connect } from 'react-redux';

import LeftNav from './LeftNav';

const mapStateToProps = () => {

    return {
        filters: [
            {
                url: '/',
                display: 'All'
            },
            {
                url: '/?list=fiction',
                display: 'Fiction'
            }
       ]
    };
};

export default connect(mapStateToProps, null)(LeftNav);