import { observable, action, decorate } from "mobx";
import comments from "../Resources/data";

const storeHelper = {
    enumerationOfComments(id, commentList) {
        const recurse = (id, comments) => {
            for (let i = 0; i < comments.length; i++) {
                const comment = comments[i];
                comment.isOpen = comment.id === id ? !comment.isOpen : false;
                comment.children &&
                    comment.children.length &&
                    recurse(id, comment.children);
            }

            return comments;
        };

        return recurse(id, commentList);
    }
};

class CommentStore {
    commentList = comments;
    name = "sdfsdf";
    comment = "";
    isOpen = false;

    setName(text) {
        this.name = text;
    }

    setComment(text) {
        this.comment = text;
    }

    setIsOpenFrom(id) {
        this.commentList = storeHelper.enumerationOfComments(
            id,
            this.commentList
        );
    }
}

export default decorate(CommentStore, {
    name: observable,
    comment: observable,
    commentList: observable,
    isOpen: observable,
    setName: action,
    setComment: action,
    setIsOpenFrom: action
});
