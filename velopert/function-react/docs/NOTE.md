# note

## props

### default value

`props`에서 값이 할당되지 않은 경우, `defaultProps`로 default 값을 할당할 수 있다.

```jsx
Hello.defaultProps = {
    name: "no name"
}
```

### children

아래와 같은 자식을 포함해줘야, 자식이 렌더링된다.

```jsx
function Wrapper({children}) {
    return (
        <div>{children}</div>
    )
}
```

### branch

`isSpecial` 변수로 분기점을 만들었다.

```jsx
<Hello name={name} style={style} isSpecial={true}/>
// 아래와 같이 변수를 보내면, true로 보내진다.
// <Hello name={name} style={style} isSpecial/>
<Hello style={style}/>
```

`Hello` 컴포넌트에서는 아래와 같이 `isSpecial`을 받는다.

```jsx
function Hello({style, name, isSpecial}) {
    return (<div style={style}>
        {isSpecial ? <b>😀 </b> : null}
        안녕하세요. {name}
    </div>);
}

Hello.defaultProps = {
    name: "no name"
}
```

이 경우, `isSpecial`은 별도의 `defaultProps`로 설정되지 않았다.  
`undefined`인데, 이 경우 아래와 같이 코드가 해석된다.

```jsx
{
    undefined ? <b>😀 </b> : null
}
```

그러므로, `null`이 반환된다. `null`은 렌더링되지 않으므로, 무시된다.

## hooks

### useState

```jsx
const [text, setText] = useState('');

const onChange = e => setText(e.target.value);
const onReset = () => setText('');

return (
    <div>
        <input onChange={onChange} value={text}/>
        <button onClick={onReset}>초기화</button>
        <div>
            <b>value: {text}</b>
        </div>
    </div>
);
```