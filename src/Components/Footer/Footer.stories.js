import React from 'react'
import Footer from './Footer'

export default{
    title:'Form/Footer',
    component:Footer
}

 const FooterTemplates = (args) => <Footer {...args }/>
 export const ViewFooter = FooterTemplates.bind({});
