import { observable, action, decorate } from "mobx";
import comments from "../Resources/data";

class CommentStore {
    commentList = comments;
    name = "sdfsdf";
    comment = "";

    setName(text) {
        this.name = text;
    }

    setComment(text) {
        this.comment = text;
    }

    setShowFormComment(id) {}
}

export default decorate(CommentStore, {
    name: observable,
    comment: observable,
    commentList: observable,
    setName: action,
    setComment: action
});
