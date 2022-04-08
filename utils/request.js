/* eslint-disable import/no-anonymous-default-export */
const API_KEY = process.env.API_KEY;

export default {
    fetchTrending:{
        title:'Trending',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title:'Top Rated',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchAction:{
        title:'Action',
        url:`/discover/movie?api_key=${API_KEY}&with_generes=28`
    },
    fetchComedy:{
        title:'Comedy',
        url:`/discover/movie?api_key=${API_KEY}&with_generes=28`
    },
    fetchHorror:{
        title:'Horror',
        url:`/discover/movie?api_key=${API_KEY}&with_generes=28`
    },
    fetchRomance:{
        title:'Romance',
        url:`/discover/movie?api_key=${API_KEY}&with_generes=28`
    },
}