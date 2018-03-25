import React from 'react';

export const Book = ({ imageSrc, author, rank, title, description  }) => {

    return (
        <div>
            <p>{rank}</p>
            <img src={imageSrc}></img>
            <p>{title}</p>
            <p>{author}</p>
            <p>{description}</p>
        </div>
    );
};

export default Book;