import React from 'react';

export const Book = ({ imageSrc, imageAlt, author, rank, title, description  }) => {

    return (
        <div>
            <p>{rank}</p>
            <img src={imageSrc} alt={imageAlt}></img>
            <p>{title}</p>
            <p>{author}</p>
            <p>{description}</p>
        </div>
    );
};

export default Book;