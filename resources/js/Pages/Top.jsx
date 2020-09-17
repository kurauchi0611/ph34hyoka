import { PostAdd } from "@material-ui/icons";
import React from "react";
import Layout from "../components/Layout";
import ViewCard from "../components/viewCard/View";

const Index = props => {
    let foo = "React";
    const bar = "JavaScript";
    console.log("top", props);
    const posts = props.posts;
    console.log(posts);
    return (
        <div>
            {posts.map(post => {
                return <ViewCard props={post} />;
            })}
        </div>
    );
};

Index.layout = page => <Layout children={page}></Layout>;

export default Index;
