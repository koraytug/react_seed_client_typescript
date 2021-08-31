import {ICustomer} from "../../models/icustomer";

export interface ICustomerState {
    customers: ICustomer[];
    newId: number;
    activeCustomer: ICustomer;
}

export const CREATE_CUSTOMER = "CREATE_CUSTOMER";
export const RETRIEVE_CUSTOMERS = "RETRIEVE_CUSTOMERS";
export const UPDATE_CUSTOMER = "UPDATE_CUSTOMER";
export const DELETE_CUSTOMER = "DELETE_CUSTOMER";
export const DELETE_ALL_CUSTOMERS = "DELETE_ALL_CUSTOMERS";

interface ICreateCustomerAction {
    type: typeof CREATE_CUSTOMER;
    payload: ICustomer;
}

interface IRetriveAllCustomersAction {
    type: typeof RETRIEVE_CUSTOMERS;
    payload: ICustomer[];
}

interface IUpdateCustomerAction {
    type: typeof UPDATE_CUSTOMER;
    payload: ICustomer;
}

interface IDeleteCustomerAction {
    type: typeof DELETE_CUSTOMER;
    payload: {
        id: string;
    };
}

interface IDeleteAllCustomersAction {
    type: typeof DELETE_ALL_CUSTOMERS;
}


export type CustomerActionTypes = ICreateCustomerAction | IRetriveAllCustomersAction |
    IUpdateCustomerAction | IDeleteCustomerAction | IDeleteAllCustomersAction;
