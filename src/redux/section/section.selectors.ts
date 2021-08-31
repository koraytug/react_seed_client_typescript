import {createSelector} from "reselect";
import {AppState} from "../store";

const selectSelection = (state:AppState) => state.section;

export const selectSections = createSelector(
    [selectSelection],
    sectionData => sectionData
);


