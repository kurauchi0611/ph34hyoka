import React from "react";
import Layout from "../components/Layout";

const Index = props => {
    let foo = "React";
    const bar = "JavaScript";
    // console.log(props);
    return (
        <h1>
            Top
        </h1>
    );
};

Index.layout = page => <Layout children={page}></Layout>;

export default Index;
