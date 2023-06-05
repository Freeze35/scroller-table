import React, {useEffect, useState} from 'react';
import "./Slider.css"
interface SliderInterface {
    style: React.CSSProperties
}

interface colorsInterface {
    id: number;
    localImg: string;
}

const Slider: React.FC<SliderInterface> = ({style}) => {

    const [images, setImages] = useState<colorsInterface[]>(
        [
            {id: 1, localImg: "/images/images-min.png"},
            {id: 2, localImg: "/images/good-morning-image-531-min.png"},
            {id: 3, localImg: "/images/istockphoto-517188688-612x612-min.png"},
            {id: 4, localImg: "/images/original-min.png"},
            {id: 5, localImg: "/images/istockphoto-535695503-612x612-min.png"},
            {id: 6, localImg: "/images/istockphoto-1146517111-612x612-min.png"},
            {id: 7, localImg: "/images/photo-1598439210625-5067c578f3f6-min.png"},
            {id: 8, localImg: "/images/photo-1661956602868-6ae368943878-min.png"}
        ])
    const [positionColor, setPositionColor] = useState(0)

    //Slider for every 5 second
    useEffect(()=>{
        setTimeout(()=>{
            setPositionColor(prev=>prev+1)
            if(positionColor === images.length-1){
                setPositionColor(0)
            }
        },5000)
    },[positionColor])


    return (
        <div style={{...style}} className="slider_block animate">
            {images.map((image, index) =>

                <div key={index} className={"one_slide"} style={{
                    backgroundImage: `url(${image.localImg})`,
                    backgroundSize:"100% 100%",
                    transform: `translateX(-${positionColor * 100}%)`,
                }}/>
            )}
        </div>
    );
};

export default Slider;

//tests materials

//const [changelist, setChangeList] = useState<colorsInterface[]>([])

/*useLayoutEffect(() => {
    setChangeList([...color.slice(0, 3).map((col,id) => {

        col.leftOffset = (positionColor+id) * 100
        return col
    })])
},[])

useLayoutEffect(() => {
    if ((positionColor+1) % 3 === 0  ) {

        const checkPosition=()=>{

                if(color.length- positionColor+3)
            {
                return positionColor+3
            }
            else {
                return positionColor+color.length-positionColor
            }
        }
        setChangeList([...color.slice(positionColor-2, checkPosition()).map((col,id) => {

            col.leftOffset = (positionColor+id-2) * 100
            return col
        })])}
}, [positionColor])*/


/* console.log([...color.slice(0, 3).map(col => {
     col.leftOffset = posOffset
     return col
 })])*/
/*else if((positionColor+1) % color.length ===0) {
    setChangeList([...color.slice(0, 3).map((col,id) => {

        col.leftOffset = (positionColor+id-1) * 100
        return col
    })])}*/
/*/!*setChangeList([...color.slice(0, 3).map((col,id) => {

    col.leftOffset = (positionColor+id-1) * 100
    return col
})])}*!/
let prevElem =color[color.length-2]
prevElem = {...prevElem,leftOffset:(positionColor-1) * 100}
let lastElem =color[color.length-1]
lastElem = {...lastElem,leftOffset:(positionColor) * 100}
console.log(changelist)
setChangeList([...changelist,
    ...color.slice(0, 3).map((col,id) => {

    col.leftOffset = (positionColor+id-1) * 100
    return col
})])*/


/*console.log([changelist[changelist.length-1],...color.slice(0, 2).map((col,id) => {

    col.leftOffset = changelist[changelist.length-1].leftOffset+(positionColor+id-2) * 100
    return col
})])}*/
/*setChangeList([changelist[changelist.length-1],...color.slice(0, 2).map((col,id) => {

    col.leftOffset = changelist[changelist.length-1].leftOffset+(positionColor+id-2) * 100
    return col
})])
}
/*else if((positionColor+1) % color.length ===0) {


console.log([...color.slice(0, 2).map((col,id) => {

    col.leftOffset = (positionColor+id+2) * 100
    return col
})])
let newList = [...color.slice(0, 2).map((col,id) => {

    col.leftOffset = (positionColor+id+2) * 100
    return col
})]
setChangeList(newList)

}*/

/*if (positionColor > color.length - 1) {
    setChangeList([...changelist.map(item=> {
            item = {...item, leftOffset: (positionColor) * 100}
            return item
        }
    )])
}*/



/*useEffect(() => {
    setTimeout(() => {
        setPositionColor(prev=>prev+1)
    }, 1000)
}, [positionColor])*/
