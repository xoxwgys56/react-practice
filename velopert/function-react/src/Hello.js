import React from "react";

function Hello({style, name, isSpecial}) {
    console.log(isSpecial)

    return (<div style={style}>
        {isSpecial ? <b>😀 </b> : null}
        안녕하세요. {name}
    </div>);
}

Hello.defaultProps = {
    name: "no name"
}

export default Hello;