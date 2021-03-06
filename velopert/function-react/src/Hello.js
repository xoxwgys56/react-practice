import React from "react";

function Hello({style, name, isSpecial}) {
    console.log(isSpecial)

    return (<div style={style}>
        {isSpecial ? <b>π </b> : null}
        μλνμΈμ. {name}
    </div>);
}

Hello.defaultProps = {
    name: "no name"
}

export default Hello;