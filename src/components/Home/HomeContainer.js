import { connect } from 'react-redux';

import { getList } from '../../actions/list';

import Home from './Home';

const mapStateToProps = (state) => {
    const { lists } = state.list;

    const mappedList = lists.map((list) => {
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