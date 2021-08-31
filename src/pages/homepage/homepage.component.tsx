import React from "react";

import {connect} from "react-redux";
// import {createStructuredSelector} from "reselect";

// import {selectSections} from "../../redux/section/section.selectors";

import Section from "../../components/section/section.component";

import {Sections, SectionsRow} from "./homepage.styles";
// import {AppState} from "../../redux/store";
import {AppState} from "../../redux/store";
import {ISections} from "../../redux/section/section.types";
// import {getSections} from "../../redux/section/section.action";
// import {AppState} from "../../redux/store";

function HomePage(sections:any): JSX.Element {
    const key1: ISections = sections.sections[0];
    const key2: ISections = sections.sections[1];
    const key3: ISections = sections.sections[2];
    const key4: ISections = sections.sections[3];

    return (
        <Sections>
            <SectionsRow>
                <Section key="1" {...sections} title={key1.title} linkUrl={key1.linkUrl} imageUrl={key1.imageUrl}></Section>
                <Section key="2" {...sections} title={key2.title} linkUrl={key2.linkUrl} imageUrl={key2.imageUrl}></Section>
            </SectionsRow>
            <SectionsRow>
                <Section key="3" {...sections} title={key3.title} linkUrl={key3.linkUrl} imageUrl={key3.imageUrl}></Section>
                <Section key="4" {...sections} title={key4.title} linkUrl={key4.linkUrl} imageUrl={key4.imageUrl}></Section>
            </SectionsRow>
        </Sections>
    );
}

// const mapStateToProps = createStructuredSelector({
//     sections: selectSections
// });

const mapStateToProps = (state:AppState) => ({
    sections : state.section.Sections
});

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//     getSections: () => dispatch<any>(getSections())
// });


export default connect(mapStateToProps)(HomePage);
