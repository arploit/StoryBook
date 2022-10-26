import React from 'react'
import './Swatches.less'
import {
    BlueColor, GrayColor,
    PinkColor,
    GreenColor,
    YellowColor,
    OrangeColor,
    RedColor,
    PurpleColor,
} from '../../constant/color';


interface IProps {
    variants: string
}

const swatcheColor = (variants: string): Array<string> => {
    switch (variants) {
        case 'blue': return BlueColor
        case 'pink': return PinkColor
        case 'green': return GreenColor
        case 'yellow': return YellowColor
        case 'orange': return OrangeColor
        case 'red': return RedColor
        case 'purple': return PurpleColor
        case 'Gray': return GrayColor
    }
}

const swatchBackgroundColor = (variants: string): Array<string> => {
    switch (variants) {
        case 'blue': return BlueColor
        case 'pink': return PinkColor
        case 'green': return GreenColor
        case 'yellow': return YellowColor
        case 'orange': return OrangeColor
        case 'red': return RedColor
        case 'purple': return PurpleColor
        case 'Gray': return GrayColor
    }
}

const Swatches = ({ variants = 'blue' }: IProps) => {


    return (
        <div className='Sw__block'>
            <div className='swatches__Block'>
                {swatcheColor(variants).map((item, idx) => {
                    return (
                        <div key={idx} className={`swatches`} style={{ background: item }}>
                            <span style={{
                                color: idx < 9 ? "#fff" : "#000"
                            }}>
                                {item}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Swatches