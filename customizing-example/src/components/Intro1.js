const Intro1 = (t) => {
  return (
    <div className="blog-post-intro">
      <h2 style={{ color: "blue", fontSize: "40px", fontWeight: "bold" }}>
        I've become a {t.adj} React developer!
      </h2>
      <div>
        <p>
          I've completed the React Basics course and I'm happy to announce that
          I'm now a Junior React Developer!
        </p>
        <p className="link">Read more...</p>
      </div>
    </div>
  );
};

export default Intro1;
