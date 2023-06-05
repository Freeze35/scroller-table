import React, {useState} from 'react';
import "./Table.css"
import {useAppDispatch, useAppSelector} from "../hooks/reduxHook";
import Modal from "../Modal/Modal";
import AddField from "./AddField/AddField";

interface Tableinterface {
    style: React.CSSProperties
}

const Table: React.FC<Tableinterface> = ({style}) => {

    const dispatch = useAppDispatch()
    const data = useAppSelector(state => state.storeSlice.data)

    const [visibleModal, setVisibleModal] = useState(false)
    const [addingData, setAddingData] = useState<string>("")

    const openModal = () => {
        setVisibleModal(!visibleModal)
    }


    return (
        <div style={style} className="table_block">
            <button className="add_button" onClick={openModal}>
                Добавить данные
            </button>
            <Modal
                visible={visibleModal}
                setVisible={setVisibleModal}
                className="auth_id_first"
                turnOff={false}
            >
                <AddField addingData={addingData} setAddingData={setAddingData} dispatch={dispatch}/>
            </Modal>
            <label className="table_name">Таблица</label>
            <div className="table_header">
                <div style={{width: "20%"}}>Id</div>
                <div style={{width: "80%"}}>Текст</div>
            </div>
            <div className="table">
            {data.map((item,index) => {
                    return (

                            <div key={`${index}_${item.id}`}
                                 className={data.length===index
                                     ?"table_body"
                                     :"table_body sticky_line"}>
                                <div style={{width: "20%",height:"100%"}}>{item.id}</div>
                                <div className="text_area" style={{width: "80%"}}>{item.text}</div>
                            </div>

                    )
                }
            )}
            </div>
            <div className="footer">
                Итого: <label className="sumLabel">{data.length}</label>
            </div>

        </div>
    );
};

export default Table;