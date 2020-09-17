import { Typography } from "@material-ui/core";
import React from "react";
import Layout from "../components/Layout";
import { MarkDownViewer } from "../components/posting/MarkDownViewer";

const Index = props => {
    console.log("post", props);
    const [state, setState] = React.useState({
        description: ""
    });
    return (
        <div>
            <Typography variant="h5">{props.posts.title}</Typography>
            <MarkDownViewer text={props.posts.description} isEdit={false} />
        </div>
    );
};

Index.layout = page => <Layout children={page}></Layout>;

export default Index;
