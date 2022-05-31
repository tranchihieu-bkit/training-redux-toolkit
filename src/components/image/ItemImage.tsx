import React from 'react';
import {imageState} from "../../reduxs/imageSlice";
import {useDispatch} from "react-redux";
import {deleteImage} from "../../reduxs/imageSlice";

interface IItemImage {
    img: imageState;
    idx: number;
}

const ItemImage: React.FC<IItemImage> = ({img, idx}) => {
    const dispatch = useDispatch();

    const onHandleDelete = () => {
        dispatch(deleteImage(idx));
    }
    return (
        <div className="item">
            <img src={img.url} width="auto"/>
            <div className="item__footer">
                <p>{img.name}</p>
                <button onClick={onHandleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default ItemImage;