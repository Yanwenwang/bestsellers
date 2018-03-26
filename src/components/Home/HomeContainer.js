import { connect } from 'react-redux';

import { getList } from '../../actions/list';
import queryString from 'query-string';

import Home from './Home';

const mapStateToProps = (state) => {
    const { lists, isLoading } = state.list;
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
                rank: `# ${rank}`,
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
        isLoading,
        lists: mappedList
    };
};

const mapDispatchToProps = {
    getList
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);