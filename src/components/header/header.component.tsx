import React from "react";
// import {JsxElement} from "typescript";

import {ReactComponent as Logo} from "../../assets/crown.svg";

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from "./header.styles";

function Header(): JSX.Element {
    return (<HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/shop">CONTACT</OptionLink>
        </OptionsContainer>
    </HeaderContainer>);
}

export default Header;
