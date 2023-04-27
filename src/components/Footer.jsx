import '../static/css/Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        This site is created by{' '}
        <a
          className="footer-link"
          href="https://github.com/hellomomiji"
          target="_blank"
          rel="noreferrer"
        >
          <span>Yang</span>
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
