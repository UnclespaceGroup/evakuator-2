import React from 'react'
import css from './FooterMobile.module.scss'
import img from '../../static/footer.png'
import Layout from '../Layout/LayoutMobile'
import { MOBILE_LONG_PHONE } from '../../constants/phones'

const FooterMobile = () => (
  <div className={css.container} style={{ backgroundImage: `url(${img})` }}>
    <Layout>
      <div className={css.wrapper}>
        <div className={css.info}>
          <div className={css.number}>335 333</div>
          <p>Эвакуатор Сыктывкар</p>
          <p style={{ marginTop: '2rem', marginBottom: '6rem' }}>Круглосуточно, без выходных</p>
          <div className={css.socials}>
            <a href={`tel:${MOBILE_LONG_PHONE}`} className={css.viber} />
            <a href={`tel:${MOBILE_LONG_PHONE}`} className={css.wa} />
            <a href={`tel:${MOBILE_LONG_PHONE}`} className={css.vk} />
          </div>
        </div>
        <div className={css.hr} />
        <div className={css.brand}>
          <span>Made by UncleSpace group</span>
          <div className={css.logo} />
        </div>
      </div>
    </Layout>
  </div>
)

export default React.memo(FooterMobile)
