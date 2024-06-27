import styles from './preloader.module.scss';
export const Preloader = () => {
  return (
    <section className={`${styles.preloader}`}>
      <picture>
        <source srcSet="preloader.webp" type="image/webp" />
        <img src="preloader.gif" alt="preloader" />
      </picture>
    </section>
  );
};
