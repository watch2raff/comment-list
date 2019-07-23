import React, { Fragment } from "react";
import Comment from "../Comment/Comment";
import styles from "./styles.module.scss";

const Comments = ({ store, comments = {} }) => {
    const list = Object.keys(comments).length ? comments : store.commentList;

    return (
        <Fragment>
            <ul className={styles.list}>
                {list.map(comment => {
                    return (
                        <Comment
                            key={comment.id}
                            store={store}
                            comment={comment}
                        />
                    );
                })}
            </ul>
        </Fragment>
    );
};

export default Comments;
