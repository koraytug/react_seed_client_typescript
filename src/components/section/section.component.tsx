import React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
// import {JsxElement} from "typescript";

import {
    SectionContainer,
    IconContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from "./section.styles";

interface IProps extends RouteComponentProps<any> {
    title: string;
    imageUrl: string;
    size: number;
    history: any;
    linkUrl: string;
    match: any;
}

function Section(props: IProps) :JSX.Element {
    return (<SectionContainer
        size={props.size}
        onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}
    >
        <IconContainer className="background-image" imageUrl={props.imageUrl} />
        <ContentContainer className="content">
            <ContentTitle>{props.title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>OPEN</ContentSubtitle>
        </ContentContainer>
    </SectionContainer>);
}


export default withRouter(Section);
