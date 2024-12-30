import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      Background photo by{' '}
      <a
        href="https://unsplash.com/@amhurley?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        target="_blank"
        rel="noopener noreferrer"
      >
        Alyssa Hurley
      </a>{' '}
      on{' '}
      <a
        href="https://unsplash.com/photos/white-textile-in-close-up-photography-yekIZ4ltv1o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        target="_blank"
        rel="noopener noreferrer"
      >
        Unsplash
      </a>
    </footer>
  );
};

const footerStyle = {
  textAlign: 'center',
  fontSize: '12px',
  marginTop: '2rem',
  color: 'grey'
};

export default Footer;
