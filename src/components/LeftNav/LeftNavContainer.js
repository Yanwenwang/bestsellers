import { connect } from 'react-redux';

import LeftNav from './LeftNav';

const mapStateToProps = (state) => {
    const { lists } = state.list;

    const mappedList = lists.map((list) => {
        const { list_name_encoded, display_name } = list;

        const url = `/?list=${list_name_encoded}`;

        return {
            url,
            displayName: display_name
        }
    });

    const filters = [
        {
            url: '/',
            displayName: 'All'
        },
        ...mappedList
    ]

    return {
        filters
    };
};

export default connect(mapStateToProps, null)(LeftNav);