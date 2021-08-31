import axios from "axios";
// import { response } from 'express';

export function getCustomerList(name:string):any {
    axios({
        url: "http://localhost:4400/customerList",
        method: "get",
        data: {
            customername: name
        }
    })
    .then(response => {
        console.log("in the then");
        Promise.resolve(response);
    })
    .catch(error => {
        throw error;
    });
}


