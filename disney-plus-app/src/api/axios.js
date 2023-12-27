import axios from "axios";
// token
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzdhMDk0NWExYjMwNzMxMGQ3MjFhNTNjOTI3N2U4OCIsInN1YiI6IjY1OGI3YmIxYWUzNjY4MjJjZWJmNGFjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8EYWk8Kx7Z0lHG87PEozkf7pVl2gxUu6wGevRtDGrpA
const config = {
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'cc7a0945a1b307310d721a53c9277e88',
        language: 'ko-KR'
    }
}

const instance = axios.create(config);

export default instance;