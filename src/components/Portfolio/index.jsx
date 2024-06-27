import styles from './portfolio.module.scss';
const Portfolio = () => {
  const items = [
    {
      img: {
        jpg: 'port-01.jpg',
        jpg2x: 'port-01@2x.jpg',
        webp: 'port-01.webp',
        webp2x: 'port-01@2x.webp',
      },
      subtitle: 'Сайт об экскурсий',
      to: 'https://gereytuz.netlify.app',
    },
    {
      img: {
        jpg: 'port-02.jpg',
        jpg2x: 'port-02@2x.jpg',
        webp: 'port-02.webp',
        webp2x: 'port-02@2x.webp',
      },
      subtitle: 'Сайт магазина рыб',
      to: 'https://fish14.netlify.app',
    },
    {
      img: {
        jpg: 'port-03.jpg',
        jpg2x: 'port-03@2x.jpg',
        webp: 'port-03.webp',
        webp2x: 'port-03@2x.webp',
      },
      subtitle: 'Сайт магазина пицц',
      to: 'https://rinatspizzas.netlify.app',
    },
  ];
  return (
    <section className={`${styles.portfolio}`} id="portfolio">
      <div className={`${styles.body} container`}>
        <h2 className={`${styles.title}`}>Портфолио</h2>
        <ul className={`${styles.list} flex f-d-col`}>
          {items.map((item, index) => (
            <li key={index}>
              <article>
                <a className={`${styles.item}`} href={item.to} target="_blank">
                  <div className={`${styles.img} _ibg`}>
                    <picture>
                      <source
                        srcSet={`${item.img.webp} 1x, ${item.img.webp2x} 2x`}
                        type="image/webp"
                      />
                      <source
                        srcSet={`${item.img.jpg} 1x, ${item.img.jpg2x} 2x`}
                        type="image/jpeg"
                      />
                      <img src={`${item.img.jpg} 1x`} srcSet={`${item.img.jpg2x} 1x`} alt="сайт" />
                    </picture>
                  </div>
                  <h3 className={`${styles.subtitle}`}>{item.subtitle}</h3>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
