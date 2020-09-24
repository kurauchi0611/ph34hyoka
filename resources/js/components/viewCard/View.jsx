import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { MarkDownViewer } from "../posting/MarkDownViewer";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import Chip from "@material-ui/core/Chip";
import format from "date-fns/format";

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
    }
});

export default function MediaCard({ props }) {
    const classes = useStyles();
    // console.log("aiueo", props);

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image="https://source.unsplash.com/random"
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="p">
                    {props.title}
                </Typography>
                <MarkDownViewer text={props.description} isEdit={false} />
                {/* {props.description} */}
            </CardContent>
            <CardActions className={classes.cardActions}>
                <InertiaLink
                    href={`/category/${props.id_Category}`}
                    className={classes.link}
                >
                    <Chip
                        label={props.name}
                        color="primary"
                        clickable
                        size="small"
                        variant="outlined"
                    />
                </InertiaLink>
                <p>
                    {format(
                        new Date(props.created_at),
                        "yyyy年MM月dd日HH時mm分投稿"
                    )}
                </p>
                <InertiaLink href={`/post/${props.id}`} className={classes.link}>
                    <Button size="small" color="primary">
                        続きを読む
                    </Button>
                </InertiaLink>
            </CardActions>
        </Card>
    );
}
