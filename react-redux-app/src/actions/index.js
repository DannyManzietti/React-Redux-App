import axios from 'axios';

export const FETCH_COIN_START = 'FETCH_COIN_START';
export const FETCH_COIN_SUCCESS = 'FETCH_COIN_SUCCESS';
export const FETCH_COIN_FAILURE = 'FETCH_COIN_FAILURE';


export const getCoins = () => dispatch => {
    dispatch({ type: FETCH_COIN_START });
    axios
        .get('https://api.pokemontcg.io/v1/cards?setCode=base1')
        .then(res =>
            dispatch({type: FETCH_COIN_SUCCESS, payload: res.data.cards}))
            .catch(err => dispatch({type: FETCH_COIN_FAILURE, payload: err}));
};