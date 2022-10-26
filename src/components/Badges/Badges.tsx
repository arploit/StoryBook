import React from 'react'
import './Badges.less'

interface Props {
    label: string
    variant?: string | undefined
}


const Badges = ({ label = "Label Text", variant = 'blue' }: Props) => {
    return (
        <div className={`badge badges__${variant}`}>{label}</div>
    )
}

export default Badges