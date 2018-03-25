import { connect } from 'react-redux';

import LeftNav from './LeftNav';

const mapStateToProps = (state) => {
    const { list } = state.list;

    return {
        filters: list.map((item) => {
            const { queryParam, displayName } = item;

            const url = queryParam ? `/?queryParam=${queryParam}` : '/';

            return {
                url,
                displayName
            }
        })
    };
};

export default connect(mapStateToProps, null)(LeftNav);