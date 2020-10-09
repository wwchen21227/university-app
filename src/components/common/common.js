import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';

export const BasicImage = ({ url, alt }) => <img src={url} alt={alt} />;

BasicImage.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

const getLinkNewTabAttrs = (openNewTab) => {
  return openNewTab
    ? {
        target: '_blank',
        rel: 'noreferrer'
      }
    : {};
};

export const BasicLink = ({ className, url, text, openNewTab }) => (
  <a className={className} href={url} {...getLinkNewTabAttrs(openNewTab)}>
    {text}
  </a>
);

BasicLink.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  openNewTab: PropTypes.bool
};

BasicLink.defaultProps = {
  className: '',
  openNewTab: false
};

export const NoResult = ({
  message = 'No result found.',
  height = 'auto',
  showIcon = true
}) => (
  <div className="no-result no-result--w-bg" style={{ height }}>
    <div className="no-result-body">
      {showIcon && <FontAwesomeIcon className="icon" icon={faSadCry} />}
      <p className="no-result-message">{message}</p>
    </div>
  </div>
);

NoResult.propTypes = {
  message: PropTypes.string,
  height: PropTypes.string,
  showIcon: PropTypes.bool
};

NoResult.defaultProps = {
  message: 'No result found.',
  height: 'auto',
  showIcon: true
};

export const WithLoading = ({ isLoading, children }) => (
  <>{isLoading ? <span>Loading...</span> : children}</>
);

WithLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
