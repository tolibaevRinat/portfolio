import styles from './footer.module.scss';
const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.body} container`}>
        <h2>© Ринат Толыбаев</h2>
        <p>веб-разработчик, разработка сайтов</p>
      </div>
    </footer>
  );
};
export default Footer;
