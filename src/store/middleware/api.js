import axios from "axios";
import {apiCallBegan, apiCallFailed, apiCallSuccess} from '../api';
import {TOKEN, API_BASE_URL} from '../constants';

const api = ({dispatch}) => next => async action => {
    if (action.type !== apiCallBegan.type) {
        return next(action);
    }
    next(action);

    const {url, method, data, onStart, onSuccess, onError} = action.payload;

    if (onStart) {
        dispatch({type: onStart})
    }

    try {

        const headers = {
            Authorization: `JWT ${TOKEN}`
        };
        const response = await axios.request({
            baseURL: API_BASE_URL,
            url,
            method,
            data,
            headers
        });
        console.log(response.data);
        dispatch(apiCallSuccess(response.data));
        if (onSuccess) {
            dispatch({type: onSuccess, payload: response.data});
        }

    } catch (error) {
        dispatch(apiCallFailed(error));
        if (onError) {
            dispatch({type: onError, payload: error});
        }
    }


};

export default api;