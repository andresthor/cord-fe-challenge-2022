export const init = () => initialState;

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'RESULTS':
      return { ...state, results: payload };
    case 'COUNT':
      return { ...state, totalCount: payload };
    case 'GENRE':
      return { ...state, genreOptions: payload };
    case 'LANG':
      return { ...state, languageOptions: payload };
    case 'KEY':
      return { ...state, keyword: payload };
    default:
      return state;
  }
};

const initialState = {
  results: [],
  totalCount: 0,
  genreOptions: [],
  ratingOptions: [
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 },
  ],
  languageOptions: [
    { id: 'GR', name: 'Greek' },
    { id: 'EN', name: 'English' },
    { id: 'RU', name: 'Russian' },
    { id: 'PO', name: 'Polish' },
  ],
};
