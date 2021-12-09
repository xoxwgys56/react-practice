import React, {useRef, useState} from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const nameInput = useRef();

    const {name, nickname} = inputs;

    const onChange = e => {
        const {value, name} = e.target;
        /**
         * use spread. for immutable
         * */
        setInputs({
            ...inputs,
            [name]: value
        })
    };
    const onReset = () => {
        setInputs({
            name: "",
            nickname: ""
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input name="name" placeholder="name" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="nickname" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>reset</button>
            <div>
                <b>{name}: {nickname}</b>
            </div>
        </div>
    );
}

export default InputSample;