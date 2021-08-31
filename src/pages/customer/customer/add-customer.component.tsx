import React, {Component} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ICustomer} from "../../../models/icustomer";
import {createCustomer} from "../../../redux/customer/customer.actions";
import {AppState} from "../../../redux/store";
import {
    CustomerForm,
    CustomerFormItem,
    FormLabelItem,
    FormInputItem,
    SaveButton,
    CustomerFormColumn,
    BirthYear,
    BirthMonth,
    BirthDay,
    CustomerFormButtonRow,
    CheckBoxItem,
    CancelButton
} from "./add-customer.styles";

interface IAddCustomerProps {
    createCustomer: (customer: ICustomer) => void;
}

interface IAddCustomerState {
    customer: ICustomer;
}

class AddCustomer extends Component<IAddCustomerProps, IAddCustomerState> {
    public state: IAddCustomerState = {
        customer:  {
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

    constructor(props: any) {
        super(props);

        this.handleOnChanges = this.handleOnChanges.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);
    }

    handleOnChanges(event: any) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            ...this.state, [name]: value
        });
    }

    saveCustomer() {

        const customer: ICustomer = {
            id: this.state.customer.id,
            name: this.state.customer.name,
            surname: this.state.customer.surname,
            phone: this.state.customer.phone,
            birthdate: this.state.customer.birthdate,
            birthmonth: this.state.customer.birthmonth,
            birthyear: this.state.customer.birthyear,
            birthreminder: this.state.customer.birthreminder
        };
        this.props
      .createCustomer(customer);
    //   .then((data:any) => {
    //       console.log(data);
    //   })
    //   .catch((e:Error) => {
    //       console.log(e);
    //   });
    }

    render() {
        return (
            <CustomerForm>
                <CustomerFormColumn>
                    <CustomerFormItem>
                        <FormLabelItem htmlFor="name">Name</FormLabelItem>
                        <FormInputItem
                            type="text"
                            className="form-control"
                            id="name"
                            required
                            value={this.state.customer.name}
                            onChange={this.handleOnChanges}
                            name="name"
                        />
                    </CustomerFormItem>
                    <CustomerFormItem>
                        <FormLabelItem htmlFor="surname">Surname</FormLabelItem>
                        <FormInputItem
                            type="text"
                            id="surname"
                            required
                            value={this.state.customer.surname}
                            onChange={this.handleOnChanges}
                            name="surname"
                        />
                    </CustomerFormItem>
                </CustomerFormColumn>
                <CustomerFormColumn>
                    <CustomerFormItem>
                        <FormLabelItem htmlFor="phone">Phone Number</FormLabelItem>
                        <FormInputItem
                            type="text"
                            className="form-control"
                            id="phone"
                            required
                            value={this.state.customer.phone}
                            onChange={this.handleOnChanges}
                            name="phone"
                        />
                    </CustomerFormItem>
                    <CustomerFormItem>
                        <FormLabelItem htmlFor="surname">Birth Date</FormLabelItem>
                        <BirthDay
                            type="number"
                            id="birthdate"
                            required
                            maxLength={2}
                            value={this.state.customer.birthdate}
                            name="birthdate"
                            placeholder="Day"
                            onChange={this.handleOnChanges}
                        />
            /
                        <BirthMonth
                            type="number"
                            id="birthMonth"
                            required
                            maxLength={2}
                            value={this.state.customer.birthmonth}
                            name="birthmonth"
                            onChange={this.handleOnChanges}
                            placeholder="Month"
                        />
            /
                        <BirthYear
                            type="number"
                            id="birthyear"
                            required
                            maxLength={4}
                            value={this.state.customer.birthyear}
                            name="birthyear"
                            onChange={this.handleOnChanges}
                            placeholder="Year"
                        />
                    </CustomerFormItem>
                </CustomerFormColumn>
                <CustomerFormColumn>
                    <CustomerFormItem>
                        <FormLabelItem htmlFor="birthreminder">
              Birth Day Reminder
                        </FormLabelItem>
                        <CheckBoxItem
                            id="birthreminder"
                            name="birthreminder"
                            type="checkbox"
                            value={this.state.customer.birthreminder.toString()}
                            checked={this.state.customer.birthreminder}
                            onChange={this.handleOnChanges}
                            defaultChecked={false}
                        />
                    </CustomerFormItem>
                </CustomerFormColumn>
                <CustomerFormButtonRow>
                    <SaveButton onClick={this.saveCustomer}>Save</SaveButton>
                    <CancelButton>Cancel</CancelButton>
                </CustomerFormButtonRow>
            </CustomerForm>
        );
    }
}

const mapStateToProps = (state:AppState) => ({
    activeCustomer: state.customer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    createCustomer: (customer:any) => dispatch<any>(createCustomer(customer))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer);
