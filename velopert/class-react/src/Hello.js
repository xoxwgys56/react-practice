import React, { Component} from "react";

class Hello extends Component {
    render() {
        const { color, name, isSpecial} = this.props;
        return (
            <div style={{color}}>
                {isSpecial && <b>*</b>}
                Hello {name}
            </div>
        )
    }
}

Hello.defaultProps = {
    name: 'no-name'
};

export default Hello;