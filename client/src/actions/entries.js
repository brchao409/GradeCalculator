import * as api from '../api';

export const fetchEntries = () => async (dispatch) => {
    try {
        const { data } = await api.fetchEntries();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createEntry = (entry) => async (dispatch) => {
    try {
        const { data } = await api.createEntry(entry);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteEntry = (id) => async (dispatch) => {
    try {
        await api.deleteEntry(id);

        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error);
    }
}