/**
 * @description 所有PropTypes的验证器
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-10-21 13:58:14
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description 一个包含所有验证器所需类型prop的组件
 * @class AllUsageApp
 * @extends React.PureComponent
 */
class AllUsageApp extends React.PureComponent {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    const {
      optionalArray,
      optionalBool,
      optionalFunc,
      optionalNumber,
      optionalObject,
      optionalString,
      optionalSymbol,
      optionalElement,
      optionalNode,
      // optionalElementType,
      optionalPerson,
      optionalEnum,
      optionalUnion,
      optionalArrayOf,
      optionalObjectOf,
      optionalObjectWithShape,
      optionalObjectWithStirctShape,
      requiredFunc,
      requiredAny,
      customProp,
      customArrayProp,
    } = this.props;
    return (
      <div>
        <h2>包含所有PropTypes验证器所需类型prop的组件</h2>
        <ul>
          <li>
            <strong>可选的原始数据类型</strong>
          </li>
          <li>可选数组(optionalArray)：{optionalArray}</li>
          <li>可选布尔值(optionalBool): {optionalBool}</li>
          <li>可选函数(optinalFunc): {optionalFunc()}</li>
          <li>可选数字(optionalNumber):{optionalNumber}</li>
          <li>
            可选对象(optionalObject):
            {optionalObject.author + " " + optionalObject.description}
          </li>
          <li>可选字符串(optionalString): {optionalString}</li>
          <li>可选Symbol(optionalSymbol):{optionalSymbol.toString()}</li>
          <li>-----------------------------</li>
          <li>
            <strong>可选的指定数据类型</strong>
          </li>
          <li>可选React元素(optionalElement): {optionalElement}</li>
          <li>
            可选可被渲染元素(字符串，元素，数组，Fragment，optionalNode):{" "}
            {optionalNode}
          </li>
          <li>
            可选的React元素类型(optionalElementType, 即MyComponent):{" "}
            {/* {optionalElementType} */}
          </li>
          <li>可选的类实例(optionalPerson): {optionalPerson.toString()}</li>
          <li>
            可选的枚举类型值(optinalEnum, 只能是枚举类型中特定的值):{" "}
            {optionalEnum}
          </li>
          <li>
            可选的多类型值(optionalUnion,
            可以是多个类型的值，如字符串，数字，数组等):
            {optionalUnion.toString()}
          </li>
          <li>可选的指定类型数组(optionalArrayOf):{optionalArrayOf}</li>
          <li>
            可选的指定类型对象(optionalObjectOf):
            {optionalObjectOf.type + " " + optionalObjectOf.propTypesNumber}
          </li>
          <li style={optionalObjectWithShape}>
            可选的只有特定类型值组成的对象(optionalObjectWithShape):
            {optionalObjectWithShape.fontSize +
              "px;" +
              optionalObjectWithShape.color}
          </li>
          <li style={optionalObjectWithStirctShape}>
            可选的有特定类型值组成的对象(optionalObjectWithStirctShape):{" "}
            {optionalObjectWithStirctShape.fontSize +
              "px;" +
              optionalObjectWithStirctShape.color}
          </li>
          <li>----------------------------</li>
          <li>
            <strong>必选的数据类型（必须传递）</strong>
          </li>
          <li>必选的函数(requiredFunc): {requiredFunc()}</li>
          <li>必选的任何类型值(requiredAny): {requiredAny}</li>
          <li>----------------------------</li>
          <li>
            <strong>自定义验证器</strong>
          </li>
          <li>自定义数据类型和匹配结构的验证器(customProp)：{customProp}</li>
          <li>
            自定义的数组或对象元素的验证器(customArrayProp): {customArrayProp}
          </li>
        </ul>
      </div>
    );
  }
}
/**
 * @description 用于传递给父组件的React元素
 * @function ChildCpn
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function ChildCpn(props) {
  return <div>Hello, PropTypes</div>;
}
/**
 * @description 类
 * @class Person
 */
