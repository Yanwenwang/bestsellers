import { connect } from 'react-redux';

import { getList } from '../../actions/list';

import Home from './Home';

const mapStateToProps = (state) => {};

const mapDispatchToProps = {
    getList
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);