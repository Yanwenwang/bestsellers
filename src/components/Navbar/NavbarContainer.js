import { connect } from 'react-redux';

import { toggleLeftNav } from '../../actions/mobileLeftNav';
import Navbar from './Navbar';

const mapDispatchToProps = {
    toggleLeftNav
};

export default connect(null, mapDispatchToProps)(Navbar);