import React from 'react';

export const BookList = ({ title, books }) => {

    const booksComponent = books.map((book) => {
        const { title } = book;

        return (
            <p>{title}</p>
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