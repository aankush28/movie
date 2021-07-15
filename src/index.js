import React,{Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const App= lazy( ()=>new Promise(resolve => {
  setTimeout(() => {
    resolve(import('./App'));
  }, 1000 ,);
}));


ReactDOM.render(
  <>
  <Suspense fallback={<div className="loder"><img src="https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!w340" alt="" srcset="" width={500}/></div>}>
    <App/>
    </Suspense>
  </>,
  document.getElementById('root')
);

