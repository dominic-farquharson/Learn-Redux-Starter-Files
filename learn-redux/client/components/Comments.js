import React from 'react';

const Comments = React.createClass({
  renderComments(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}> 
            &times;
          </button>
        </p>
      </div>
    )
  },
  handleSubmit(e) {
    e.preventDefault();
    console.log('submitting the form')
    // ES6 destructuring
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    
    this.props.postComment(postId, author, comment);
    this.refs.commentForm.reset();
    // console.log(postId, author, comment);

  },
  render() {
    return (
      <div className="comments">
        { this.props.postComments.map(this.renderComments) }
        {/* onsubmit event handler  */}
        <form onSubmit={this.handleSubmit} ref="commentForm" className="comment-form">
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          {/* Allowing for enter key to work for submit  */}
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
});

export default Comments;