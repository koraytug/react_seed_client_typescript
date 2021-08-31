import {Dispatch} from "redux";

import customerIcon from "../../pages/homepage/customer-icon.png";
import stockIcon from "../../pages/homepage/goods-icon-25.jpg";
import operationIcon from "../../pages/homepage/operation-icon.jpg";
import reportIcon from "../../pages/homepage/report-icon.png";
import {GET_SECTIONS, ISectionState} from "./section.types";

const initialState:ISectionState = {
    Sections: [
    {
        title: "Customers",
        imageUrl: customerIcon,
        size: 10,
        linkUrl: "customer/customerlist"
    },
    {
        title: "Stocks",
        imageUrl: stockIcon,
        size: 10,
        linkUrl: "stock/stocklist"
    },
    {
        title: "Operations",
        imageUrl: operationIcon,
        size: 10,
        linkUrl: "operation/operationlist"
    },
    {
        title: "Reports",
        imageUrl: reportIcon,
        size: 10,
        linkUrl: "report/reportslist"
    }
    ]
};

export const getSections = () => {
    return async (dispatch: Dispatch): Promise<ISectionState> => {
        try {
            const res = initialState;
            dispatch({
                type: GET_SECTIONS,
                payload: res
            });

            return Promise.resolve(res);
        } catch (err) {
            return Promise.reject(err);
        }
    };
};
