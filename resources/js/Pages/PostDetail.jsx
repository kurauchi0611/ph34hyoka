import { Typography, Chip, Divider } from "@material-ui/core";
import React from "react";
import Layout from "../components/Layout";
import { MarkDownViewer } from "../components/posting/MarkDownViewer";
import format from "date-fns/format";
import { makeStyles } from "@material-ui/core/styles";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: "80px"
    },
    box: {
        // display:"flex",
        paddingTop: "16px",
        paddingLeft: "8px",
        background: "#fff"
    },
    flexBox: {
        display: "flex",
        paddingTop: "16px",
        alignItems: "center"
        // paddingLeft: "8px",
        // background: "#fff"
    },
    link: {
        paddingLeft: "8px",
        textDecoration: "none"
    }
}));

const Index = props => {
    const classes = useStyles();
    console.log("post", props);
    const post = props.posts[0];
    return (
        <div className={classes.root}>
            <div className={classes.box}>
                <Typography variant="h4" component="p">
                    {post.title}
                </Typography>
                <div className={classes.flexBox}>
                    <Typography variant="subtitle1" component="p">
                        {format(
                            new Date(post.created_at),
                            "yyyy年MM月dd日HH時mm分投稿"
                        )}
                    </Typography>
                    <InertiaLink
                        href={`/category/${post.id_Category}`}
                        className={classes.link}
                    >
                        <Chip
                            label={post.name}
                            color="primary"
                            clickable
                            size="small"
                            variant="outlined"
                        />
                    </InertiaLink>
                </div>
            </div>
            <Divider />
            <MarkDownViewer text={post.description} isEdit={false} />
        </div>
    );
};

Index.layout = page => <Layout children={page}></Layout>;

export default Index;
