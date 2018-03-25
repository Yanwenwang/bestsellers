import React from 'react';

import Book from '../../components/Book/Book';

import './BookList.scss';

export const BookList = ({ title, books }) => {

    const booksComponent = books.map((book, index) => {
        return (
            <Book key={index} {...book} />
        )
    });

    return (
        <div className="book-list__container">
            <h3 className="book-list__title">{title}</h3>
            <div className="book-list__wrapper">
                {booksComponent}
            </div>
        </div>
    );
};

export default BookList;