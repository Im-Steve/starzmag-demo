import './cover.css';

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import authorsBookImg from '../../../assets/cover/cover-authors-book.jpg';
import authorsTitleImg from '../../../assets/cover/cover-authors-title.svg';
import authorsTitleCenteredImg from '../../../assets/cover/cover-authors-title-centered.svg';
import interviewsTitleImg from '../../../assets/cover/cover-interviews-title.svg';
import topscoversTitleImg from '../../../assets/cover/cover-topscovers-title.svg';
import arrowUpIcon from '../../../assets/icons/arrow-up-gold.svg';
import logoImg from '../../../assets/logos/starzmag2.svg';
import authorsGirlGif from '../../../assets/panels/panel-author-bg.gif';
import topscoversBandGif from '../../../assets/panels/panel-topcovers-bg.gif';
import isMobile from '../../../lib/isMobile';

function Cover() {
  return (
    <LazyLoadComponent>
      <div className="cover-container">
        <div className="cover-background">
          <div className="cover-title">
            <img src={logoImg} />
          </div>
          <div className="cover-content">
            <div className="cover-content-interviews">
              <img src={interviewsTitleImg} />
            </div>
            <div className="cover-content-authors">
              <img src={authorsTitleImg} />
              <img src={authorsTitleCenteredImg} />
              <div>
                <img src={authorsGirlGif} />
              </div>
              <img src={authorsBookImg} />
            </div>
            <div className="cover-content-topscovers">
              <img src={topscoversTitleImg} />
              <div>
                <img src={topscoversBandGif} />
              </div>
            </div>
          </div>
          <div className="cover-footer">
            <img src={arrowUpIcon} />
            <p>
              {
                isMobile
                  ? <FormattedMessage id="pressToOpen" />
                  : <FormattedMessage id="clickToOpen" />
              }
            </p>
          </div>
        </div>
      </div>
    </LazyLoadComponent>
  );
}

export default Cover;
