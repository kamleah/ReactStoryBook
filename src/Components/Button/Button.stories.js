import React from 'react'
import Button from './Button'

    export default{
        title: 'Form/Button',
        component:Button,
    }

    export const Primary = () => <Button varient='primarys'>Primary</Button>
    export const Secondary = () => <Button  varient='secondarys'>Secondary</Button>
    export const Success = () => <Button varient='successs'>Success</Button>
    export const Danger = () => <Button varient='dangers'>Danger</Button>
    
const Template = args => <Button {...args}></Button>

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    varient:'primarys',
    children:'Primary Args',
    size:'larges'
}