import React from 'react';

import BookList from '../../components/BookList/BookList';

class Home extends React.Component {

    componentWillMount() {
        const { getList } = this.props;
        getList();
    }

    render () {
        const { lists } = this.props;
        
        const bookListComponent = lists.map((list, index) => {
            const { displayName, books } = list;

            return (
                <BookList title={displayName} books={books} key={index} />
            );
        });

        return (
            <div>
                {bookListComponent}
            </div>
        );
    }
}

export default Home;