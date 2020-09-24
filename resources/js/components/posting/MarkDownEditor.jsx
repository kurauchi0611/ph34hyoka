import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
// import ReactMarkdown from "react-markdown";
// import { CodeBlock } from "./codeBlock";
import ReactMde, { Suggestion, SaveImageHandler, Command } from "react-mde";

const useStyles = makeStyles(theme => ({
    wrap: {
        display: "flex",
        justifyContent: "space-between",
        height: "100%"
    },
    inner: {
        width: "100%",
        "& .mde-textarea-wrapper": {
            border: "1px solid #fff",
            outlineColor: theme.palette.primary.main,
            "&:hover": { borderColor: theme.palette.primary.main },
            "&:focus + :hover": { borderColor: "#fff" }
        },
        "& .mde-text": {
            outlineColor: theme.palette.primary.main
        }
    },
    padding: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    },
    editing: {
        height: "100%",
        display: "flex",
        flexFlow: "column",
        "& .mde-tabs": {
            display: "none"
        },
        "& .grip": {
            display: "none"
        },
        "& .mde-textarea-wrapper": {
            flex: "1 1 100%",
            "& .mde-text": {
                height: "100% !important"
            }
        }
    },
    preview: {
        border: "1px solid #c8ccd0",
        background: "#fff",
        width: "50%",
        maxHeight: "727px",
        overflowY: "auto",
        wordBreak: "break-all"
    },
    previewChar: {
        background: "#f9f9f9",
        borderBottom: "1px solid #c8ccd0",
        display: "flex",
        flexFlow: "column",
        fontSize: "20px",
        height: "45px",
        justifyContent: "center",
        paddingLeft: "18px"
    }
}));

export const MarkDownEditor = ({ handleChange, text }) => {
    const classes = useStyles();

    const customCommand = {
        name: "my-custom-command",
        icon: () => (
            <span role="img" aria-label="nice">
                🤔
            </span>
        ),
        execute: opts => {
            opts.textApi.replaceSelection("NICE");
        }
    };

    const save = async function*(data) {
        // Promise that waits for "time" milliseconds
        console.log(data);
        const wait = function(time) {
            return new Promise((a, r) => {
                setTimeout(() => a(), time);
            });
        };
        let binary = "";
        const bytes = new Uint8Array(data);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        // const base= btoa( binary );
        // let base64String = btoa(
        //     String.fromCharCode.apply(null, new Uint8Array(data))
        // );
        // Upload "data" to your server
        // Use XMLHttpRequest.send to send a FormData object containing
        // "data"
        // Check this question: https://stackoverflow.com/questions/18055422/how-to-receive-php-image-data-over-copy-n-paste-javascript-with-xmlhttprequest
        // console.log(await base);
        // yields the URL that should be inserted in the markdown
        yield `data:image/png;base64,${btoa(binary)}`;

        // returns true meaning that the save was successful
        return true;
    };
    return (
        <div className={classes.wrap}>
            <div className={classes.inner}>
                <ReactMde
                    className={classes.editing}
                    value={text}
                    onChange={handleChange}
                    paste={{
                        saveImage: save
                    }}
                />
            </div>
        </div>
    );
};
