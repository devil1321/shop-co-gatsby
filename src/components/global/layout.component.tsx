import React from 'react'
import Seo from './seo.component';
import Nav from './nav.component';
import Footer from './footer.component';
import '../../styles/style.scss'
import 'font-awesome/css/font-awesome.css'

interface LayoutProps {
    className:string;
    title:string;
    meta:any[];
    lang?:string;
    children:any;
}


const Layout:React.FC<LayoutProps> = ({className,title,meta,lang,children}) => {
  return (
    <div className={className}>
      <Seo title={`${title}`} meta={meta} lang={lang} />
      <Nav />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
