import React from 'react'
import BuynowCard from './BuynowCard'

export default{
    title:'BuynowCard',
    component:BuynowCard
}

const BuynowCards = (args) => <BuynowCard {...args} />
export const BuynowCard1 = BuynowCards.bind({});

