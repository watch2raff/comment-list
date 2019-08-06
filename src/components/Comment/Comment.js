import React from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import Comments from "../Comments/Comments";
import Form from "../Form/Form";
import styles from "../Comments/styles.module.scss";

const Comment = observer(
    class Comment extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: "",
                comment: ""
            };
        }

        onChangeInput = e => {
            this.setState({
                name: e.target.value
            });
        };

        onChangeComment = e => {
            this.setState({
                comment: e.target.value
            });
        };

        onClick = () => {
            this.props.store.setIsOpenFrom(this.props.comment.id);
        };

        renderForm = () => {
            const { isOpen } = this.props.comment;

            if (!isOpen) {
                return null;
            }

            return (
                <Form
                    state={this.state}
                    onChangeComment={this.onChangeComment}
                    onChangeInput={this.onChangeInput}
                />
            );
        };

        render() {
            const { id, author, text, children } = this.props.comment;

            return (
                <li className={styles.listItem} key={id}>
                    <span className={styles.listAuthor}>{author}</span>
                    <span className={styles.listText}>{text}</span>
                    <button
                        onClick={this.onClick}
                        className={styles.listButton}
                    >
                        Ответить
                    </button>

                    {this.renderForm()}

                    {children ? (
                        <Comments
                            store={this.props.store}
                            comments={children}
                        />
                    ) : null}
                </li>
            );
        }
    }
);

Comment.propTypes = {
    store: PropTypes.object,
    comment: PropTypes.object
};

export default Comment;
