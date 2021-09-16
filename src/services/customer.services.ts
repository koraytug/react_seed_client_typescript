import axios from "axios";
import http from "../http-common";

class CustomerDataService {
    getAll(customerName:string) {
        const bodyFormData: FormData = new FormData();

        bodyFormData.append("user", "data");
        const QueryData = JSON.stringify({
            name:  customerName
        });

        return axios({
            method: "get",
            url: "http://localhost:4000/getall_customers",
            headers: {

            },
            data: QueryData
        })
        .then(response => {
            return Promise.resolve({...response});
        })
        .catch(error => {
            throw error;
        });
    }

    get(id:string) {
        return http.get(`/customer/${id}`);
    }

    create(data: any) {
        const bodyFormData: FormData = new FormData();

        bodyFormData.append("user", "data");

        return axios({
            method: "post",
            url: "http://localhost:4000/create_customer",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data : data
        })
        .then(response => {
            console.log("in the then");
            return Promise.resolve(response);
        })
        .catch(error => {
            throw error;
        });
    }

    update(id: string, data: any) {

        return axios({
            url: "http://localhost:4000/update",
            method: "put",
            data: {
                customername: data
            }
        })
        .then(response => {
            console.log("in the then");
            return Promise.resolve(response);
        })
        .catch(error => {
            throw error;
        });


        // return http.put(`/customer/${id}`, data);
    }

    delete(id:string) {
        return http.delete(`/customer/${id}`);
    }

    deleteAll() {
        return http.delete("/customer");
    }

    findByName(customerName:string) {
        return http.get(`/customer?customername=${customerName}`);
    }
}

export default new CustomerDataService();
