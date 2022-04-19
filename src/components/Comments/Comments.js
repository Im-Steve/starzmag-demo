import './comments.css';

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import closeIcon from '../../assets/icons/close-chocolate.svg';
import userIcon from '../../assets/icons/user-white.svg';
import messages from '../../lib/i18n/fr';

const propTypes = {
  articleName: PropTypes.string.isRequired,
  comments: PropTypes.shape.isRequired,
  excerpt: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onclose: PropTypes.func.isRequired,
};

function Comments({
  articleName,
  comments,
  excerpt,
  isOpen,
  onclose,
}) {
  const [prevIsOpen, setPrevIsOpen] = useState(false);

  if (isOpen && !prevIsOpen) {
    document.body.style.overflowY = 'hidden';
    setPrevIsOpen(true);
  } else if (!isOpen && prevIsOpen) {
    document.body.style.overflowY = 'scroll';
    setPrevIsOpen(false);
  }

  return (
    <>
      <div
        className={`page-overlay ${isOpen ? 'page-overlay-visible' : ''}`}
        onClick={onclose}
      />

      <div className={`comments ${isOpen ? 'comments-open' : ''}`}>
        <p className="comments-header"><FormattedMessage id="comments" /></p>
        <img
          src={closeIcon}
          className="comments-close"
          onClick={() => onclose()}
        />

        <div className="comments-excerpt-div">
          <p className="comments-excerpt">{excerpt}</p>
          <p className="comments-article-name">{`- ${articleName}`}</p>
        </div>

        <div className="comments-input">
          <img src={userIcon} />
          <textarea
            className="comments-textarea"
            disabled
            placeholder={messages.needToBeLoggedInToComment}
          />
        </div>
        <div className="comments-publish-div">
          <p className="comments-publish-button"><FormattedMessage id="publish" /></p>
        </div>

        {isOpen && comments && comments.map((comment) => (
          <div className="comment">
            <img src={comment.avatar || userIcon} className="comment-avatar" />
            <div>
              <p className="comment-pseudo">{comment.pseudo}</p>
              <p className="comment-date">{comment.date}</p>
              <p className="comment-comment">{comment.comment}</p>

              <p className="see-replies">
                {comment.replies ? (
                  <>
                    {comment.replies.length === 0 && <FormattedMessage id="toReply" />}
                    {comment.replies.length > 0 && `${comment.replies.length} `}
                    {comment.replies.length === 1 && <FormattedMessage id="reply" />}
                    {comment.replies.length > 1 && <FormattedMessage id="replies" />}
                  </>
                ) : <FormattedMessage id="toReply" />}
              </p>

              {comment.replies && comment.replies.map((reply) => (
                <div className="reply">
                  <img src={reply.avatar || userIcon} className="comment-avatar" />
                  <div>
                    <p className="comment-pseudo">{reply.pseudo}</p>
                    <p className="comment-date">{reply.date}</p>
                    <p className="comment-comment">{reply.comment}</p>
                  </div>
                </div>
              ))}

              <div className="reply">
                <img src={userIcon} className="comment-avatar" />
                <textarea
                  className="comments-textarea"
                  disabled
                  placeholder={messages.needToBeLoggedInToComment}
                />
              </div>
              <div className="comments-publish-div">
                <p className="comments-publish-button"><FormattedMessage id="publish" /></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

Comments.propTypes = propTypes;

export default Comments;
