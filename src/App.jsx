import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import dashboard from "./images/dashboard.png";
import billing from "./images/billing.png";
import products from "./images/products.png";
import customers from "./images/customers.png";
import dailysales from "./images/dailysales.png";

function App() {
  const [activeImage, setActiveImage] = useState(dashboard);
  const [activeSection, setActiveSection] = useState("about");
  const fullText = "SMARTBILLS is a powerful billing and inventory system built for modern shop owners. Manage products, customers, and reports efficiently without complexity.";
const [typedText, setTypedText] = useState("");
  const [openFAQ, setOpenFAQ] = useState(null);

  const imageMap = {
    Dashboard: dashboard,
    Billing: billing,
    Products: products,
    Customers: customers,
    Reports: dailysales
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "features", "preview", "faq"];
      let current = "about";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
  let i = 0;

  const interval = setInterval(() => {
    setTypedText(fullText.slice(0, i));
    i++;

    if (i > fullText.length) {
      clearInterval(interval);
    }
  }, 20);

  return () => clearInterval(interval);
}, []);

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* NAVBAR */}
        <nav style={styles.nav}>
          <h1 style={styles.logo}>SMARTBILLS</h1>

          <div style={styles.navLinks}>
            {["about", "features", "preview", "faq"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                style={{
                  ...styles.navLink,
                  backgroundColor:
                    activeSection === item ? "#1f1f1f" : "#111",
                  color: activeSection === item ? "#fff" : "#aaa"
                }}
              >
                {item.toUpperCase()}
              </button>
            ))}

            <a
              href="https://github.com/divyarajsinh1604/grocery-app/releases/download/v1.0.0/app.exe"
              style={styles.downloadBtn}
            >
              Download
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section style={styles.hero}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={styles.heroTitle}
          >
            SMARTBILLS
          </motion.h1>

          <p style={styles.heroText}>
            Smart billing & inventory for modern shop owners.
          </p>

          <button
            style={styles.primaryBtn}
            onClick={() =>
              window.open(
                "https://github.com/divyarajsinh1604/grocery-app/releases/download/v1.0.0/app.zip"
              )
            }
          >
            Download for Windows
          </button>
        </section>

        {/* ABOUT */}
   <section id="about" style={styles.block}>
  <h2 style={{ textAlign: "center" }}>About</h2>

  <p style={styles.text}>
    {typedText}
  </p>

  <div style={styles.aboutGrid}>
    <div style={styles.aboutCard}>
      <h4>Core Features</h4>
      <p>Add, update, view, and delete grocery items with ease.</p>
    </div>

    <div style={styles.aboutCard}>
      <h4>Purpose</h4>
      <p>Designed to simplify billing and inventory for shop owners.</p>
    </div>

      <div style={styles.aboutCard}>
      <h4>Tech Stack</h4>
      <p>Built using Flask, SQLite, and structured backend logic.</p>
    </div>
  </div>
