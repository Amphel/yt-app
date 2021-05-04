import axios from 'axios';

const KEY='AIzaSyA2rtvP80zI4ywW4JIGemYpezSkUn6Htyo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});