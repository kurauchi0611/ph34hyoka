import React from "react";
import Layout from "../components/Layout";
import {
    Box,
    Button,
    Container,
    CssBaseline,
    Snackbar,
    TextField
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import { MarkDownEditor } from "../components/posting/MarkDownEditor";
import { MarkDownViewer } from "../components/posting/MarkDownViewer";
// import { Tags } from "../../components/mdEditor/Tags";
import { SendButton } from "../components/posting/sendButton";
// import { questionDB } from "../../firebase/questions";
// import { useRouter } from "next/router";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import Axios from "axios";
import { Inertia } from '@inertiajs/inertia'

const useStyles = makeStyles(theme =>
    createStyles({
        margin: {
            overflow: "hidden",
            // marginTop: theme.spacing(10),
            paddingBottom: theme.spacing(5),
            marginBottom: theme.spacing(5),
            height: `calc(100vh - ${theme.spacing(10)}px)`
        },
        title: { background: "#fff", marginBottom: theme.spacing(2) },
        error: {
            background: theme.palette.buttonCancel.main
        },
        border: {
            border: "1px solid #c8ccd0",
            borderRadius: "5px",
            marginLeft: theme.spacing(4),
            overflow: "hidden",
            height: "100%"
        },
        height: {
            height: "85%"
            // paddingRight: theme.spacing(10),
            // paddingLeft: theme.spacing(10),
        },
        height2: {
            height: "100%"
            // paddingRight: theme.spacing(10),
            // paddingLeft: theme.spacing(10),
        },
        rightWrap: {
            display: "flex",
            flexFlow: "column"
        },
        setFlex: {
            flex: "1 1 100%"
        },
        wrapBox: {
            height: "105%",
            background: "#fff",
            paddingTop: theme.spacing(3),
            paddingRight: theme.spacing(3),
            paddingLeft: theme.spacing(3)
            // marginLeft: theme.spacing(5),
            // marginRight: theme.spacing(5)
        }
    })
);

const Index = ({ props }) => {
    const classes = useStyles();
    // const router = useRouter();
    const sampleMoji =
        `# 今日の倉内\nこんにちはみなさん。お元気ですか？\n私は元気です。\n<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n<p style="color:#ff8600;font-weight:bold;font-size:30px">それではまた明日。</p>`;

    const [error, setError] = React.useState();
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({
        title: "",
        // tags: [],
        description: sampleMoji,
        isPost: 0,
        id_Category:2
        // userData: props
    });
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = name => event => {
        if (name === "description") {
            setState({
                ...state,
                [name]: event
            });
        } else if (name === "tags") {
            const tagsArray = [];
            event.forEach(item => {
                tagsArray.push(item.lang);
            });
            setState({
                ...state,
                [name]: tagsArray
            });
            console.log(tagsArray);
        } else if (name === "isPost") {
            setState({
                ...state,
                [name]: event
            });
        } else if (name === "title") {
            setState({
                ...state,
                [name]: event.target.value
            });
        }
    };
    const post=()=>{
      console.log(state);
      Inertia.post("api/store", state, {
        replace: true,
        preserveState: true,
        preserveScroll: false,
        only: [],
        headers: {},
      })
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" className={classes.margin}>
                <Box className={classes.wrapBox}>
                    <Grid
                        container
                        direction="row"
                        // alignContent="stretch"
                        className={classes.height}
                    >
                        <Grid item xs={6} className={classes.rightWrap}>
                            <TextField
                                className={classes.title}
                                fullWidth={true}
                                onChange={handleChange("title")}
                                label="タイトル"
                                variant="outlined"
                                value={state.title}
                            />
                            {/* <Tags handleChange={handleChange("tags")} tags={state.tags} /> */}
                            <Box mt={2} className={classes.setFlex}>
                                <MarkDownEditor
                                    handleChange={handleChange("description")}
                                    text={state.description}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6} className={classes.height2}>
                            <Box className={classes.border}>
                                <MarkDownViewer
                                    text={state.description}
                                    isEdit={true}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box m={3}>
                                <SendButton
                                    handleChange={handleChange("index")}
                                    selectedIndex={state.isPost}
                                    onClick={post}
                                    label={"記事"}
                                />
                                {/* <Button variant="contained" color="primary">
                                    Primary
                                </Button> */}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Snackbar autoHideDuration={2000} open={open} onClose={handleClose}>
                {error}
            </Snackbar>
        </React.Fragment>
    );
};

Index.layout = page => <Layout children={page}></Layout>;

export default Index;
