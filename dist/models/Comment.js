/**
 * Created by dannyyassine on 2016-11-22.
 */
"use strict";
var Comment = (function () {
    function Comment(commentJson) {
        Object.assign(this, commentJson);
    }
    return Comment;
}());
exports.Comment = Comment;
