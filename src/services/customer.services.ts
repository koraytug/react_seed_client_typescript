import http from "../http-common";

class CustomerDataService {
    getAll() {
        return http.get("/customer");
    }

    get(id:string) {
        return http.get(`/customer/${id}`);
    }

    create(data: any) {
        return http.post("/customer", data);
    }

    update(id:string, data: any) {
        return http.put(`/customer/${id}`, data);
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
