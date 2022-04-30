export default (entries = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...entries, action.payload];
        case 'DELETE':
            return entries.filter((post) => post._id !== action.payload);
        case 'UPDATE':
            return entries.map((entry) => entry._id === action.payload ? action.payload : entry);
        default:
            return entries;
    }
}