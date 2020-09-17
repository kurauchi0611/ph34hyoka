import React from "react";
import Layout from "../components/Layout";

const Index = props => {
    let foo = "React";
    const bar = "JavaScript";
    console.log("post",props);
    return (
        <h1>
            記事一覧
        </h1>
    );
};

Index.layout = page => <Layout children={page}></Layout>;

export default Index;
