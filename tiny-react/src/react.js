// react 직접 구성해보자.

const hooks = [];
let currentComponent = -1;

export class Component {

}

export function useState(initValue) {
    const position = currentComponent;

    if (!hooks[position]) {
        // 값이 없으면 최초 호출이다.
        hooks[position] = initValue;
    }

    return [
        hooks[position],  
        // dispatchFunction
        (nextValue) => {
            hooks[position] = nextValue;
        }
    ];
}

function renderRealDOM(vdom) {
    if (typeof vdom === 'string') {
        // 마지막 자식 요소. 더 이상 children 없음.
        return document.createTextNode(vdom);
    }
    
    if (vdom === undefined) return;

    const $el = document.createElement(vdom.tagName);

    vdom.children.map(renderRealDOM).forEach(node => {
        $el.appendChild(node);
    });

    return $el;
}

/**
 * 아래의 예시코드에서는 closure를 이용해서 상태값을 갖게 했다.
 * 
 * @param {*} component virtual dom
 * @param {*} container real dom
 */
export const render = (function() {
    // 이렇게 공간을 만들어 closure를 구현한다.
    let prevVdom = null;

    return function(nextVdom, container) {
        if (prevVdom === null) {
            prevVdom = nextVdom;
        }

        // diff logic. update dom.
        // 상태가 달라졌기 때문에 업데이트한다.

        container.appendChild(renderRealDOM(nextVdom));
    }
})();

/**
 * js에서는 function, class 구분이 불가능하다.
 * 그래서 React 상속을 받았는지 type chaining을 통해서 구분.
 * 
 * jsx 쓰기 싫으면 react api에서 이 함수 가져다 쓰면 됨.
 * babel이 하는 일. jsx -> js 변환.
 */
export function createElement(tagName, props, ...children) {
    if (typeof tagName === 'function') {
        if (tagName.prototype instanceof Component) {
            const instance = new tagName({ ...props, children});
            // class형 컴포넌트는 지역 변수가 아닌 다른 곳에 테이블을 두어 저장하도록해야
            // 불필요한 초기화를 줄일 수 있다.
            // -> 이에 따라 class 컴포넌트가 상태값을 가질 수 있다.
            return instance.render();
        } else {
            currentComponent++;

            return tagName.apply(null, [props, ...children]);
        }
    }

    return { tagName, props, children };
}
