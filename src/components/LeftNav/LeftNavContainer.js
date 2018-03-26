import { connect } from 'react-redux';
import queryString from 'query-string';

import { toggleLeftNav } from '../../actions/mobileLeftNav';
import LeftNav from './LeftNav';

const mapStateToProps = (state) => {
    const { lists } = state.list;
    const { search } = state.routing.location;
    const { isLeftNavOpen } = state.mobileLeftNav;

    const queryParams = queryString.parse(search);

    const mappedList = lists.map((list) => {
        const { list_name_encoded, display_name } = list;

        const url = `/?list=${list_name_encoded}`;

        return {
            id: list_name_encoded,
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
        filters,
        activeFilter: queryParams.list,
        isLeftNavOpen
    };
};

const mapDispatchToProps = {
    toggleLeftNav
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftNav);