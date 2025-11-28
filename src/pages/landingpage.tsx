import "./landingpage.css";
import Navbar from "../components/navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-bg" />
        <h1>Pioneering the Future of Web3</h1>
        <p>
          NextEpoch Labs is an innovation studio building the foundational
          technologies and applications that will define the next era of the
          decentralized web.
        </p>
        <button className="hero-btn">Explore Our Work</button>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>About NextEpoch Labs</h2>
        <p>
          We are a team of researchers, engineers, and designers passionate about
          decentralized systems. We build scalable, user-focused Web3 solutions
          and work with founders and enterprises to turn complex ideas into
          impactful decentralized products.
        </p>
      </section>

      {/* WHAT WE BUILD */}
      <section className="build">
        <h2>What We Build</h2>
        <p>
          Our focus is on building foundational layers and innovative
          applications that empower the next generation of the internet.
        </p>

        <div className="build-cards">
          <div className="build-card">
            <div className="icon-placeholder" />
            <h3>Decentralized Protocols</h3>
            <p>
              Crafting robust and secure blockchain protocols that serve as the
              backbone for future decentralized applications.
            </p>
          </div>

          <div className="build-card">
            <div className="icon-placeholder" />
            <h3>DeFi & NFT Platforms</h3>
            <p>
              Developing innovative financial tools and unique digital asset
              marketplaces that redefine ownership and value.
            </p>
          </div>

          <div className="build-card">
            <div className="icon-placeholder" />
            <h3>Metaverse & Identity</h3>
            <p>
              Building immersive virtual environments and secure digital identity
              solutions for the next evolution of human interaction.
            </p>
          </div>
        </div>
      </section>

            {/* PRODUCT HIGHLIGHTS */}
      <section className="highlights">
        <h2>Product Highlights</h2>
        <p>
          A glimpse into some of the groundbreaking projects and solutions we've
          been developing.
        </p>

        <div className="highlight-cards">
          <div className="highlight-card">
            <img src="/suiwall.png" alt="SuiWall" />
            <h3>SuiWall Swap</h3>
            <p>
              Learn how SuiWall leverages next-gen blockchain to deliver fast &
              secure digital asset swaps.
            </p>
            <a>Learn More →</a>
          </div>

          <div className="highlight-card">
            <img src="/medlock.png" alt="MedLock" />
            <h3>Med Lock</h3>
            <p>
              A digital health innovation built to streamline patient identity
              and data interaction.
            </p>
            <a>Learn More →</a>
          </div>

          <div className="highlight-card">
            <img src="/backstage.png" alt="Backstage" />
            <h3>Backstage</h3>
            <p>
              A creator-focused app that connects digital creators and brands
              through decentralized identity.
            </p>
            <a>Learn More →</a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="choose-us">
        <h2>Why Choose NextEpoch Labs?</h2>
        <p>
          Partner with us to leverage unparalleled expertise and a commitment to
          innovation.
        </p>

        <div className="choose-grid">
          <div className="choose-item">
            <div className="choose-icon" />
            <h4>Expert Team</h4>
            <p>
              Experienced engineers & researchers with deep knowledge of
              decentralized systems.
            </p>
          </div>

          <div className="choose-item">
            <div className="choose-icon" />
            <h4>Future-Proof Solutions</h4>
            <p>
              Scalable and secure systems designed for tomorrow’s digital
              landscape.
            </p>
          </div>

          <div className="choose-item">
            <div className="choose-icon" />
            <h4>Transparent & Secure</h4>
            <p>
              Commitment to open development, rigorous security audits, and
              clarity in all our projects.
            </p>
          </div>

          <div className="choose-item">
            <div className="choose-icon" />
            <h4>Collaborative Partnership</h4>
            <p>
              We work closely with clients, ensuring seamless interaction and
              shared success.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Ready to Build the Future with Us?</h2>
        <button className="cta-btn">Get in Touch</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 NextEpoch Labs — All Rights Reserved.</p>
        <div className="footer-links">
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
        </div>
      </footer>

    </>
  );
}
