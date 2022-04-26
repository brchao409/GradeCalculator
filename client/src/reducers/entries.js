export default (entries = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...entries, action.payload];
        case 'DELETE':
            return entries.filter((post) => post._id !== action.payload);
        default:
            return entries;
    }
}