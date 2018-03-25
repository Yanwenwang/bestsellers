import React from 'react';

import './Book.scss';

export const Book = ({ imageSrc, imageAlt, author, rank, title, description  }) => {

    return (
        <div className="book__container">
            <p className="book__rank">{rank}</p>
            <img className="book__image" src={imageSrc} alt={imageAlt}></img>
            <h4 className="book__title">{title}</h4>
            <p className="book__author">{author}</p>
            <p className="book__description">{description}</p>
        </div>
    );
};

export default Book;