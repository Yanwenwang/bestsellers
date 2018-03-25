import React from 'react';

import Book from '../../components/Book/Book';

export const BookList = ({ title, books }) => {

    const booksComponent = books.map((book, index) => {
        return (
            <Book key={index} {...book} />
        )
    });

    return (
        <div>
            <h3>{title}</h3>
            {booksComponent}
        </div>
    );
};

export default BookList;