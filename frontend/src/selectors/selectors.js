import values from 'lodash/values';

export const selectAllBooks = state => values(state.entities.books);
