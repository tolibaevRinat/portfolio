import styles from './header.module.scss';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const isSmallMobile = useMediaQuery({ minWidth: 479.98 });
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.body} container`}>
        <div className={`${styles.img} _ibg`}>
          <picture>
            <source srcSet="hero.webp 1x, hero@2x.webp 2x" type="image/webp" />
            <source srcSet="hero.jpg 1x, hero@2x.jpg 2x" type="image/jpeg" />
            <img src="hero.jpg" srcSet="hero@2x.jpg 2x" alt="Компьютеры" />
          </picture>
        </div>
        <div className={`${styles.content}`}>
          <h1 className={`${styles.title}`}>Ринат Толыбаев</h1>
          <p className={`${styles.descr}`}>веб-разработчик, разработка сайтов</p>
          <div className={`${styles.btns} flex a-i-c gap-20`}>
            <a className={`${styles.link} f-cen`} href="#portfolio">
              Портфолио
            </a>
            <a className={`${styles.link} f-cen`} href="#contact">
              Контакты
            </a>
            <a
              className={`${styles.github} f-cen`}
              href="https://github.com/tolibaevRinat?tab=repositories"
              target="_blank"
            >
              <img src="icons/github.svg" alt="github" />
            </a>
          </div>
        </div>
      </div>
      {isSmallMobile && (
        <video className={`${styles.video}`} autoPlay muted loop>
          <source type="video/webm" src="video/02.webm" />
          <source type="video/mp4" src="video/02.mp4" />
        </video>
      )}
    </header>
  );
};
export default Header;
