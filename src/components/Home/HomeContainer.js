import { connect } from 'react-redux';

import { getList } from '../../actions/list';
import queryString from 'query-string';

import Home from './Home';

const mapStateToProps = (state) => {
    const { lists } = state.list;
    const { search } = state.routing.location;

    const queryParams = queryString.parse(search);

    const filteredBookList = queryParams.list
        ? lists.filter((bookList) => {
            return bookList.list_name_encoded === queryParams.list;
        })
        : lists;

    const mappedList = filteredBookList.map((list) => {
        const { display_name } = list;

        return {
            displayName: display_name
        };
    });

    return {
        lists: mappedList
    };
};

const mapDispatchToProps = {
    getList
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);