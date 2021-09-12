import React from "react";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Dispatch} from "redux";
import CustomerListItem from "../../../components/customer/customerlist/customerlist-item.component";
import {ICustomer} from "../../../models/icustomer";
import {retrieveCustomers} from "../../../redux/customer/customer.actions";
// import {searchCustomers} from "../../../redux/customerlist/customerlist.actions";
import {AppState} from "../../../redux/store";

import {AddCustomerButon, PageContainer} from "./customerlist.styles";


interface ICustomerListProps {
    retrieveCustomers: (name: string) => void;
}

// interface ICustomerListState extends RouteComponentProps<any>{
interface ICustomerListState {
    customers: ICustomer[];
}


// type PathProps = {};
// type NonRouterNorReduxProps = {};
type RouterProps = RouteComponentProps<any>;
// type NonReduxProps = NonRouterNorReduxProps & RouterProps;
// type NonReduxProps = NonRouterNorReduxProps & RouterProps;
type Props = RouterProps&ICustomerListProps;

const textInput = React.createRef<HTMLInputElement>();

class CustomerList extends React.Component<Props, ICustomerListState> {
        public state: ICustomerListState = {
            customers:  []
        };

        constructor(props: any) {
            super(props);
            this.getCustomerList = this.getCustomerList.bind(this);
        }

        getCustomerList() {
            this.props.retrieveCustomers((textInput.current?.value) ? (textInput.current?.value) : "");
        }

        componentDidMount() {
            this.getCustomerList();
        }

        render() {
            console.log(this.props);
            // const {customers} = this.props;
            return (
                <PageContainer>
                    <h1 className="title"> Customer List </h1>
                    <div>
                    search customer from name: <input type="text" ref={textInput}></input>
                        <button
                            onClick={ this.getCustomerList }
                        >
                    Search
                        </button>
                        <AddCustomerButon
                            onClick={() => this.props.history.push("addcustomer")}
                        >
                    Add new customer
                        </AddCustomerButon>
                    </div>
                    <div>Customer List</div>
                    <div className="preview">
                        {this.state.customers?.map(item => (
                            <CustomerListItem key={item.id} customer={item} linkUrl=""/>
                        ))}
                    </div>
                </PageContainer>
            );
        }
}


const mapStateToProps = (state:AppState) => ({
    activeCustomer: state.customer,
    customers: state.customerList.customers
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    retrieveCustomers: (name:any) => dispatch<any>(retrieveCustomers(name))
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CustomerList)
);
