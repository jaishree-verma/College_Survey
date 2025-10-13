// import { useState } from 'react';
// import styles from '../styles/Features.module.css';

// const featuresData = [
//   {
//     title: ' Instant Results',
//     description: 'Get feedback in realtime - no delays, no waiting.'
//   },
//   {
//     title: ' AI-Powered Questions',
//     description: 'Smart, adaptive surveys that respond to user input.'
//   },
//   {
//     title: ' Mobile Friendly',
//     description: 'Designed for phones, tablets, and every screen size.'
//   },
//   {
//     title: ' Privacy First',
//     description: 'Anonymous responses and secure data handling.'
//   },
//   {
//     title: ' Thoughtful Design',
//     description: 'Every detail is crafted to make users feel seen, heard, and valued.'
//   },
//   {
//     title: ' Visual Dashboards',
//     description: 'Admins get instant charts and sentiment analysis.'
//   }
// ];

// export default function Features() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleCard = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className={styles.features}>
//       <h2><u><strong>Why Choose College Survey?</strong></u></h2>
//       <div className={styles.grid}>
//         {featuresData.map((feature, index) => (
//           <div
//             key={index}
//             className={`${styles.card} ${activeIndex === index ? styles.active : ''}`}
//             onClick={() => toggleCard(index)}
//           >
//             <h3><u><strong>{feature.title}</strong></u></h3>
//             <div className={styles.description}>
//               <p>{feature.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import { useState } from 'react';
import styles from '../styles/Features.module.css';

const featuresData = [
  {
    title: 'Instant Results',
    description: 'Get feedback in realtime - no delays, no waiting.'
  },
  {
    title: 'AI-Powered Questions',
    description: 'Smart, adaptive surveys that respond to user input.'
  },
  {
    title: 'Mobile Friendly',
    description: 'Designed for phones, tablets, and every screen size.'
  },
  {
    title: 'Privacy First',
    description: 'Anonymous responses and secure data handling.'
  },
  {
    title: 'Thoughtful Design',
    description: 'Every detail is crafted to make users feel seen, heard, and valued.'
  },
  {
    title: 'Visual Dashboards',
    description: 'Admins get instant charts and sentiment analysis.'
  }
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`container ${styles.features}`} id="features-section">
      <h2 className={styles.heading}><u><strong>Why Choose College Survey?</strong></u></h2>
      <div className={styles.grid}>
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className={`${styles.card} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => toggleCard(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleCard(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`feature-desc-${index}`}
          >
            <h3><u><strong>{feature.title}</strong></u></h3>
            <div className={styles.description} id={`feature-desc-${index}`}>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
