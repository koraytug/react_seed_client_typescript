import React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";

import {
    Customer,
    CustomerIconContainer,
    CustomerName,
    CustomerSurname, CustomerInformationContainer
} from "./customerlist-item.styles";
import customerIcon from "./user_icon.png";

// import CustomButton from '../custom-button/custom-button.component';
// import { CartContext } from '../../providers/cart/cart.provider';

// import './collection-item.styles.scss';
interface IProps extends RouteComponentProps<any>{
    customer: any;
    linkUrl: string;
}

function CustomerListItem(props: IProps):JSX.Element {
    const {name, surname} = props.customer;
    //   const { addItem } = useContext(CartContext);

    return (
        <Customer onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}>
            <CustomerIconContainer
                className="background-image"
                imageUrl={customerIcon}
            />
            <CustomerInformationContainer >
                <CustomerName className="name">{name}</CustomerName>
                <CustomerSurname className="surname">{surname}</CustomerSurname>
            </CustomerInformationContainer>
        </Customer>
    );
}

export default withRouter(CustomerListItem);
