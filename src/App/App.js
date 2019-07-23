import React from "react";
import { observer } from "mobx-react";
import Comments from "../components/Comments/Comments";
import Form from "../components/Form/Form";
import CommentStore from "../stores/CommentStore";
import styles from "./App.module.scss";

const store = new CommentStore();

const App = observer(
    class App extends React.Component {
        render() {
            return (
                <div className={styles.App}>
                    <p>Комментарии ( количество комментов)</p>
                    <Comments store={store} />
                </div>
            );
        }
    }
);

export default App;
