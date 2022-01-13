/**
 * @description  OnMouseOut.jsx
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-01-10 09:25:29
 * @copyright © 2022 wangzhihao, All rights reserved.
 */

 const { useState } = window.React;

 /**
  * @description 鼠标事件 mouseout
  * @function App
  * @param {object} props - 属性
  * @returns {React.ReactElement} react元素
  */
 function App(_props) {
   const [log, setLog] = useState([]);
   return (
     <React.Fragment>
       <h2>React onMouseOut</h2>
       <div
         className="wrapper"
         onMouseOut={(e) => {
           setLog((log) => {
             return log.concat("mouse out wrapper element");
           });
           console.log(e);
         }}
       >
         <div
           className="outer"
           onMouseOut={(e) => {
             setLog((log) => {
               return log.concat("mouse out outer element");
             });
             console.log(e);
           }}
         >
           <div
             className="content"
             onMouseOut={(e) => {
               setLog((log) => {
                 return log.concat("mouse out content element");
               });
               console.log(e);
             }}
           >
             <div
               className="inner"
               onMouseOut={(e) => {
                 setLog((log) => {
                   return log.concat("mouse out inner element");
                 });
                 console.log(e);
               }}
             >
               out me
             </div>
           </div>
         </div>
       </div>
       <div id="log">
         {log.map((item, index) => {
           return <p key={index}>{index + 1 + "." + item}</p>;
         })}
       </div>
       <hr />
     </React.Fragment>
   );
 }
 ReactDOM.render(<App />, document.querySelector("#root"));