import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { phoneDisplay, phoneHref } from './content'

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`

export function Icon({ name, size = 24 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  const paths = {
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></>,
    badge: <><circle cx="12" cy="8" r="5"/><path d="M8.5 12 7 22l5-3 5 3-1.5-10"/><path d="m10 8 1.3 1.3L14 6.7"/></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M8 7h8M8 11h6"/></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/></>,
    hotel: <><path d="M3 21V6l9-4 9 4v15"/><path d="M9 21v-5h6v5M7 8h2M15 8h2M7 12h2M15 12h2M2 21h20"/></>,
    chart: <><path d="M4 19V9M10 19V5M16 19v-8M22 19V2M2 22h22"/></>,
    spark: <><path d="m12 3-1.5 4.5L6 9l4.5 1.5L12 15l1.5-4.5L18 9l-4.5-1.5zM5 16l-.7 2.3L2 19l2.3.7L5 22l.7-2.3L8 19l-2.3-.7z"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 22a8 8 0 0 1 16 0"/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    check: <><path d="m5 12 4 4L19 6"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  }
  return <svg {...common}>{paths[name] || paths.spark}</svg>
}

const nav = [['/', '首页'], ['/hotel', '酒店合作'], ['/city-partner', '城市代理'], ['/safety', '安全保障'], ['/services', '服务体系'], ['/about', '关于我们']]

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  return <header className="site-header">
    <div className="container nav-wrap">
      <Link to="/" className="brand" aria-label="倾心有约首页">
        <img src={asset('brand-mark.png')} alt="" /><span><b>倾心有约</b><small>QING XIN YOU YUE</small></span>
      </Link>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="主导航">
        {nav.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}
        <a className="nav-phone" href={phoneHref} data-track="header-phone"><Icon name="phone" size={18}/>{phoneDisplay}</a>
      </nav>
      <button className="menu-btn" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label={open ? '关闭菜单' : '打开菜单'}><Icon name={open ? 'close' : 'menu'} /></button>
    </div>
  </header>
}

export function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div><div className="footer-brand">倾心有约</div><p>正规、专业、有温度的健康服务平台。<br/>让每一次相约，都值得信赖。</p></div>
      <div><h3>网站导航</h3><div className="footer-links">{nav.slice(1).map(([to,l]) => <Link key={to} to={to}>{l}</Link>)}</div></div>
      <div><h3>合作咨询</h3><a className="footer-phone" href={phoneHref}><Icon name="phone" size={20}/>{phoneDisplay}</a><p>服务城市：成都 · 重庆 · 昆明 · 贵阳</p></div>
    </div>
    <div className="container copyright">© 2026 倾心有约 · 本网站内容仅用于品牌与合作信息展示</div>
  </footer>
}

export function Layout({ children }) {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return <><Header/><main>{children}</main><Footer/><a className="mobile-call" href={phoneHref} data-track="mobile-phone"><Icon name="phone" size={21}/><span>电话咨询</span></a><BackTop/></>
}

function BackTop() {
  const [show, setShow] = useState(false)
  useEffect(() => { const fn=()=>setShow(window.scrollY>500); window.addEventListener('scroll',fn,{passive:true}); return()=>window.removeEventListener('scroll',fn)},[])
  return <button className={`back-top ${show?'show':''}`} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="返回顶部">↑</button>
}

export function PageHero({ eyebrow, title, lead, image, imageAlt='', children }) {
  return <section className="page-hero"><div className="container page-hero-grid"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{lead}</p>{children}</div>{image && <div className="page-hero-image"><img src={image} alt={imageAlt} /></div>}</div></section>
}

export function SectionTitle({ eyebrow, title, desc, align='left' }) {
  return <div className={`section-title ${align}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{desc && <p>{desc}</p>}</div>
}

export function CTA({ title='为酒店，多一种安心的服务选择', text='欢迎来电沟通酒店场景与合作需求，我们将结合实际情况提供合作建议。', eyebrow='HOTEL PARTNERSHIP' }) {
  return <section className="cta"><div className="container cta-inner"><div><span className="eyebrow light">{eyebrow}</span><h2>{title}</h2><p>{text}</p></div><a href={phoneHref} className="btn btn-light" data-track="cta-phone"><Icon name="phone" size={19}/>致电 {phoneDisplay}</a></div></section>
}
