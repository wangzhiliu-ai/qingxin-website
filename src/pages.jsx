import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CTA, Icon, PageHero, SectionTitle } from './components'
import { faqs, phoneDisplay, phoneHref, safeguards, steps } from './content'

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`

function SEO({ title, description }) { useEffect(()=>{document.title=title; document.querySelector('meta[name="description"]')?.setAttribute('content',description)},[title,description]); return null }

export function Home() {
  return <><SEO title="倾心有约｜酒店增值服务合作" description="倾心有约为酒店提供规范、轻量的住客健康增值服务方案，平台负责履约，酒店安心合作。"/>
    <section className="home-hero"><div className="container hero-grid">
      <div className="hero-copy"><span className="eyebrow">酒店住客增值服务</span><h1>让酒店的贴心，<br/><em>不止于入住</em></h1><p>倾心有约为酒店连接规范、专业的健康服务能力。酒店轻量接入，平台负责履约，让住客多一种安心选择。</p><div className="hero-actions"><a className="btn btn-primary" href={phoneHref}><Icon name="phone" size={19}/>咨询酒店合作</a><Link className="text-link" to="/hotel">了解合作方式 <Icon name="arrow" size={18}/></Link></div><div className="trust-line"><span><Icon name="check" size={16}/>平台统一履约</span><span><Icon name="check" size={16}/>合作边界清晰</span><span><Icon name="check" size={16}/>服务过程可追溯</span></div></div>
      <div className="hero-visual"><img src={asset('hotel-night.png')} alt="夜幕中的城市酒店客房场景"/><div className="visual-card"><Icon name="hotel"/><div><b>给住客多一份照顾</b><span>给酒店少一份运营负担</span></div></div></div>
    </div></section>
    <section className="section soft"><div className="container"><SectionTitle eyebrow="合作价值" title="把住客需求，变成酒店服务力" desc="不增加复杂运营，让酒店在住客需要时，提供一个规范而体面的选择。" align="center"/><div className="value-grid">
      {[['spark','丰富住客体验','面向差旅疲惫与健康放松需求，完善酒店服务场景。'],['hotel','轻量合作接入','平台配置专属入口与宣传物料，尽量减少前台额外工作。'],['shield','规范服务边界','明确双方职责，平台承担订单响应、服务组织与售后协调。']].map(([i,t,d])=><article className="value-card" key={t}><div className="icon-box"><Icon name={i}/></div><h3>{t}</h3><p>{d}</p></article>)}
    </div></div></section>
    <section className="section"><div className="container split"><div className="photo-frame"><img src={asset('service-professional.png')} alt="倾心有约专业服务人员形象" loading="lazy"/></div><div><SectionTitle eyebrow="安心合作" title="可信，不是一句口号" desc="从人员准入、培训规范到服务节点与异常响应，倾心有约用可执行的机制支撑每一次服务。"/><div className="mini-list">{safeguards.slice(0,3).map(x=><div key={x.title}><Icon name={x.icon}/><span><b>{x.title}</b><small>{x.text}</small></span></div>)}</div><Link className="text-link strong" to="/safety">查看安全保障 <Icon name="arrow" size={18}/></Link></div></div></section>
    <section className="section dark-section"><div className="container"><SectionTitle eyebrow="合作流程" title="四步完成轻量接入" desc="尊重酒店原有管理体系，合作从一次清晰的需求沟通开始。"/><div className="steps">{steps.map(s=><article key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></div></section>
    <CTA/>
  </>
}

export function Hotel() { return <><SEO title="酒店合作｜倾心有约" description="了解倾心有约酒店合作方式、合作流程、平台支持与常见问题。"/><PageHero eyebrow="酒店合作" title={<>一种轻量接入的<br/>住客增值服务</>} lead="我们关注酒店最在意的三件事：住客体验、运营负担与服务风险。通过清晰的合作边界，让专业的事由平台负责。" image={asset('hotel-night.png')}><a className="btn btn-primary" href={phoneHref}><Icon name="phone" size={19}/>沟通合作需求</a></PageHero>
  <section className="section"><div className="container"><SectionTitle eyebrow="为什么合作" title="回应真实存在的住客需求" align="center"/><div className="scenario-grid">{[['差旅之后','长时间交通与会议，让住客需要更便利的放松选择。'],['夜间时段','陌生城市里的服务选择有限，规范和安心比便利更重要。'],['品质期待','中高端酒店住客期待更完整、更有温度的服务体验。']].map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
  <section className="section soft"><div className="container split reverse"><div><SectionTitle eyebrow="平台支持" title="酒店少操心，平台多承担"/><ul className="feature-list"><li><Icon name="check"/>酒店专属服务入口与场景化物料</li><li><Icon name="check"/>订单响应、人员组织与服务协调</li><li><Icon name="check"/>服务节点记录与客服沟通渠道</li><li><Icon name="check"/>结合酒店要求明确服务与管理边界</li></ul></div><div className="support-panel"><span>QING XIN SUPPORT</span><Icon name="hotel" size={48}/><h3>酒店保持服务温度<br/>平台负责履约细节</h3><p>具体物料、运营安排与双方职责，以正式合作方案和协议为准。</p></div></div></section>
  <section className="section"><div className="container"><SectionTitle eyebrow="合作步骤" title="从了解彼此，到正式上线" align="center"/><div className="steps light-steps">{steps.map(s=><article key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></div></section>
  <section className="section soft"><div className="container faq-wrap"><SectionTitle eyebrow="常见问题" title="酒店关心的，我们认真回答"/><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<b>＋</b></summary><p>{a}</p></details>)}</div></div></section><CTA/></> }

export function Safety() { return <><SEO title="安全保障｜倾心有约" description="了解倾心有约的人员准入、服务培训、过程留痕、隐私保护与异常响应机制。"/><PageHero eyebrow="安全保障" title={<>让合作有依据，<br/>让服务有边界</>} lead="我们理解酒店对人员、过程与责任的谨慎。倾心有约以规范准入、过程记录和客服响应构建服务保障。"/>
  <section className="section"><div className="container"><div className="safety-grid">{safeguards.map(x=><article key={x.title}><div className="icon-box"><Icon name={x.icon}/></div><h3>{x.title}</h3><p>{x.text}</p></article>)}</div></div></section>
  <section className="section soft"><div className="container split"><div><SectionTitle eyebrow="人员与服务" title="从准入开始，把规范落到细节"/><p className="body-copy">服务人员按照平台流程提交身份及相关材料，完成必要培训与规则确认后方可进入服务体系。平台持续关注服务质量、用户反馈与异常情况，并据此进行复核与管理。</p><div className="notice"><Icon name="shield"/><span><b>关于公开信息</b>网站仅展示已有制度或材料能够支撑的机制描述；具体保障范围、责任与执行标准，以实际订单规则及正式协议为准。</span></div></div><div className="process-stack">{['材料提交与身份核验','岗前培训与规则确认','订单匹配与服务节点记录','评价反馈与异常复核'].map((t,i)=><div key={t}><span>{i+1}</span><p>{t}</p></div>)}</div></div></section><CTA title="先了解清楚，再放心合作"/></> }

export function Services() { return <><SEO title="服务体系｜倾心有约" description="倾心有约围绕商旅场景建立规范、清晰、可协调的健康服务体系。"/><PageHero eyebrow="服务体系" title={<>围绕商旅疲惫，<br/>提供专业照顾</>} lead="服务以住客自主选择为前提，围绕差旅后常见的肩颈、腰背与全身疲惫需求，提供规范的健康放松服务。" image={asset('service-professional.png')}/>
  <section className="section"><div className="container"><SectionTitle eyebrow="服务方向" title="从真实需求出发" align="center"/><div className="service-grid">{[['肩颈舒缓','针对久坐、伏案与长途出行后的肩颈紧张，提供侧重肩颈区域的放松服务。'],['腰背放松','围绕差旅常见的腰背疲惫，通过规范手法帮助身体恢复轻松状态。'],['全身调理','根据个人感受沟通服务重点，以完整、舒适的节奏覆盖主要疲劳区域。'],['个性化沟通','服务前确认需求与注意事项，在平台服务范围内明确重点与禁忌。']].map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
  <section className="section dark-section"><div className="container"><SectionTitle eyebrow="服务标准" title="专业，也体现在分寸感"/><div className="standard-row">{[['服务前','确认订单、需求与注意事项'],['服务中','遵循规范流程，尊重个人边界'],['服务后','完成节点确认，开放评价反馈']].map(([t,d])=><div key={t}><Icon name="check"/><span><b>{t}</b><small>{d}</small></span></div>)}</div></div></section><CTA/></> }

export function About() { return <><SEO title="关于我们｜倾心有约" description="倾心有约致力于建设正规、专业、有温度的健康服务平台。"/><PageHero eyebrow="关于倾心有约" title={<>让信任，成为<br/>服务的底色</>} lead="倾心有约关注的不只是一次服务，更是用户、服务人员与合作伙伴之间长期而健康的信任关系。"/>
  <section className="section"><div className="container split"><div className="brand-story"><img src={asset('brand-mark.png')} alt="倾心有约品牌标志" loading="lazy"/></div><div><SectionTitle eyebrow="品牌初心" title="正规、专业、有温度"/><p className="body-copy">我们希望让健康服务少一点不确定，多一点标准与尊重。通过人员培养、平台化管理和清晰的合作机制，让用户更安心，让服务人员更职业，也让酒店等合作伙伴更省心。</p><p className="quote">“倾心服务，有约必达。”</p></div></div></section>
  <section className="section soft"><div className="container"><SectionTitle eyebrow="核心价值" title="一种服务，连接多方信任" align="center"/><div className="value-grid four">{[['user','用户','获得便利、规范且有边界的服务选择'],['hotel','酒店','丰富住客体验，保持轻量合作'],['badge','服务人员','在清晰规则中提供专业服务'],['shield','平台','承担组织、管理与协调责任']].map(([i,t,d])=><article className="value-card" key={t}><div className="icon-box"><Icon name={i}/></div><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
  <section className="section contact-section"><div className="container contact-grid"><div><span className="eyebrow">联系我们</span><h2>从一次坦诚沟通开始</h2><p>当前服务城市：成都、重庆、昆明、贵阳</p></div><a href={phoneHref} className="contact-phone"><small>酒店合作服务热线</small><b><Icon name="phone" size={28}/>{phoneDisplay}</b></a></div></section></> }

export function NotFound() { return <section className="not-found"><SEO title="页面未找到｜倾心有约" description="倾心有约"/><span>404</span><h1>这一页暂时没有约上</h1><p>返回首页，继续了解倾心有约。</p><Link className="btn btn-primary" to="/">返回首页</Link></section> }
