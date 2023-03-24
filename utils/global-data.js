export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Joseph Tyler Thomas';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'All of my thoughts, memes I find, and other things. (Conveniently Placed Here!)';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All thoughts reserved.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
