import axios from 'axios';
const KEY='AIzaSyCOvgQwfCfCGaEU-M1SkqF7o76G5Z6rP64';

export default axios.create(

    {
        baseURL:'https://www.googleapis.com/youtube/v3',
        params:{
         part:'snippet',
         maxResults:5,
         key:KEY
        }
    }
);