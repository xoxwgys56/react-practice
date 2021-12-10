# hook

## 개요

**React@16.8**부터 **React** 요소로 추가되었다. **Hook**을 이용하여, **Class** 기반의 코드를 작성하지 않고, 상태 값과 여러 **React** 기능을 사용할 수 있게되었다.  

### Class는 사람과 기계를 혼동시킨다  

[Hook의 개요](https://ko.reactjs.org/docs/hooks-intro.html)

Class를 사용하기 위해서는 JS의 `this` 키워드가 어떻게 작동하는지 알아야한다.  
(JS의 `this`는 다른 언어에서와 다르게 작동하므로, 혼란을 초래하며, 재사용성과 구성을 어렵게 만들곤 했다.)  

여러 문제를 해결하기 위해, **Hook**은 **Class**없이 React 기능들을 사용하는 방법을 제시한다.  
개념적으로는 React Component는 항상 함수에 더 가깝다.  

**Hook**은 React의 정신을 희생하지 않고, 함수의 사용을 권장한다.  
명령형 코드로 해결책을 찾을 수 있게하며, 복잡한 함수형 또는 반응형 프로그래밍 기술을 배우도록 요구하지 않는다.  

## 어떻게 동작할까?

[React Hook은 실제로 어떻게 동작할까?](https://hewonjeong.github.io/deep-dive-how-do-react-hooks-really-work-ko/)에 대한 노트  

### Closure

<center><img src="https://hewonjeong.github.io/static/832d0497d51ef425d349bad817d1cd57/c739e/closure-diagram.jpg" alt="closure diagram" width=256 /></center>  

**Hook**의 장점 중 하나는 클래스와 고차원 컴포넌트의 복잡성을 피할 수 있다는 것.  
하지만 이는 [binded context에 대한 걱정](https://overreacted.io/how-are-function-components-different-from-classes/)을 하지 않는 대신, [closure에 대한 걱정](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)을 해야 합니다.  

[You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch6.md)의 저자인 *Kyle Simpson*은 클로저를 아래와 같이 정의했습니다.  

> 클로저는 함수가 속한 *lexical scope*를 기억하며, 함수가 *lexical scope* 밖에서 실행될 때에도. 이 *scope*에 접근할 수 있게 하는 기능을 의미한다.  

이는 명백히 *lexical scoping*과 밀접한 관련이 있습니다.  
아래의 코드는 React의 `useState` Hook의 아주 기본적인 형태를 구현한 것입니다:  

```js
function useState(initialValue) {
    var _val = initialValue;

    /** 
     * 내부 함수이자, 클로저.  
     * 부모 영역에서 정의된 _val을 참조한다. getter
    */
    function state() {
        return _val;
    }

    /** 
     * 내부 함수이자, 클로저.
     * 부모._val 참조. setter
    */
    function setState(newVal) {
        _val = newVal;
    }

    return [state, setState];
}

var [foo, setFoo] = useState(0); // 배열의 구조분해 사용. initialValue=0
console.log(foo()); // 0
setFoo(1);
console.log(foo()); // 1
```

### use functional component

아래 코드는 위의 예시코드에서 작성한 `useState`를 사용합니다:  

```js
function Counter() {
    const [counter, setCounter] = useState(0);

    return {
        click: () => setCounter(count() + 1),
        render: () => console.log(`render ${{count: count()}}`)
    }
}

const C = Counter();
C.render(); // render { count: 0}
C.click();
C.render(); // render { count: 1}
```

`Counter`에 프로그램적인 API를 노출해(`.click()`, `.render()`) 스크립트롤 호출할 수 있도록 했다. (이벤트 핸들러 대신에)  
이러한 설계를 통해 컴포넌트 렌더링을 시뮬레이션하고 사용자 작업에 반응할 수 있다.  

### Stale Closure

실제 React API와 동일하게 만드려면, state가 함수가 아닌 변수여야 한다.  
만약 위의 예시 코드에서 `state`(예시 코드에서 `foo`)를 함수가 아닌 변수로 반환한다면 아래와 같다:  

```js
function useState(initialValue) {
    var _val = initialValue;

    function setState(newVal) {
        _val = newVal;
    }

    return [_val, setState]; // _val을 그대로 노출
}

var [foo, setFoo] = useState(0);
console.log(foo) // 0
setFoo(1);
console.log(foo); // 0 -> 의도한 것과 다르게 동작
```

이는 오래된 클로저 문제의 한 형태이다. `useState`결과에서 `foo`를 비구조화할 때. 초기 `useState`에서 한번 `_val`을 참조하고, 다시는 변경하지 않는다.  

### Closure inside of Module

위에서 발생한 `useState`의 문제는 클로저에 클로저를 더해서 해결할 수 있다:  

```js
const MyReact = (function() {
    let _val; // 모듈 스코프에서 _val에 접근할 수 있다.
    
    return {
        render(Component) {
            const Comp = Component();
            Comp.render();
            return Comp;
        },
        useState(initialValue) {
            _val = _val || initialValue; // 매 실행마다 새로 할당됨.
            function setState(newVal) {
                _val = newVal;
            }
            return [_val, setState]
        },
    };
})();
```

---

## Read more

- React conf [React Today and Tomorrow and 90% Cleaner React With Hooks](https://www.youtube.com/watch?v=dpw9EHDh2bM) (1:35:29)
