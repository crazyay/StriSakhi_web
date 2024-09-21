import React, { useState } from 'react';
import { data } from '../API/PregnancyData'; // Adjust the path as necessary
import styles from '../compoCSS/HealthyTeen.module.css';

const Pregnancy = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.healthyTeen}>
      {/* Teen Awareness Section */}
      <section className={styles.teenAwareness}>
        <h1>Pregnancy</h1>
        <p>Understanding your body is the first step toward good health. As a teen, you’re going through many physical, emotional, and hormonal changes. It's important to learn about how your body works, recognize what's normal, and when to seek help. Self-care, proper nutrition, and mental health awareness are key components of maintaining a healthy lifestyle. Remember, it’s okay to ask questions and seek advice when needed.</p>
      </section>

      {/* Healthy Teen Articles Section */}
      <section className={styles.articles}>
        <h2>Pregnancy</h2>
        <div className={styles.articleList}>
          {data.articles.map((article, index) => (
            <div key={index} className={styles.articleItem}>
              <img src={article.image} alt={article.title} />
              <p>{article.title}</p>
              <p>{article.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Diseases & Solutions Section */}
      <section className={styles.diseases}>
        <h2>Diseases & Solutions</h2>
        {data.diseases.map((disease, index) => (
          <div key={index} className={styles.diseaseItem}>
            <h3>Disease: {disease.disease}</h3>
            <p>Solution: {disease.solution}</p>
          </div>
        ))}
      </section>

      {/* Questions & Answers Section */}
      <section className={styles.qna}>
        <h2>Frequently asked questions</h2>
        {data.questions.map((qna, index) => (
          <div key={index} className={styles.question}>
            <div className={styles.qHeader} onClick={() => toggleQuestion(index)}>
              <span>{qna.question}</span>
              <span className={styles.sign}>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className={styles.answer}>
                {qna.answer}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Pregnancy;
