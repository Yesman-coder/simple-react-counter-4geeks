import React from 'react';
import PropTypes from 'prop-types';

const mySuperStyles = {
	fontSize: "60px",
	color: "whitesmoke",
	background: "#101010",
	padding: "20px"
};
const boxStyle = {
	background: "323232",
	padding: "20px"
};

const SimpleCounter= props => {
  return(
  <div
			className="container d-flex flex-row justify-content-center"
			style={mySuperStyles}>
			<div className="icon" style={boxStyle}>
				<i className="far fa-clock" />
			</div>
			<div className="min-tens" style={boxStyle}>
				{props.digitFour % 10}
			</div>
			<div className="min-unit" style={boxStyle}>
				{props.digitThree % 10}
			</div>
			<div className="sec-tens" style={boxStyle}>
				{props.digitTwo % 10}
			</div>
			<div className="sec-unit" style={boxStyle}>
				{props.digitOne % 10}
			</div>
  </div>  
  );
};

SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

export default SimpleCounter;
