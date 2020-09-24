import { Box, Typography } from "@material-ui/core";
import React from "react";
import Layout from "../components/Layout";
import ListCard from "../components/viewCard/listCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        maxWidth: 800,
        marginBottom: "80px"
    },
    media: {
        height: 140
    },
    link: {
        textDecoration: "none"
    },
    cardActions: {
        justifyContent: "flex-end"
    },
    marginTop: {
        marginTop: 16
    }
});

const Index = props => {
    const classes = useStyles();
    let foo = "React";
    const bar = "JavaScript";
    console.log("post", props);
    return (
        <Box className={classes.root}>
            <Typography variant="h3" content="p">
                記事一覧
            </Typography>
            {props.posts.map(post => {
                return <ListCard post={post} />;
            })}
            {props.posts.length === 0 && (
                <Typography variant="h5" content="p" className={classes.marginTop}>
                    まだ記事は無いよ！
                </Typography>
            )}
        </Box>
    );
};

Index.layout = page => <Layout children={page}></Layout>;

export default Index;
