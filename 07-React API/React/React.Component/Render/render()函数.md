# render()

# 定义

- render()生命周期函数是在"Render阶段"被调用的函数，它是**类组件中唯一必须实现的方法**

```jsx
/**
 * @description 渲染函数
 * @method render
 * @returns {React.ReactElement} react元素
 */
render() {
  return ReactElement;
}
```

## 签名

- render()函数被调用时，会检查组件状态和传入的props变化，返回以下类型：
    - **React元素：[创建开销极小的普通对象](https://www.notion.so/2-b1b2c11b4f99440884f2591d79d0e4e8)**
        - React.createElement()函数创建的ReactElement;
        - JSX语法糖编写的react元素（实际上被babel编译后仍然是通过React.creatElement()创建）
            - <div /> ⇒ DOM元素，也是react元素
            - <MyComponent /> ⇒ 自定义组件，react元素
    - **数组或fragments**：[fragments片段可以构建允许组件返回多个元素](https://www.notion.so/8-Fragments-cf167addce764d75a66af562ea563d75)
    - **Portals**：将子节点渲染到存在于父组件以外的DOM节点
        - `ReactDOM.createPortal(child, container);`
    - **字符串或数值类型**：在DOM中直接渲染为文本节点
    - **布尔类型或null**：什么都不渲染。
        - 用于支持 `haveConfig && <Child />` 模式

# 特性

- render函数应该是**纯函数**：
    - state和props未改变的情况下每次调用返回的结果是相同的
- render函数**不会直接与浏览器交互**
    - render函数中不允许出现副作用
    - 在`componentDidMount()`等生命周期函数中与浏览器交互（副作用）
- `shouldComponentUpdate()` 会影响render函数的调用
    - render函数一定会在挂载时调用，因为挂载时无`shouldComponentUpdate()`
    - 更新时，如果shouldComponentUpdate返回false就不会调用render