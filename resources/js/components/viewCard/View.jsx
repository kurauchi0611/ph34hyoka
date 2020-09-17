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
const useStyles = makeStyles({
    root: {
        maxWidth: 800
    },
    media: {
        height: 140
    }
});

export default function MediaCard({ props }) {
    const classes = useStyles();
    console.log("aiueo", props);

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://source.unsplash.com/random"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <MarkDownViewer text={props.description} isEdit={false} />
                    {/* {props.description} */}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <InertiaLink href={`post/${props.id}`}>
                    <Button size="small" color="primary">
                        続きを読む
                    </Button>
                </InertiaLink>
            </CardActions>
        </Card>
    );
}
