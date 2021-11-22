# NOTE

## virtual dom 무엇인가

1. 왜 만들었을까?
2. virtual-dom 기반으로 read-dom 변환

HTML tag를 변환시키는 구조일거야.  
태그는 속성이 있고, 자식이 있어.  

### 자바스크립트 친화적인 데이터로 만들려면 어떻게 해야할까?

객체로 만들면 좋겠지.

```html
<div id="root">
    <span>blah</span>
</div>
```

virtual-dom은 아래처럼 생기지 않았을까?  
-> 실제로는 더 복잡하겠지만 구조적으로 이런 느낌이겠지.  

```javascript
{
    tagName: "div",
    props: {
        id: "root",
        className: "container"
    },
    children: [
        {
            tagName: "span",
            props: {},

            children: [
                "blah"
            ]
        }
    ],
}
```

### @jsx 지시어

```javascript
/* @jsx createElement */
```

우리가 만든 `createElement`로 쓸 것이라는 지시어.  

## jsx rule

사용자가 작성한 `component`는 대문자로 시작하고, `html` 내의 태그는 소문자로 시작한다.

---

## Read more

- [introduce jsx](https://ko.reactjs.org/docs/introducing-jsx.html)