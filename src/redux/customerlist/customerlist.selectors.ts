import {createSelector} from "reselect";
import {ICustomer} from "../../models/icustomer";
import {AppState} from "../store";

const selectCustomers = (state:AppState) => state.customerList.customers;

export const selectCustomerListItems = (customerName:string):ICustomer[]|any =>
    createSelector([selectCustomers], customerList => {
        console.log("customers.itemsddd", selectCustomers);
        if (customerName && customerName !== "") {
            console.log("filter", customerList);
            const result = customerList?.filter(customer =>
                customer.name.startsWith(customerName)
            );

            if (!result) {
                console.log("null result");
                return [];
            }
            console.log("not null result", result);
            return result;
        } else {
            console.log("customers.items", customerList);
            return customerList ? customerList : [];
        }
    });
