import React, { Fragment } from "react";
import PropTypes from "prop-types";
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

Comments.propTypes = {
    store: PropTypes.object,
    comments: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Comments;
