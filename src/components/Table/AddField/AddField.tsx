import "./AddField.css"
import React from "react";
import {addToData} from "../../../store/reducers/storeSlice";
import { Dispatch } from 'redux'

interface AddFieldInterface{
    addingData: string
    setAddingData: React.Dispatch<React.SetStateAction<string>>
    dispatch: Dispatch
}

const AddField:React.FC<AddFieldInterface> = ({addingData,setAddingData,dispatch}) => {

    //auto_growing text area
    const auto_grow = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = "inherit" //return to standart
        e.target.style.height = e.target.scrollHeight + "px"
    }
    const addNewData = (e:React.ChangeEvent<HTMLTextAreaElement>) =>{
        auto_grow(e)
        setAddingData(e.target.value)
    }

    const sendDataEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && addingData.length) {
            e.preventDefault()
            dispatch(addToData(addingData))
            setAddingData("")
        }
    }

    const addData = () => {
        if(addingData.length) {
            dispatch(addToData(addingData))
        }
        setAddingData("")
    }

    return (
        <div id="send_data_block">
            <textarea value={addingData} onKeyDown={sendDataEnter} onChange={addNewData} className="add_field" placeholder="Добавьте текст"/>
            <div className="add_modal_block">
                <button className="add_data_button" onClick={addData}>
                    Добавить данные
                </button>
            </div>
        </div>
    );
};

export default AddField;