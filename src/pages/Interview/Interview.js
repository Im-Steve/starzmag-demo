import './interview.css';

import React, { useState } from 'react';

import commentIcon from '../../assets/icons/comment-white.svg';
import plusIcon from '../../assets/icons/plus-white.svg';
import backgroundImg from '../../assets/interview/eliseald-bg.jpg';
import Comments from '../../components/Comments/Comments';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import interviewContents from '../../contents/interview';

function Interview() {
  const [commentsIsOpen, setCommentsIsOpen] = useState(false);
  const [commentsToShow, setCommentsToShow] = useState([]);
  const [selectedExcerpt, setSelectedExcerpt] = useState('');

  function renderCommentsIcon({ comments, excerpt, hasComments }) {
    return (
      <img
        src={hasComments ? commentIcon : plusIcon}
        className="interview-comments-icon"
        onClick={() => {
          setCommentsIsOpen(true);
          setCommentsToShow(comments);
          setSelectedExcerpt(excerpt);
        }}
      />
    );
  }

  function renderBlock(block) {
    if (block.type === 'question') {
      return (
        <div className="interview-block">
          <div>
            <p className="interview-question">{block.question}</p>
            <p>{block.reply}</p>
          </div>
          {renderCommentsIcon({
            comments: block.comments,
            excerpt: `${block.question} ${block.reply}`,
            hasComments: block.comments && block.comments.length > 0,
          })}
        </div>
      );
    }

    if (block.type === 'instagram') {
      return (
        <div className="interview-block">
          <div className="interview-instagram">
            <iframe
              title="Instagram photo embedded"
              src={`//instagram.com/p/${block.photoId}/embed`}
              width="100%"
              height="100%"
              frameBorder="0"
            />
          </div>
          {renderCommentsIcon({
            comments: block.comments,
            excerpt: 'Photo Instagram',
            hasComments: block.comments && block.comments.length > 0,
          })}
        </div>
      );
    }

    return null;
  }

  function renderSection(section) {
    if (section.type === 'columns') {
      return (
        section.columns.map((column) => (
          <div className="interview-column">
            {column.map((block) => (
              renderBlock(block)
            ))}
          </div>
        ))
      );
    }

    if (section.type === 'image-separator') {
      return (
        <img src={section.image} className="interview-photo-large" />
      );
    }

    return null;
  }

  return (
    <>
      <Navbar />
      <Comments
        isOpen={commentsIsOpen}
        articleName="Interview avec Elise Ald"
        excerpt={selectedExcerpt}
        comments={commentsToShow}
        onclose={() => setCommentsIsOpen(false)}
      />

      <img src={backgroundImg} className="interview-bg interview-bg-laptop" />
      <div className="interview-bg interview-bg-mobile" />
      <div className="interview">
        <div className="interview-header">
          <p>Interview avec</p>
          <p>Elise Ald</p>
          <div className="interview-header-video">
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/WmwY3rT_hWY"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
        <div className="interview-contents">
          {interviewContents.map((section) => renderSection(section))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Interview;
