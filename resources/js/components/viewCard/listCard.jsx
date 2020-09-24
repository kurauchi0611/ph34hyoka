import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import format from "date-fns/format";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
    root: {
        maxWidth: 800
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginLeft: 8
    },
    flexBox: {
        display: "flex",
        paddingTop: "16px",
        alignItems: "center"
        // paddingLeft: "8px",
        // background: "#fff"
    },
    link: {
        textDecoration: "none",
        paddingLeft: "8px"
    }
});

export default function ListCard({ post }) {
    const classes = useStyles();
    console.log(post);
    return (
        <InertiaLink href={`/post/${post.id}`} className={classes.link}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="p">
                        {post.title}
                    </Typography>
                    <div className={classes.flexBox}>
                        <Typography variant="subtitle1" component="p">
                            {format(
                                new Date(post.created_at),
                                "yyyy年MM月dd日HH時mm分投稿"
                            )}
                        </Typography>
                        {/* <InertiaLink
                            href={`/category/${post.id_Category}`}
                            className={classes.link}
                        > */}
                            <Chip
                                label={post.name}
                                color="primary"
                                // clickable
                                size="small"
                                variant="outlined"
                                className={classes.pos}
                            />
                        {/* </InertiaLink> */}
                    </div>
                </CardContent>
            </Card>
        </InertiaLink>
    );
}
