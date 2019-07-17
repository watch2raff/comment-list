import React from "react";
import styles from "./App.module.scss";

const commentsArr = [
    {
        id: "1",
        author: "Connor Leech",
        text: "comment from the array",
        children: [
            {
                id: "11",
                author: "Lorem ipsum",
                text:
                    "Curabitur id posuere nisi. Aliquam malesuada nibh quis velit facilisis, vel auctor lectus blandit. Quisque mi ipsum, tincidunt quis lorem quis, tristique consectetur purus.",
                children: [
                    {
                        id: "111",
                        author: "Lorem ipsum",
                        text:
                            "Curabitur id posuere nisi. Aliquam malesuada nibh quis velit facilisis, vel auctor lectus blandit. Quisque mi ipsum, tincidunt quis lorem quis, tristique consectetur purus."
                    }
                ]
            }
        ]
    },
    { id: "2", author: "Long John Silver", text: "arrrrrrr" },
    { id: "3", author: "Golf Father", text: "Unexpected token" },
    {
        id: "4",
        author: "Long John Silver",
        text: "Parsing error: ",
        children: [
            {
                id: "41",
                author: "Quisque ",
                text:
                    "Curabitur id posuere nisi. Aliquam malesuada nibh quis velit facilisis, vel auctor lectus blandit. Quisque mi ipsum, tincidunt quis lorem quis, tristique consectetur purus."
            }
        ]
    }
];

class Comment extends React.Component {
    render() {
        const comment = this.props.comment;
        return (
            <li className={styles.listItem} key={comment.id}>
                <span className={styles.listAuthor}>{comment.author}</span>
                <span className={styles.listText}>{comment.text}</span>
                {comment.children ? (
                    <Comments comments={comment.children} />
                ) : null}
            </li>
        );
    }
}

class Comments extends React.Component {
    render() {
        return (
            <ul className={styles.list}>
                {this.props.comments.map(comment => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
            </ul>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div className={styles.App}>
                <p>Комментарии ( количество комментов)</p>
                <Comments comments={commentsArr} />
            </div>
        );
    }
}

export default App;
