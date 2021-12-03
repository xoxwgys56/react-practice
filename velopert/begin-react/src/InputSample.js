import React, {useState} from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const {name, nickname} = inputs;

    const onChange = e => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    };
    const onReset = () => {
        setInputs({
            name: "",
            nickname: ""
        })
    };

    return (
        <div>
            <input name="name" placeholder="name" onChange={onChange} value={name}/>
            <input name="nickname" placeholder="nickname" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>reset</button>
            <div>
                <b>{name}: {nickname}</b>
            </div>
        </div>
    );
}

export default InputSample;