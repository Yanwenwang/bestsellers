import fetchJsonp from 'fetch-jsonp';

const apiKey = '4734d0d5080d4ef1b9304d967df459cb';

export const getBestSellers = () => {
    const url = `http://api.nytimes.com/svc/books/v3/lists/overview.jsonp?api-key=${apiKey}`;

    return fetchJsonp(url);
}

export default {
    getBestSellers
}