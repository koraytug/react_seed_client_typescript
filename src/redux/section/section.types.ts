
export interface ISectionState {
    Sections: ISections[];
}

export interface ISections{
    title: string;
    imageUrl: string;
    size: number;
    linkUrl:string;
}

export const GET_SECTIONS = "GET_SECTIONS";
// export const ADD_CUSTOMERS: "ADD_CUSTOMERS";

interface IGetSectionsAction {
    type: typeof GET_SECTIONS;
    payload: ISectionState[];
}

export type SectionActionTypes = IGetSectionsAction;
