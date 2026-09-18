import { reviews, services, site } from '../content/site'

export function HomePage() {
  return (
    <>
      <section className="hero" id="about">
        <div className="hero-copy">
          <p className="eyebrow">Парикмахерская · салон красоты · ногтевая студия</p>
          <h1>{site.tagline}</h1>
          <p className="lede">{site.description}</p>
          <div className="actions"><a className="button button-primary" href={site.bookingUrl}>Записаться онлайн</a><a className="text-link" href={`tel:${site.contact.phone.replace(/[^+\d]/g, '')}`}>Позвонить</a></div>
        </div>
        <div className="hero-image"><img src={`${import.meta.env.BASE_URL}media/background.jpg`} alt="Интерьер салона Ульяна" /><span className="hero-stamp">Тула<br />Сойфера, 39</span></div>
      </section>
      <section className="proof-band"><div><strong>4,9</strong><span>рейтинг</span></div><div><strong>366</strong><span>оценок</span></div><div><strong>215</strong><span>отзывов</span></div><a href={site.mapsUrl}>Смотреть на Яндекс Картах ↗</a></section>
      <section className="section services-section" id="services">
        <div className="section-heading"><p className="eyebrow">Что можно сделать</p><h2>Уход, который начинается с разговора</h2><p>Выберите направление, а детали и подходящий формат обсудите с мастером при записи.</p></div>
        <div className="service-list">{services.map((service, index) => <article className="service-item" key={service.title}><span className="service-number">0{index + 1}</span><div><h3>{service.title}</h3><p>{service.detail}</p><small>{service.note}</small></div><span className="arrow">↗</span></article>)}</div>
      </section>
      <section className="split-section"><div className="split-image"><img src={`${import.meta.env.BASE_URL}media/gallery-01.jpg`} alt="Фасад салона Ульяна в Туле" /></div><div className="split-copy"><p className="eyebrow">Почему Ульяна</p><h2>Точная работа и спокойная атмосфера</h2><p>Гости отмечают аккуратность, компетентность мастеров и тёплое отношение. Здесь делают стрижки и окрашивание, помогают с детскими стрижками, а также заботятся о руках и стопах.</p><div className="feature-row"><span>01</span><p><strong>Для всей семьи</strong><br />Детские и взрослые услуги в одном салоне.</p></div><div className="feature-row"><span>02</span><p><strong>Всё по записи</strong><br />Выберите удобное время онлайн.</p></div></div></section>
      <section className="section reviews-section" id="reviews"><div className="section-heading narrow"><p className="eyebrow">Гости говорят</p><h2>Результат, который видно по отзывам</h2></div><div className="reviews-grid">{reviews.map((review) => <figure key={review.author}><div className="stars">★★★★★</div><blockquote>«{review.quote}»</blockquote><figcaption><strong>{review.author}</strong><span>{review.tag}</span></figcaption></figure>)}</div></section>
      <section className="contact-section" id="contacts"><div><p className="eyebrow">Ждём вас в Туле</p><h2>Ваше новое привычное место</h2><p>{site.contact.address}<br />{site.contact.hours}</p><div className="actions"><a className="button button-primary" href={site.bookingUrl}>Записаться онлайн</a><a className="button button-light" href={site.mapsUrl}>Построить маршрут</a></div></div><div className="contact-media"><img src={`${import.meta.env.BASE_URL}media/panorama.jpg`} alt="Панорама рядом с салоном Ульяна" /></div></section>
     </>
  )
}
