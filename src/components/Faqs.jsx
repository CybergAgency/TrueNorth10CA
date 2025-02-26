import  shape2Img from "../images/shape2.png";


const faqItems = [
  {
    question: "01. How do I start playing casino games?",
    answer:
      "Register an account, make a deposit, and select your preferred game to start playing.",
  },
  {
    question: "02. Can I play free casino games?",
    answer: "Yes, many casinos offer free demo versions of the games.",
  },
  {
    question: "03. Is it safe to play casino games?",
    answer:
      "Yes, when you play on licensed and regulated casino platforms, your information and funds are secure.",
  },
  {
    question: "04. How can I claim bonuses or free spins?",
    answer:
      "Claim bonuses by logging into your account and using promotion codes or following campaign terms.",
  },
  {
    question: "05. What is the difference between table games and slot games?",
    answer:
      "Live casino games are played in real-time with real dealers, while regular games use computer-generated graphics.",
  },
  {
    question: "06. Can I participate in casino game tournaments?",
    answer:
      "Yes, many casinos offer tournaments where you can compete against other players for big prizes.",
  },
];
const Faqs = () => {
  return (
    <>
      <section className="faq_area">
        <div className="container">
          <div className="section-title">
            <h2>
              Frequently Asked
              <br /> Questions
            </h2>
            <p>
              The casino is a place where certain gambling games are conducted.
              Casinos are often connected with hotels and resorts.
            </p>
          </div>
          <div className="faq_cnt_wrapper">
            <div className="faq-section">
              {faqItems.slice(0, 3).map(({ question, answer }, index) => (
                <div key={index} className="faq-item">
                  <input type="checkbox" id={`question-${index}-a`} />
                  <label htmlFor={`question-${index}-a`}>{question}</label>
                  <div className="answer">
                    <p>{answer}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="faq-section">
              {faqItems.slice(3).map(({ question, answer }, index) => (
                <div key={index} className="faq-item">
                  <input type="checkbox" id={`question-${index}-b`} />
                  <label htmlFor={`question-${index}-b`}>{question}</label>
                  <div className="answer">
                    <p>{answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="shape-3">
          <img src={shape2Img} alt="shape" />
        </div>
      </section>
    </>
  );
};

export default Faqs;
