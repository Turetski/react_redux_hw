const initialState = {
    entities:[],
    isLoading: false,
    isLoaded:false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_VACANCIES_START':
            return { ...state, isLoading: true, isLoaded: false }

        case 'LOAD_VACANCIES_ERROR ':
            return {...state, isLoading: false};

        case 'LOAD_VACANCIES_FINISH':
            return { ...state, entities: action.vacancies, isLoading: false, isLoaded: true };

        default:
            return state;
      }
}