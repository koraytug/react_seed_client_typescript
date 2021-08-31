import {Dispatch} from "redux";
// import {ICustomer} from "../../models/icustomer";
import {SEARCH_CUSTOMERS} from "./customerlist.types";

export const searchCustomers = (customer:string) => {
    return async (dispatch: Dispatch): Promise<any> => {
        return dispatch({
            type: SEARCH_CUSTOMERS,
            payload: customer
        });
    };


};

