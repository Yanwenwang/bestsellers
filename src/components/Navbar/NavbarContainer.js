import { connect } from 'react-redux';
import queryString from 'query-string';

import { toggleLeftNav } from '../../actions/mobileLeftNav';
import Navbar from './Navbar';

const mapStateToProps = (state) => {};

const mapDispatchToProps = {
    toggleLeftNav
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);