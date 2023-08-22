import React from 'react'
import Seo from './seo.component';

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
      <Seo title={`Shop | ${title}`} meta={meta} lang={lang} />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
