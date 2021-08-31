import {ICustomer} from "../../models/icustomer";


export interface ISearchCustomerState {
    customers: ICustomer[];
}


export const SEARCH_CUSTOMERS = "SEARCH_CUSTOMERS";
// export const ADD_CUSTOMERS: "ADD_CUSTOMERS";

interface ISearchCustomersAction {
    type: typeof SEARCH_CUSTOMERS;
    payload: string;

}

export type CustomerListActionTypes = ISearchCustomersAction;
