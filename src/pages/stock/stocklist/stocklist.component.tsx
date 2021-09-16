import React, {useState, useEffect} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import CustomerListItem from "../../../components/customer/customerlist/customerlist-item.component";
import {AddCustomerButon, PageContainer} from "./stocklist.styles";
import CustomerDataService from "../../../services/customer.services";
import {ICustomer} from "../../../models/icustomer";
// type RouterProps = RouteComponentProps<any>;
// const textInput = React.createRef<HTMLInputElement>();

type ChildComponentProps = RouteComponentProps<any>;
const StockList: React.FC<ChildComponentProps> = ({history}) => {
    const name: ICustomer[] = [{
        id: "",
        birthdate: 1,
        birthmonth: 2,
        birthreminder: false,
        birthyear: 0,
        name: "",
        phone: "",
        surname:""
    }];
    const [stockList, setStockList] = useState(name);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchFunc = async () => {
            const response = await CustomerDataService.getAll(searchQuery);
            const customers: ICustomer[] = response.data;
            setStockList(customers);
        };
        // console.log(searchQuery + " Hello!");
        fetchFunc();
    }, [searchQuery]);

    return (
        <PageContainer>
            <h1 className="title"> Stock List </h1>
            <div>
                    search stock from name: <input type="text" onChange={event => setSearchQuery(event?.target.value)}></input>
                {/* <button
                    onClick={ this.getCustomerList }
                >
                    Search
                </button> */}
                <AddCustomerButon
                    onClick={() => history.push("addcustomer")}
                >
                    Add new stock
                </AddCustomerButon>
            </div>
            <div>Stock List</div>
            <div className="preview">
                {stockList?.map(item => (

                    <CustomerListItem key={item.id} customer={item} linkUrl=""/>
                ))}
            </div>
        </PageContainer>
    );

};

export default withRouter(StockList);

