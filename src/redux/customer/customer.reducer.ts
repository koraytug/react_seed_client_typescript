import {ICustomer} from "../../models/icustomer";
import {CREATE_CUSTOMER, CustomerActionTypes, DELETE_ALL_CUSTOMERS, DELETE_CUSTOMER, ICustomerState, RETRIEVE_CUSTOMERS, UPDATE_CUSTOMER} from "./customer.types";

const initialState: ICustomerState =
{
    customers:[],
    newId: 0,
    activeCustomer: {
        id: "",
        name: "",
        surname: "",
        phone: "",
        birthdate:0,
        birthmonth: 0,
        birthyear: 0,
        birthreminder: false
    }
};

function customerReducer(state = initialState, action:CustomerActionTypes):ICustomerState {
    // const {type, payload} = action;

    switch (action.type) {
        case CREATE_CUSTOMER:
            return {...state, activeCustomer: action.payload};

        case RETRIEVE_CUSTOMERS:
            return {...state, customers: action.payload};

        case UPDATE_CUSTOMER:
            return {...state, activeCustomer: state.customers.map((customer :ICustomer) => {
                if (customer.id === action.payload.id) {
                    return {
                        ...customer,
                        ...action.payload
                    };
                } else {
                    return customer;
                }
            })[0]};

        case DELETE_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload.id)};

        case DELETE_ALL_CUSTOMERS:
            return {...state, customers:[]};

        default:
            return state;
    }
}

export default customerReducer;
