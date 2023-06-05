import React, {useEffect, useState} from 'react';
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
    const [positionImage, setPositionImage] = useState(0)

    //Slider for every 5 second
    useEffect(()=>{
        setTimeout(()=>{
            setPositionImage(prev=>prev+1)
            /*if(positionImage === images.length-1){
                setPositionImage(0)
            }*/
        },5000)
    },[positionImage])

    const zIndexArea = (offset:number|undefined) =>{
        console.log(positionImage * 100 , offset)
       return  positionImage * 100 === offset
            ? 5
            : 4
    }
    const opacityView = (offset:number|undefined) =>{
        console.log(positionImage * 100 , offset)

        return  positionImage * 100 === offset || positionImage === 0
            ? 1
            : 0

    }

    return (
        <div style={{...style}} className="slider_block animate">
            {images.map((image, index) =>

                <div key={index} className={"one_slide"} style={{
                    opacity: opacityView(image.leftOffset),
                    zIndex: zIndexArea(image.leftOffset) ,
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


//const [changeList, setChangeList] = useState<colorsInterface[]>([])

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