</section>

        {/* FEATURES */}
        <section id="features" style={styles.block}>
          <h2>Features</h2>
          <div style={styles.grid}>
            {[
              "Inventory Management",
              "Billing System",
              "Customer Tracking",
              "Reports",
              "Analytics"
            ].map((item, i) => (
              <div key={i} style={styles.card}>
                <h3>{item}</h3>
                <p>Built for speed and simplicity.</p>
              </div>
            ))}
          </div>
        </section>

        {/* PREVIEW */}
        <section id="preview" style={styles.block}>
          <h2>Preview</h2>

          <div style={styles.previewTabs}>
            {Object.keys(imageMap).map((key) => (
              <button
                key={key}
                onClick={() => setActiveImage(imageMap[key])}
                style={styles.previewTab}
              >
                {key}
              </button>
            ))}
          </div>

          <div style={styles.previewBox}>
            <img src={activeImage} style={styles.previewImage} />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={styles.block}>
          <h2>FAQ</h2>

          {[
            {
              q: "Is it completely offline?",
              a: "Yes. No internet required."
            },
            {
              q: "Which OS supported?",
              a: "Windows 10 & 11"
            },
            {
              q: "Is it for small shops?",
              a: "Built exactly for them."
            }
          ].map((item, i) => (
            <div key={i} style={styles.faqItem}>
              <div
                style={styles.faqQuestion}
                onClick={() =>
                  setOpenFAQ(openFAQ === i ? null : i)
                }
              >
                {item.q}
              </div>

              {openFAQ === i && (
                <div style={styles.faqAnswer}>{item.a}</div>
              )}
            </div>
          ))}
        </section>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <div>
            <h3>SMARTBILLS</h3>
            <p>Built by RD's</p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>jadejadivyaraj1604@gmail.com</p>
          </div>

          <div>
            <h4>Support</h4>
            <p>24/7 Assistance</p>
          </div>
        </footer>

      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#050505",
    color: "white",
    fontFamily: "sans-serif"
  },

  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 40px"
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 0",
    position: "sticky",
    top: 0,
    backgroundColor: "#050505",
    zIndex: 1000,
    borderBottom: "1px solid #111"
  },

  logo: {
    fontWeight: "bold"
  },

  navLinks: {
    display: "flex",
    gap: "10px"
  },

  navLink: {
    padding: "8px 14px",
    backgroundColor: "#111",
    border: "1px solid #222",
    borderRadius: "6px",
    cursor: "pointer"
  },

  downloadBtn: {
    padding: "8px 18px",
    backgroundColor: "#2563eb",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none"
  },

  hero: {
    textAlign: "center",
    marginTop: "120px"
  },

  heroTitle: {
    fontSize: "72px",
    fontWeight: "900"
  },

  heroText: {
    marginTop: "20px",
    color: "#aaa"
  },

  primaryBtn: {
    marginTop: "30px",
    padding: "14px 40px",
    backgroundColor: "#2563eb",
    border: "none",
    color: "white",
    cursor: "pointer",
    borderRadius: "6px"
  },

  block: {
    marginTop: "120px",
    padding: "60px",
    border: "1px solid #111",
    borderRadius: "12px",
    backgroundColor: "#0a0a0a"
  },

 text: {
  color: "#aaa",
  maxWidth: "750px",
  margin: "20px auto 0 auto", // 🔥 THIS CENTERS IT
  textAlign: "center",
  lineHeight: "1.7"
},

  grid: {
    marginTop: "30px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px"
  },

  card: {
    padding: "30px",
    border: "1px solid #222",
    borderRadius: "10px",
    backgroundColor: "#080808"
  },

  previewTabs: {
    marginTop: "20px",
    display: "flex",
    gap: "10px"
  },
  aboutExtra: {
  marginTop: "25px",
  display: "flex",
  flexDirection: "column",
  gap: "10px"
},

aboutItem: {
  color: "#848484",
  fontSize: "15px"
},
aboutGrid: {
  marginTop: "40px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px"
},

aboutCard: {
  padding: "25px",
  border: "1px solid #222",
  borderRadius: "10px",
  backgroundColor: "#080808",
  textAlign: "center"
},

  previewTab: {
    padding: "8px 16px",
    backgroundColor: "#111",
    border: "1px solid #222",
    color: "white",
    cursor: "pointer"
  },

  previewBox: {
    marginTop: "30px",
    border: "1px solid #222",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "#000"
  },

  previewImage: {
    width: "100%"
  },

  faqItem: {
    marginTop: "20px",
    borderBottom: "1px solid #222",
    paddingBottom: "10px"
  },

  faqQuestion: {
    cursor: "pointer",
    fontWeight: "bold"
  },

  faqAnswer: {
    marginTop: "10px",
    color: "#aaa"
  },

  footer: {
    marginTop: "120px",
    display: "flex",
    justifyContent: "space-between",
    padding: "40px 0",
    borderTop: "1px solid #111"
  }
};

export default App;