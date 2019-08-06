import React from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import styles from "./styles.module.scss";

const Form = observer(
    class Form extends React.Component {
        onChangeInput = e => {
            this.props.onChangeInput && this.props.onChangeInput(e);
        };

        onChangeComment = e => {
            this.props.onChangeComment && this.props.onChangeComment(e);
        };

        render() {
            const { name, comment } = this.props.state;

            return (
                <form>
                    <input
                        onChange={this.onChangeInput}
                        value={name}
                        name="Fio"
                        type="text"
                    />
                    <textarea
                        value={comment}
                        onChange={this.onChangeComment}
                        name="Comment"
                        type="text"
                    />
                </form>
            );
        }
    }
);

Form.propTypes = {
    state: PropTypes.object,
    onChangeComment: PropTypes.func,
    onChangeInput: PropTypes.func
};

export default Form;
