import React from 'react';

import Loader from '../../components/Loader/Loader';
import BookList from '../../components/BookList/BookList';

import './Home.scss';

class Home extends React.Component {

    componentWillMount() {
        const { getList } = this.props;
        getList();
    }

    render () {
        const { lists, isLoading } = this.props;
        
        const bookListComponent = isLoading 
            ? <Loader />
            : lists.map((list, index) => {
                const { displayName, books } = list;

                return (
                    <BookList title={displayName} books={books} key={index} />
                );
            });

        return (
            <div className="home__container">
                {bookListComponent}
            </div>
        );
    }
}

export default Home;