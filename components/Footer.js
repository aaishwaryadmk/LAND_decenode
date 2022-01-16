const Footer = () => {
  return (
    <footer className="text-center">
      <div className="container py-2">
        <h5 className="fw-bold">Follow Us And Join Our Community!</h5>
        <section>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://twitter.com/decenode"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.instagram.com/decenode/"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.linkedin.com/company/decenode/"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://discord.com/invite/b4nRGTjYqy"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-discord"></i>
          </a>
        </section>
      </div>
      <p className="text-muted">Copyright DeceNode 2022</p>
    </footer>
  );
};

export default Footer;
