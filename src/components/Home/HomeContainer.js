import { connect } from 'react-redux';

import { getList, getFakeList } from '../../actions/list';
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
        const { display_name , books } = list;

        const mappedBooks = books.map((book) => {
            const { book_image, author, rank, title, description } = book;
            const imageAlt = `book cover for ${title}`;

            return {
                imageSrc: book_image,
                imageAlt,
                author,
                rank,
                title,
                description
            };
        });

        return {
            displayName: display_name,
            books: mappedBooks
        };
    });

    return {
        lists: mappedList
    };
};

const mapDispatchToProps = {
    getList: getFakeList
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);