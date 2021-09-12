import {Dispatch} from "redux";
import {ICustomer} from "../../models/icustomer";
import CustomerDataService from "../../services/customer.services";
import {CREATE_CUSTOMER, DELETE_ALL_CUSTOMERS, DELETE_CUSTOMER, RETRIEVE_CUSTOMERS, UPDATE_CUSTOMER} from "./customer.types";

export const createCustomer = (customer: ICustomer) => {
    return async (dispatch: Dispatch): Promise<any> => {
        try {
            const {
                id,
                name,
                surname,
                phone,
                birthdate,
                birthmonth,
                birthyear,
                birthreminder
            } = customer;
            const res = await CustomerDataService.create({
                id: id,
                name: name,
                surname: surname,
                phone: phone,
                birthdate: birthdate,
                birthmonth: birthmonth,
                birthyear: birthyear,
                birthreminder: birthreminder
            });
            dispatch({
                type: CREATE_CUSTOMER,
                payload: res.data
            });

            return Promise.resolve(res.data);
        } catch (err) {
            return Promise.reject(err);
        }
    };

};

export const retrieveCustomers = (customerName: string) => {
    return async (dispatch: Dispatch): Promise<any> => {
        try {
            const res = await CustomerDataService.getAll(customerName);
            dispatch({
                type: RETRIEVE_CUSTOMERS,
                payload: res.data
            });

            return Promise.resolve(res.data);
        } catch (err) {
            return Promise.reject(err);
        }
    };
};

export const updateCustomer = (id: string, data: ICustomer) => {
    return async (dispatch: Dispatch): Promise<any> => {
        try {
            const res = await CustomerDataService.update(id, data);
            dispatch({
                type: UPDATE_CUSTOMER,
                payload: data
            });

            return Promise.resolve(await res.data);
        } catch (err) {
            return Promise.reject(err);
        }
    };
};

export const deleteCustomer = (id:string) => {
    return async (dispatch: Dispatch): Promise<any> => {
        try {
            await CustomerDataService.delete(id);
            dispatch({
                type: DELETE_CUSTOMER,
                payload: {id: id}
            });

            return Promise.resolve();
        } catch (err) {
            return Promise.reject(err);
        }
    };
};

export const deleteAllCustomers = () => {
    return async (dispatch: Dispatch): Promise<any> => {
        try {
            const res = await CustomerDataService.deleteAll();
            dispatch({
                type: DELETE_ALL_CUSTOMERS,
                payload: res.data
            });

            return Promise.resolve(res.data);
        } catch (err) {
            return Promise.reject(err);
        }
    };
};

export const findCustomersByName = (name:string) => {
    return async (dispatch: Dispatch): Promise<any> => {
        try {
            const res = await CustomerDataService.findByName(name);
            dispatch({
                type: RETRIEVE_CUSTOMERS,
                payload: res.data
            });

            return Promise.resolve(res.data);
        } catch (err) {
            return Promise.reject(err);
        }
    };
    // try {
    //     const res = await CustomerDataService.findByTitle(name);

    //     dispatch({
    //         type: CustomerActionTypes.RETRIEVE_CUSTOMERS,
    //         payload: res.data
    //     });
    // } catch (err) {
    //     console.log(err);
    // }
};
