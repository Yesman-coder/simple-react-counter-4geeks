import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SimpleCounter from './App';
import * as serviceWorker from './serviceWorker';


let counter = 0;
setInterval(function() {
	const four = Math.floor(counter/1000);
	const three = Math.floor(counter/100);
	const two = Math.floor(counter/10);
	const one = Math.floor(counter/1);
	counter++;
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.getElementById("root")
	);
}, 1000);


serviceWorker.unregister();
