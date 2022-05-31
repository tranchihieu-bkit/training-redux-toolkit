import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addImage} from "../../reduxs/imageSlice";


const FormImage: React.FC = () => {
    const [isDisplay, setDisplay] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
    const [imgSrc, setImgSrc] = useState<string>(`https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/300`);
    const dispatch = useDispatch();
    const onHandleToggle = () => {
        setDisplay(!isDisplay);
    }
    const onHandleAdd = () => {
        if (inputValue !== "" && imgSrc !== "") {
            dispatch(addImage({name: inputValue, url: imgSrc}));
            setInputValue("");
            setImgSrc(`https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/300`);
            setDisplay(!isDisplay);
        }
    }
    const onHandleCancel = () => {
        setDisplay(!isDisplay);
    }
    const onHandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }
    const onHandleSelectPic = () => {
        setImgSrc(`https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/300`);
    }

    return (
        <div className="form">
            {!isDisplay && <span className="form__link-toggle" onClick={onHandleToggle}>Add a new picture</span>}
            {isDisplay && <div className="form__form">
                <input
                    type="text"
                    placeholder="Enter picture name"
                    value={inputValue}
                    onChange={onHandleInputChange}
                />
                <button onClick={onHandleSelectPic}>Click to select picture</button>
                <img src={imgSrc} width="300px" height="300px" alt="img"/>
                <div>
                    <button onClick={onHandleAdd}>Add</button>
                    <button onClick={onHandleCancel}>Cancel</button>
                </div>
            </div>}
        </div>
    );
};

export default FormImage;