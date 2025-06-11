type ThemeState = {
    themeId: number;
};
const initState: ThemeState = {
    themeId: 1,
}
type ChangeThemeIdAction = {
    type: 'SET_THEME_ID';
    payload: {
        themeId: number;
    };
};
type ThemeActions = ChangeThemeIdAction;

export const themeReducer = (state = initState, action: ThemeActions): ThemeState => {
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {
                ...state,
                themeId: action.payload.themeId,
            }
        }

        default:
            return state
    }
}

export const changeThemeId = (themeId: number): ChangeThemeIdAction => ({ type: 'SET_THEME_ID',  payload: { themeId } })
