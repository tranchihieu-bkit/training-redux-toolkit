import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import ItemImage from "./ItemImage";

const ListImage: React.FC = () => {
    const listImg = useSelector((state: RootState) => state.image);
    return (
        <div className="list">
            {
                listImg.map((img, idx) => <ItemImage key={idx} img={img} idx={idx}/>)
            }
        </div>
    );
};

export default ListImage;