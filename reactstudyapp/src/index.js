import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

// <App /> -> JSX語法 -> JS普通對象
// let app =  <React.StrictMode>
// <App />
// </React.StrictMode>;

// let root = document.getElementById('root');

// let h1Tabel = <h1>Hello Word React</h1>

// ReactDOM.render(
//   h1Tabel,root
// );
// ReactDOM.render(
//   app,root
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // 實現頁面時刻的顯示
// function clock(){
//   let time = new Date().toLocaleTimeString();
//   let element = (
//       <div>
//         <h1>現在的時間是{time}</h1>
//         <h2>這是副標題{time}</h2>
//       </div>
//     )
//   let root = document.querySelector('#root');
//   ReactDOM.render(element,root);
// }

// setInterval(clock,1000);

// react函數式組件
function Clock(props){
    return(
        <div>
          <h1>現在的時間是{props.date.toLocaleTimeString()}</h1>
          <h2>這是函數式組件開發</h2>    
        </div>
    )
}

function run(){
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.querySelector('#root')
  )
}

setInterval(run,1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
