import React from "react";
import { observer } from "mobx-react";
import Comments from "../Comments/Comments";
import Form from "../Form/Form";
import styles from "../Comments/styles.module.scss";

const Comment = observer(
    class Comment extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isShow: false,
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
            // this.setState({
            //     isShow: !this.state.isShow
            // });

            this.props.store.setShowFormComment(this.props.comment.id);
        };

        renderForm = () => {
            // if (!this.state.isShow) {
            //     return null;
            // }
            if (!this.props.comment.isShowFrom) {
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
            return (
                <li className={styles.listItem} key={this.props.comment.id}>
                    <span className={styles.listAuthor}>
                        {this.props.comment.author}
                    </span>
                    <span className={styles.listText}>
                        {this.props.comment.text}
                    </span>
                    <button
                        onClick={this.onClick}
                        className={styles.listButton}
                    >
                        Ответить
                    </button>

                    {this.renderForm()}

                    {this.props.comment.children ? (
                        <Comments
                            store={this.props.store}
                            comments={this.props.comment.children}
                        />
                    ) : null}
                </li>
            );
        }
    }
);

export default Comment;
