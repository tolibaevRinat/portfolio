import styles from './contacts.module.scss';
const Contacts = () => {
  const items = [
    {
      svg: 'icons/01.svg',
      alt: 'Иконка Telegram',
      text: 'Написать в Telegram',
      to: 'https://t.me/HomoMagister',
    },
    {
      svg: 'icons/02.svg',
      alt: 'Иконка Instagram',
      text: 'Связаться в Instagram',
      to: 'https://www.instagram.com/tolibaevri/#',
    },
    {
      svg: 'icons/03.svg',
      alt: 'Иконка WhatsApp',
      text: 'Написать в WhatsApp',
      to: 'https://wa.me/998935441889',
    },
  ];
  return (
    <section className={`${styles.contacts}`} id="contact">
      <div className={`${styles.body} container`}>
        <h2 className={`${styles.title}`}>Контакты</h2>
        <ul className={`${styles.list} flex a-i-c j-c-c`}>
          {items.map((item, index) => (
            <li key={index}>
              <a className={`${styles.link} flex a-i-c`} href={item.to} target="_blank">
                <div className={`${styles.img} _ibg`}>
                  <img src={item.svg} alt={item.alt} />
                </div>
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Contacts;
