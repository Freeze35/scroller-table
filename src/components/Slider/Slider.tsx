import React, {useEffect, useLayoutEffect, useState} from 'react';
import "./Slider.css"
interface SliderInterface {
    style: React.CSSProperties
}

interface colorsInterface {
    id: number;
    localImg: string;
    leftOffset?:number;
}

const Slider: React.FC<SliderInterface> = ({style}) => {

    let [images, setImages] = useState<colorsInterface[]>(
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
    const [positionImage, setPositionImage] = useState(0)
    const [changeList, setChangeList] = useState<colorsInterface[]>([])
    const [animation, setAnimation]= useState(true)

    useLayoutEffect(() => {
        setChangeList([...images.slice(0, 3).map(
            (image:colorsInterface,id) => {

                image.leftOffset = (positionImage+id) * 100
                return image
            })])
    },[])

    useLayoutEffect(() => {
        setAnimation(true)
        setTimeout(()=>{
            const checkFirstPosition = () =>{
                if(positionImage + 1 % images.length === 0 || positionImage === 0){
                    return 0
                }
                else {
                    return positionImage % images.length
                }
            }

            const checkLastPosition=()=>{

                if(positionImage+3 % images.length>0)
                {
                    return positionImage % images.length+3
                }
                else {
                    return images.length % positionImage
                }
            }

            const getNewSlice = () =>{
                return [...images.slice(checkFirstPosition(), checkLastPosition()).map(
                    (image:colorsInterface,id) => {

                        image.leftOffset = (positionImage+id) * 100
                        return image
                    })]
            }
            if((positionImage+1)%2 === 0) {
                setChangeList([...getNewSlice()])
            }
            if((positionImage+1)%images.length === 0){
                setChangeList([...getNewSlice(),...images.slice(0, 3).map(
                    (image:colorsInterface,id) => {

                        image.leftOffset = (positionImage+id+1) * 100
                        return image
                    })])
            }
            setAnimation(false)
        },2500)

    }, [positionImage])

    //Slider for every 5 second
    useEffect(()=>{
        setTimeout(()=>{
            setPositionImage(prev=>prev+1)
            /*if(positionImage === images.length-1){
                setPositionImage(0)
            }*/
        },5000)
    },[positionImage])

    return (
        <div style={{...style}} className="slider_block animate">
            {changeList.map((image, index) =>

                <div key={index} className={animation?"one_slide animate":"one_slide"} style={{
                    marginLeft:`${image.leftOffset}%`,
                    backgroundImage: `url(${image.localImg})`,
                    backgroundSize:"100% 100%",
                    transform: `translateX(-${positionImage * 100}%)`,
                }}/>
            )}
        </div>
    );
};

export default Slider;


//test Data for next modifications

//const [changeList, setChangeList] = useState<colorsInterface[]>([])

/*const zIndexArea = (offset:number|undefined) =>{
    return  positionImage * 100 === offset
        ? 5
        : 4
}
const opacityView = (offset:number|undefined) =>{
    return  positionImage * 100 === offset || positionImage === 0
        ? 1
        : 0

}*/

/*useLayoutEffect(() => {

        const checkFirstPosition = () =>{
            if(positionImage + 1 % images.length === 0 || positionImage === 0){
                return 0
            }
            else {
                return positionImage % images.length
            }
        }

        const checkLastPosition=()=>{

            if(positionImage+3 % images.length>0)
            {
                return positionImage % images.length+3
            }
        }
    console.log(checkFirstPosition(), checkLastPosition())
        const getNewSlice = () =>{
           return [...images.slice(checkFirstPosition(), checkLastPosition()).map(
                (image:colorsInterface,id) => {

                    image.leftOffset = (positionImage+id+1) * 100
                    return image
                })]
        }


    if((positionImage + 1) % images.length === 0){
        setChangeList([...images.slice(-1),
            ...getNewSlice()])
    }
    else {
        setChangeList([...getNewSlice()])
    }


}, [positionImage])*/