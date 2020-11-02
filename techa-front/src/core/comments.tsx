import React from "react";
import { Posts } from '../types/posts.type';

export const Comments = ({ comments }: Posts) => {
const commentse = [{comment: 'heheh'}, {comment: 'heheh'}, {comment: 'heheh'}, ]

  return (
    <div className="comments">
        <div>Comments ({commentse.length})</div>
    </div>
  );
};

export default Comments;