class Person {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
  age = 0;
  name = "";
  toString() {
    return "I am " + this.name + ", i’m " + this.age;
  }
}
// PropTypes验证器
AllUsageApp.propTypes = {
  // 元素数据类型，可选的
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
  // 可选的指定数据类型
  /** 指定数组元素类型 */
  optionalArrayOf: PropTypes.arrayOf(PropTypes.string),
  /** 指定对象元素类型 */
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),
  /** 指定为React元素 */
  optionalElement: PropTypes.element,
  /** 指定为可渲染的元素,如数字，字符串，DOM元素 */
  optionalNode: PropTypes.node,
  /** 指定为React元素类型，如MyComponent */
  // optionalElementType: PropTypes.elementType,
  /** 指定为类实例，使用js的类型识别符号 */
  optionalPerson: PropTypes.instanceOf(Person),
  /** 指定为枚举类型中的值 */
  optionalEnum: PropTypes.oneOf(["Hello", "PropTypes"]),
  /** 指定为几种类型中的任意一个 */
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Person),
  ]),
  /** 指定一个对象只能包含特定类型值（不可添加额外属性） */
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
  }),
  /** 指定一个对象由特定类型属性组成且可以扩展（可以添加额外属性） */
  optionalObjectWithShape: PropTypes.exact({
    color: PropTypes.string,
    fontSize: PropTypes.number,
  }),
  // 必选的属性类型，在属性类型后加上isRequired
  requiredFunc: PropTypes.func.isRequired,
  requiredAny: PropTypes.any.isRequired,
  // 自定义验证器，验证失败返回一个Error对象
  /** 验证器函数，以属性，属性名称，组件名称为参数 */
  customProp: function (props, propName, componentName) {
    if (
      !/^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/.test(
        props[propName]
      )
    ) {
      return new Error(
        "Invalid prop " +
          propName +
          "supplied to " +
          componentName +
          ".Validation failed"
      );
    }
  },
  /**
   * 自定义数组或者对象验证器
   * 验证器验证数组或对象中的每一个值
   * 验证器第一个参数是数组（对象）本身
   * 第二个参数是当前键（数组索引，或对象键）
   */
  customArrayProp: PropTypes.arrayOf(function (
    propValue,
    key,
    componentName,
    location,
    propFullName
  ) {
    if (!/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(propValue[key])) {
      return new Error(
        "Invalid prop" +
          propFullName +
          " supplied to " +
          componentName +
          "in " +
          location +
          "." +
          "Validation failed"
      );
    }
  }),
};

ReactDOM.render(
  <AllUsageApp
    optionalArray={["optional", "array"]}
    optionalBool={true}
    optionalFunc={() => <div>render prop, optionalFunc</div>}
    optionalNumber={20}
    optionalObject={{
      author: "mangwu",
      description: "PropTypes验证器的所有用法",
    }}
    optionalString={"optionalString"}
    optionalSymbol={Symbol("i am a symbol")}
    optionalNode={<ChildCpn />}
    optionalElement={<ChildCpn />}
    // optionalElementType={ChildCpn}
    optionalPerson={new Person(21, "mangwu")}
    optionalEnum={"Hello"}
    optionalUnion={new Person(12, "wumang")}
    optionalArrayOf={["optional", "array", "string"]}
    optionalObjectOf={{ type: 0, propTypesNumber: 20 }}
    optionalObjectWithShape={{
      color: "#fa4f99",
      fontSize: 16,
      // borderBottom: "1px solid #fa4f99"
    }}
    optionalObjectWithStirctShape={{
      color: "#fa4f99",
      fontSize: 15,
      borderBottom: "1px solid #fa4f99"
    }}
    requiredFunc={() => <div>render prop, requiredFunc</div>}
    requiredAny={"any"}
    customProp={"10.69.65.91"}
    customArrayProp={["1185956753@qq.com", "13451142805@163.com"]}
  />,
  document.querySelector("#root")
);
