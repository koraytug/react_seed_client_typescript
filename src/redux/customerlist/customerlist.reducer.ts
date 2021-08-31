import {CustomerListActionTypes, ISearchCustomerState, SEARCH_CUSTOMERS} from "./customerlist.types";
// import { selectCustomerListItems } from './customerlist.selectors';

import CUSTOMER_DATA from "./customer.data";
// import {ICustomer} from "../../models/icustomer";


// const INITIAL_STATE = {
//     customers: CUSTOMER_DATA.items
// };

const initialState: ISearchCustomerState =
{
    customers: CUSTOMER_DATA.items
};

function customerListReducer(state = initialState, action: CustomerListActionTypes):ISearchCustomerState {
    switch (action.type) {
        // case CustomerListActionTypes.ADD_CUSTOMERS:
        //     return {
        //         ...state.items,
        //         ...action.payload
        //     };
        case SEARCH_CUSTOMERS:
            // const customers: ICustomer[] = [];
            if (action.payload === "") {
                // customers = INITIAL_STATE;
                return {...state};
            } else {
                const result = initialState.customers.filter(customer =>
                    customer.name.startsWith(action.payload)
                );

                return {...state, customers:result};
            }

        default:
            return state;
    }
}

export default customerListReducer;
