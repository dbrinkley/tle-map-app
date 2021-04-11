import React, { Component } from "react";
import "./Map.css";
import Sidebar from "./Sidebar";
import * as d3 from 'd3';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rectangle from './Rectangle'


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.mapRef = React.createRef();
    this.handleSidebarHeaderClick = this.handleSidebarHeaderClick.bind(this);
   
  }

//TODO: handle forsale booths, needs to link to something that displays for sale info in vendorpanel
//TODO: add read more button to long compnay info text
//TODO: import newest map for 2021
//TODO: create node js and use sql to create tables for exhibitors
//TODO: feed exhibitor info into program on load
//TODO: style booth number in each box
//TODO: create booth for sale on all booths not assigned



  componentDidMount() {

    const svgMap = d3.select(this.mapRef.current);

    var allElements = svgMap.selectAll('g');

    svgMap.call(d3.zoom()
    .scaleExtent([1, 10])
    .on("zoom", zoom_actions));

    function zoom_actions({transform}){
       allElements.attr("transform", transform);
    }
    
  }

  //causes sidebar not to work
  // shouldComponentUpdate() {
  //   // Prevents component re-rendering
  //   return false;
  // }

  componentDidUpdate(){

  }



  handleSidebarHeaderClick() {
    this.setState(st => ({
      sidebarOpen: !st.sidebarOpen
    }));
  }

  handleBoothClick = (event) => {
    this.props.boothClick(event.target.dataset.booth);
    d3.select(this.mapRef.current).selectAll('.Map_booth').classed('Map_selectedBooth', false);
    d3.select(event.target).classed('Map_selectedBooth', true);
  }



  render() {


    return (
      <div className="Map_container col-md-8">
        <Sidebar
          openClose={this.state.sidebarOpen}
          sidebarheaderClick={this.handleSidebarHeaderClick}
        />
        <div className="SVGMap_container">
        {/* https://www.pluralsight.com/guides/how-to-load-svg-with-react-and-webpack */}
        {/* https://www.freecodecamp.org/news/how-to-get-started-with-d3-and-react-c7da74a5bd9f/ */}
 

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 611.67 792.49" id="svgItem" ref={this.mapRef}>
<g id="Boarder">
	<polygon className="st0" points="78.73,710.24 78.73,782.31 144.36,782.31 144.36,710.4 128.32,710.4 128.32,728.63 90.71,728.63 
		90.71,710.24 79.42,710.24 	"/>
		<line className="st0" x1="121.19" y1="711.41" x2="124.42" y2="711.41"/>

		<line className="st0" x1="114.72" y1="711.41" x2="117.95" y2="711.41"/>

		<line className="st0" x1="108.26" y1="711.41" x2="111.49" y2="711.41"/>

		<line className="st0" x1="105.02" y1="711.41" x2="101.79" y2="711.41"/>

		<line className="st0" x1="95.32" y1="711.41" x2="98.56" y2="711.41"/>

		<path className="st0" d="M94.35,710.51"/>

		<line className="st0" x1="78.75" y1="755.2" x2="14.05" y2="755.2"/>
	<line className="st0" x1="18.68" y1="661.75" x2="13.5" y2="661.75"/>
	<line className="st0" x1="18.69" y1="651.62" x2="13.5" y2="651.62"/>

		<path className="st0" d="M177.27,108.59"/>
	
	<line className="st0" x1="18.65" y1="381.17" x2="13.46" y2="381.17"/>
	<line className="st0" x1="18.61" y1="390.84" x2="13.42" y2="390.84"/>
	<line className="st0" x1="353.28" y1="113.78" x2="353.28" y2="108.69"/>
	<line className="st0" x1="362.5" y1="113.78" x2="362.5" y2="108.69"/>
	<line className="st0" x1="372.17" y1="113.78" x2="372.17" y2="108.69"/>
	<line className="st0" x1="398.17" y1="113.78" x2="398.17" y2="108.69"/>
	<line className="st0" x1="407.23" y1="113.78" x2="407.23" y2="108.69"/>
	<line className="st0" x1="416.7" y1="113.78" x2="416.7" y2="108.69"/>

			<path className="st0" d="M572.53,153.6c0-2.13-1.72-3.85-3.85-3.85c-2.13,0-3.85,1.73-3.85,3.85c0,2.13,1.72,3.85,3.85,3.85
				C570.81,157.45,572.53,155.73,572.53,153.6L572.53,153.6L572.53,153.6z"/>
	
			<path className="st0" d="M564.3,164.2c0-2.13-1.72-3.85-3.85-3.85c-2.13,0-3.85,1.73-3.85,3.85c0,2.13,1.73,3.85,3.85,3.85
				C562.57,168.06,564.3,166.33,564.3,164.2L564.3,164.2L564.3,164.2z"/>
	
			<polyline className="st0" points="560.11,160.36 559.38,158.94 565.62,155.5 567.58,157.04 565.77,163.92 564.21,163.56 			"/>


			<path className="st0" d="M550.52,126.11c0-2.13-1.73-3.85-3.85-3.85c-2.13,0-3.85,1.73-3.85,3.85c0,2.13,1.72,3.85,3.85,3.85
				C548.8,129.97,550.52,128.24,550.52,126.11L550.52,126.11L550.52,126.11z"/>
	
			<path className="st0" d="M538.78,132.62c0-2.13-1.73-3.85-3.85-3.85c-2.13,0-3.85,1.73-3.85,3.85c0,2.13,1.72,3.85,3.85,3.85
				C537.05,136.47,538.78,134.75,538.78,132.62L538.78,132.62L538.78,132.62z"/>

			<polyline className="st0" points="536.13,128.96 536.02,127.36 543.1,126.66 544.31,128.84 539.93,134.45 538.64,133.51 			"/>

			<path className="st0" d="M542.49,112c0.66-2.02-0.45-4.2-2.47-4.86c-2.02-0.66-4.2,0.44-4.86,2.47c-0.66,2.02,0.45,4.2,2.47,4.86
				C539.65,115.13,541.83,114.02,542.49,112L542.49,112L542.49,112z"/>
	
			<path className="st0" d="M529.3,114.54c0.66-2.02-0.44-4.2-2.47-4.86c-2.02-0.66-4.2,0.45-4.86,2.47c-0.66,2.02,0.45,4.2,2.47,4.86
				C526.47,117.67,528.64,116.56,529.3,114.54L529.3,114.54L529.3,114.54z"/>
		
			<polyline className="st0" points="527.92,110.23 528.31,108.68 535.27,110.21 535.73,112.66 529.83,116.64 528.89,115.34 			"/>

			<path className="st0" d="M559.65,140.42c0-2.13-1.72-3.85-3.85-3.85c-2.13,0-3.85,1.72-3.85,3.85c0,2.13,1.73,3.85,3.85,3.85
				C557.92,144.28,559.65,142.55,559.65,140.42L559.65,140.42L559.65,140.42z"/>

			<path className="st0" d="M549.79,149.54c0-2.13-1.73-3.85-3.85-3.85c-2.13,0-3.85,1.73-3.85,3.85c0,2.13,1.72,3.85,3.85,3.85
				C548.07,153.4,549.79,151.67,549.79,149.54L549.79,149.54L549.79,149.54z"/>

			<polyline className="st0" points="546.23,145.7 545.75,144.18 552.46,141.8 554.15,143.63 551.23,150.13 549.76,149.52 			"/>

			<path className="st0" d="M586.85,163.74c0-2.13-1.73-3.85-3.85-3.85c-2.13,0-3.85,1.72-3.85,3.85c0,2.13,1.72,3.85,3.85,3.85
				C585.13,167.6,586.85,165.87,586.85,163.74L586.85,163.74L586.85,163.74z"/>

			<path className="st0" d="M581.08,175.86c0-2.13-1.73-3.85-3.85-3.85c-2.13,0-3.85,1.73-3.85,3.85c0,2.13,1.72,3.85,3.85,3.85
				C579.36,179.72,581.08,177.99,581.08,175.86L581.08,175.86L581.08,175.86z"/>

			<polyline className="st0" points="576.08,172.19 575.06,170.95 580.42,166.26 582.67,167.33 582.37,174.45 580.77,174.43 			"/>

			<path className="st0" d="M602.92,170.94c0-2.13-1.72-3.85-3.85-3.85c-2.13,0-3.85,1.72-3.85,3.85c0,2.13,1.73,3.85,3.85,3.85
				C601.19,174.79,602.92,173.06,602.92,170.94L602.92,170.94L602.92,170.94z"/>

			<path className="st0" d="M599.84,184c0-2.13-1.72-3.85-3.85-3.85c-2.13,0-3.85,1.72-3.85,3.85c0,2.13,1.72,3.85,3.85,3.85
				C598.11,187.86,599.84,186.13,599.84,184L599.84,184L599.84,184z"/>
	
			<polyline className="st0" points="594.08,180.65 592.83,179.66 597.07,173.94 599.49,174.52 600.71,181.53 599.14,181.86 			"/>

		<polyline className="st0" points="595.98,187.86 595.81,686.82 402.25,687.05 402.25,729.31 355.73,781.94 		"/>

	<polygon className="st0" points="208.99,710.49 208.99,783.07 225.6,783.07 225.6,754.62 264.69,754.62 264.69,783.2 311.92,783.2 
		337.69,749.31 337.69,710.34 303.59,710.34 303.59,728.83 242.5,728.83 242.5,710.34 	"/>
	<line className="st0" x1="237.38" y1="783.2" x2="253.76" y2="783.2"/>
	<line className="st0" x1="245.57" y1="783.2" x2="245.57" y2="754.62"/>
		<line className="st0" x1="271.54" y1="711.41" x2="274.78" y2="711.41"/>

		<line className="st0" x1="265.08" y1="711.41" x2="268.31" y2="711.41"/>

		<line className="st0" x1="258.62" y1="711.41" x2="261.85" y2="711.41"/>

		<line className="st0" x1="255.38" y1="711.41" x2="252.15" y2="711.41"/>

		<line className="st0" x1="245.68" y1="711.41" x2="248.92" y2="711.41"/>

		<line className="st0" x1="297.34" y1="711.41" x2="300.58" y2="711.41"/>
	
		<line className="st0" x1="290.88" y1="711.41" x2="294.11" y2="711.41"/>

		<line className="st0" x1="284.41" y1="711.41" x2="287.64" y2="711.41"/>

		<line className="st0" x1="281.18" y1="711.41" x2="277.94" y2="711.41"/>

		<polyline className="st0" points="261.86,108.69 335.46,108.69 335.46,127.99 261.86,127.99 261.86,108.69 		"/>

	<path className="st0" d="M13.85,776.8V671.81h4.83c-0.06-2.8-2.37-5.07-5.17-5.07v0.07c2.8,0,5.12-2.26,5.17-5.07v-0.05
		c-0.06-2.8-2.37-5.07-5.17-5.07v0.07c2.8,0,5.12-2.26,5.17-5.07v-0.05c-0.06-2.8-2.37-5.07-5.17-5.07v0.08
		c2.8,0,5.12-2.26,5.17-5.07h-5.17l-0.09-241.02l5.27-0.09c-0.06-2.8-2.37-5.07-5.17-5.07v0.08c2.8,0,5.12-1.9,5.17-4.7l0,0
		c-0.06-2.8-2.37-4.71-5.17-4.7v0.07c2.8,0,5.12-1.96,5.17-4.76l0,0c-0.06-2.8-2.37-4.65-5.17-4.65v0.07c2.8,0,5.12-2.26,5.17-5.07
		h-5.82v-12.82v-86.49l120.63-145.48l17.07,12.9l26.71-31.23h166.66l0.05,0.1v5.1c2.76-0.06,5-2.33,5-5.09l-0.07,0
		c0,2.76,1.7,5.04,4.46,5.1l0,0c2.76-0.05,4.4-2.33,4.4-5.09h-0.07c0,2.76,2,5.04,4.76,5.1l0,0c2.76-0.06,4.82-2.33,4.82-5.09h-0.07
		c0,2.76,2.03,5.04,4.79,5.1l0,0c2.76-0.05,4.8-2.33,4.8-5.09l-0.07,0c0,2.76,2.23,5.04,4.99,5.1v-4.87h6.92v4.87
		c2.76-0.06,4.99-2.33,5-5.09h-0.07c0,2.76,1.82,5.04,4.58,5.09l0,0c2.76-0.05,4.63-2.33,4.63-5.09h-0.07c0,2.76,1.83,5.04,4.59,5.1
		h0.02c2.76-0.05,4.61-2.33,4.61-5.1h-0.08c0,2.76,2.05,5.04,4.81,5.1l0,0c2.76-0.06,4.78-2.33,4.78-5.09h-0.07
		c0,2.76,2.23,5.04,4.99,5.1v-5.1l0.14-0.06l101.44,0.01"/>
</g>


<Rectangle handleBoothClick={this.handleBoothClick} selectedBooth={this.props.selectedBooth} x={32.08} y={499.26} width={125.19} height={171.95} booth={'100'} vendorId={42676} textX={32.08} textY={499.26} />
<Rectangle handleBoothClick={this.handleBoothClick} selectedBooth={this.props.selectedBooth} x={62.66} y={452.68} width={47.5} height={31.26} booth={'125'} vendorId={7284} textX={62.66} textY={452.68}/>
<Rectangle handleBoothClick={this.handleBoothClick} selectedBooth={this.props.selectedBooth} x={62.66} y={405.96} width={47.5} height={31.26} booth={'131'} vendorId={43521} textX={62.66} textY={405.96}/>
<Rectangle handleBoothClick={this.handleBoothClick} selectedBooth={this.props.selectedBooth} x={62.66} y={359.12} width={47.5} height={31.26} booth={'137'} vendorId={0} textX={62.66} textY={359.12}/>
<Rectangle handleBoothClick={this.handleBoothClick} selectedBooth={this.props.selectedBooth} x={125.78} y={437.08} width={31.26} height={31.26} booth={'228'} vendorId={4644} textX={125.78} textY={437.08}/>
<Rectangle handleBoothClick={this.handleBoothClick} selectedBooth={this.props.selectedBooth} x={125.78} y={389.94} width={31.26} height={31.26} booth={'234'} vendorId={0} textX={125.78} textY={389.94}/>
<Rectangle handleBoothClick={this.handleBoothClick} selectedBooth={this.props.selectedBooth} x={125.78} y={343.11} width={31.26} height={31.26} booth={'240'} vendorId={0} textX={125.78} textY={343.11}/>
<Rectangle handleBoothClick={this.handleBoothClick} selectedBooth={this.props.selectedBooth} x={125.78} y={296.01} width={15.63} height={31.26} booth={'246'} vendorId={0} textX={125.78} textY={296.01}/>
<Rectangle handleBoothClick={this.handleBoothClick} selectedBooth={this.props.selectedBooth} x={125.68} y={249.06} width={15.63} height={31.26} booth={'252'} vendorId={0} textX={125.68} textY={249.06}/>


<g id="Booths">
  <rect x="52.57" y="219.24" transform="matrix(0.6428 -0.766 0.766 0.6428 -152.3617 127.3635)" className="st1" width="15.63" height="15.63" data-booth="253" data-venid="0000" onClick={this.handleBoothClick} />
  <rect x="59.91" y="201.16" transform="matrix(0.6428 -0.766 0.766 0.6428 -133.1063 132.5018)" className="st1" width="31.23" height="15.63" data-booth="255" data-venid="0000" onClick={this.handleBoothClick} />
  
  <rect x="89.79" y="165.42" transform="matrix(0.6428 -0.7661 0.7661 0.6428 -95.0551 142.6259)" className="st1" width="31.23" height="15.63" data-booth="261" data-venid="0000" onClick={this.handleBoothClick} />
	
  <rect x="112.55" y="147.48" transform="matrix(0.6428 -0.766 0.766 0.6428 -75.9677 147.674)" className="st1" width="15.63" height="15.63" data-booth="265" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="125.68" y="233.44" className="st1" width="15.63" height="15.63" data-booth="256" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="125.68" y="217.88" className="st1" width="15.63" height="15.63" data-booth="258" data-venid="0000" onClick={this.handleBoothClick} />
  <polygon className="st1" points="156.95,217.83 125.82,217.83 156.95,186.55 	" data-booth="260" data-venid="0000" onClick={this.handleBoothClick} />

	<rect x="141.45" y="296.01" className="st1" width="15.63" height="31.26" data-booth="345" data-venid="0000" onClick={this.handleBoothClick} />
  <rect x="141.45" y="249.06" className="st1" width="15.63" height="31.26" data-booth="351" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="141.45" y="233.44" className="st1" width="15.63" height="15.63" data-booth="355" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="141.45" y="217.88" className="st1" width="15.63" height="15.63" data-booth="357" data-venid="0000" onClick={this.handleBoothClick} />



	<rect x="219.13" y="608.38" className="st1" width="78.47" height="62.58" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="313.71" y="608.34" className="st1" width="47.14" height="62.67" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="376.2" y="608.34" className="st1" width="47.14" height="62.67" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />

	<rect x="172.92" y="389.94" className="st1" width="31.26" height="31.05" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="172.6" y="561.38" className="st1" width="31.26" height="31.05" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="172.6" y="608.53" className="st1" width="31.26" height="46.81" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="219.42" y="561.38" className="st1" width="31.26" height="31.05" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="266.42" y="561.38" className="st1" width="31.26" height="31.05" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="313.71" y="561.38" className="st1" width="31.26" height="31.05" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />

	<rect x="173.04" y="437.08" className="st1" width="31.26" height="31.05" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />


	<rect x="454.02" y="436.42" className="st1" width="15.56" height="31.26" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="438.6" y="436.42" className="st1" width="15.56" height="31.26" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="172.8" y="483.45" className="st1" width="31.26" height="62.02" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="219.26" y="483.56" className="st1" width="31.26" height="62.02" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="266.37" y="483.56" className="st1" width="31.33" height="62.02" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="313.55" y="483.56" className="st1" width="31.05" height="62.02" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	
	<rect x="249.93" y="343.11" className="st1" width="31.33" height="31.12" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="249.93" y="295.91" className="st1" width="31.33" height="31.12" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="298.13" y="343.11" className="st1" width="46.8" height="31.12" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="298.13" y="390" className="st1" width="46.8" height="31.12" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="298.13" y="436.63" className="st1" width="46.8" height="31.12" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="360.78" y="390" className="st1" width="62.2" height="31.12" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="360.78" y="436.63" className="st1" width="62.2" height="31.12" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="360.78" y="530.08" className="st1" width="62.2" height="15.5" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="360.78" y="483.56" className="st1" width="62.2" height="30.9" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="360.78" y="561.84" className="st1" width="62.2" height="30.9" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="298.13" y="295.91" className="st1" width="46.8" height="31.12" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	


	
	
		
	
		
	
	<rect x="266.24" y="233.44" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="266.24" y="217.88" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="266.24" y="202.19" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="281.95" y="217.88" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="281.95" y="202.19" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="235.52" y="217.88" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="235.52" y="202.19" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="219.8" y="217.88" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="219.8" y="202.19" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="219.8" y="186.67" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="219.8" y="170.98" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="281.91" y="233.44" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="266.24" y="186.61" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="266.24" y="171.06" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="266.24" y="155.36" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="281.95" y="171.06" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="281.95" y="155.36" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="281.91" y="186.61" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="313.52" y="202.19" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="329.23" y="202.19" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="313.52" y="186.61" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="313.52" y="171.06" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="313.52" y="155.36" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="329.19" y="186.61" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="313.56" y="217.88" className="st1" width="15.63" height="31.33" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="329.23" y="233.44" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="329.23" y="217.88" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="329.23" y="170.94" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="329.23" y="155.39" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="360.61" y="202.19" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="376.32" y="202.19" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="360.61" y="186.61" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="360.61" y="171.06" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="360.61" y="155.36" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="376.28" y="186.61" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="376.32" y="170.94" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="376.32" y="155.39" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="454.23" y="233.44" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="469.79" y="233.44" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="407.36" y="233.44" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="407.36" y="217.88" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="407.36" y="186.64" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="407.36" y="170.94" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="407.36" y="155.39" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="423.03" y="249.17" className="st1" width="15.63" height="15.53" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="469.79" y="249.17" className="st1" width="15.52" height="15.53" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="360.68" y="218" className="st1" width="15.67" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="360.68" y="233.51" className="st1" width="15.67" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="376.28" y="218" className="st1" width="15.67" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="376.28" y="233.51" className="st1" width="15.67" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="329.29" y="249.17" className="st1" width="15.63" height="31" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="313.63" y="249.17" className="st1" width="15.63" height="31" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="376.37" y="249.17" className="st1" width="15.63" height="31" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="360.72" y="249.17" className="st1" width="15.63" height="31" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="266.28" y="264.6" className="st1" width="15.67" height="15.61" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="281.95" y="249.21" className="st1" width="15.63" height="30.96" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="219.81" y="249.13" className="st1" width="15.54" height="31.25" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="235.36" y="249.05" className="st1" width="15.63" height="31.3" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="423.03" y="233.55" className="st1" width="15.63" height="15.67" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="407.33" y="264.72" className="st1" width="15.63" height="15.53" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="407.33" y="249.1" className="st1" width="15.63" height="15.67" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="423.03" y="186.64" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="407.36" y="202.24" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="423.03" y="217.88" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="423.03" y="202.24" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="423.03" y="170.94" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="423.03" y="155.39" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="172.88" y="342.86" className="st1" width="15.63" height="31.36" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="188.51" y="342.86" className="st1" width="15.63" height="31.36" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="172.88" y="327.31" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />

	<rect x="188.51" y="327.31" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="172.88" y="311.61" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="188.55" y="311.61" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="172.88" y="296.01" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="188.55" y="296.01" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="533.18" y="437.03" className="st1" width="31.34" height="31.19" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="454.31" y="296" className="st1" width="31.14" height="31.11" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="500.48" y="202.27" className="st1" width="31.14" height="31.11" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="531.75" y="202.27" className="st1" width="31.14" height="31.11" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="501.24" y="296" className="st1" width="15.8" height="31.11" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="501.24" y="342.94" className="st1" width="15.8" height="31.11" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="454.31" y="343.28" className="st1" width="31.14" height="31.11" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="438.61" y="389.6" className="st1" width="31.14" height="31.11" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="485.94" y="389.6" className="st1" width="31.14" height="31.11" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="485.94" y="436.5" className="st1" width="15.93" height="31.11" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="501.76" y="436.5" className="st1" width="15.93" height="31.11" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="533.18" y="390.05" className="st1" width="31.14" height="31.11" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="172.79" y="233.44" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="172.79" y="186.64" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="172.79" y="170.94" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="188.46" y="233.44" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="172.79" y="248.95" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="188.46" y="248.95" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="266.32" y="249.12" className="st1" width="15.63" height="15.46" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="219.78" y="233.44" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="235.45" y="233.44" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="454.23" y="249.03" className="st1" width="15.52" height="31.35" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="469.79" y="264.76" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="454.23" y="186.5" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="469.79" y="186.5" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="454.23" y="202.19" className="st1" width="15.56" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="469.79" y="202.24" className="st1" width="15.52" height="15.53" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="454.23" y="155.38" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="469.79" y="155.38" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.42" y="264.97" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.42" y="249.12" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.42" y="233.44" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.42" y="217.82" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.42" y="202.24" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="454.23" y="171.07" className="st1" width="15.56" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="469.79" y="171.11" className="st1" width="15.52" height="15.53" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="500.53" y="249.31" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="516.09" y="249.31" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="500.53" y="265.01" className="st1" width="15.56" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="516.09" y="265.05" className="st1" width="15.52" height="15.53" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="547.13" y="249.31" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="500.53" y="170.94" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="516.09" y="170.94" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="500.53" y="155.36" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="516.09" y="155.36" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="547.13" y="265.05" className="st1" width="15.52" height="15.53" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="454.23" y="217.82" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="469.79" y="217.82" className="st1" width="15.52" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="423.03" y="264.8" className="st1" width="15.63" height="15.53" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="172.79" y="264.58" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="188.46" y="264.58" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="188.46" y="186.64" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="188.46" y="170.94" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="172.79" y="217.96" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="172.79" y="202.27" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="188.46" y="217.96" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="188.46" y="202.27" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="188.46" y="155.39" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="219.78" y="155.39" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="235.45" y="186.64" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="235.45" y="170.94" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="235.45" y="155.39" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="219.38" y="437.08" className="st1" width="61.67" height="30.67" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="219.38" y="390.23" className="st1" width="61.67" height="30.67" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="532.7" y="545.76" className="st1" width="31.14" height="31.27" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	
	<rect x="580.09" y="624.31" className="st1" width="15.63" height="30.92" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.09" y="608.46" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.09" y="655.23" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.09" y="592.82" className="st1" width="15.63" height="15.7" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.09" y="561.62" className="st1" width="15.63" height="31.19" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.09" y="546.13" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.09" y="530.56" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.09" y="515" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.09" y="468.29" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.09" y="452.66" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.09" y="437.09" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.09" y="421.52" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.09" y="405.95" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.09" y="390.4" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.09" y="374.82" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="486.25" y="514.31" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="501.91" y="498.91" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="501.91" y="483.36" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="486.25" y="483.37" className="st1" width="15.63" height="31.01" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="501.91" y="514.31" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="486.25" y="545.76" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="501.91" y="545.76" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="486.25" y="561.39" className="st1" width="31.3" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="533.17" y="483.36" className="st1" width="15.63" height="15.66" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="533.17" y="514.75" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="548.84" y="514.75" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="548.84" y="498.91" className="st1" width="15.63" height="15.82" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="533.31" y="498.91" className="st1" width="15.63" height="15.82" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="548.84" y="483.36" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="580.11" y="483.88" className="st1" width="15.63" height="31.12" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="439.32" y="483.61" className="st1" width="15.63" height="31.03" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="454.99" y="499.01" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="455.03" y="483.64" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="439.32" y="514.64" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="454.99" y="514.64" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="439.33" y="545.87" className="st1" width="31.35" height="31.14" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="486.28" y="639.66" className="st1" width="31.14" height="31.27" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="532.7" y="639.66" className="st1" width="31.14" height="31.27" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="439.33" y="639.77" className="st1" width="31.35" height="31.14" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="486.28" y="592.74" className="st1" width="31.14" height="31.27" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="532.7" y="608.55" className="st1" width="31.14" height="15.46" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="532.7" y="593.17" className="st1" width="31.14" height="15.46" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="439.33" y="592.86" className="st1" width="31.35" height="31.14" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<path className="st2" d="M196.21,678.61c0,4.99-4.04,9.03-9.03,9.03c-4.99,0-9.03-4.04-9.03-9.03c0-4.99,4.04-9.03,9.03-9.03
		C192.17,669.57,196.21,673.62,196.21,678.61z" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="360.78" y="342.86" className="st1" width="15.63" height="31.53" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="376.45" y="342.86" className="st1" width="15.67" height="31.53" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="360.78" y="296" className="st1" width="15.68" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="360.78" y="327.31" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="360.78" y="311.61" className="st1" width="15.68" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="376.51" y="296.01" className="st1" width="15.68" height="31.23" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="407.33" y="342.86" className="st1" width="15.63" height="31.53" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="423" y="342.86" className="st1" width="15.68" height="31.53" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="407.33" y="296" className="st1" width="15.68" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="407.33" y="327.31" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="407.33" y="311.61" className="st1" width="15.68" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="422.9" y="296" className="st1" width="15.68" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="422.9" y="327.31" className="st1" width="15.63" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
	<rect x="422.9" y="311.61" className="st1" width="15.68" height="15.63" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} />
</g>
<g id="pillars">
	<polygon className="st9" points="94.63,329.74 94.63,330.58 93.35,330.58 93.35,329.74 91.93,329.74 91.93,330.58 91.93,332.98 
		91.93,335.37 91.93,336.21 93.35,336.21 93.35,335.37 94.63,335.37 94.63,336.21 95.98,336.21 95.98,335.37 95.98,332.98 
		95.98,330.58 95.98,329.74 	"/>
	<polygon className="st9" points="94.63,280.89 94.63,281.73 93.35,281.73 93.35,280.89 91.93,280.89 91.93,281.73 91.93,284.12 
		91.93,286.51 91.93,287.35 93.35,287.35 93.35,286.51 94.63,286.51 94.63,287.35 95.98,287.35 95.98,286.51 95.98,284.12 
		95.98,281.73 95.98,280.89 	"/>
		<line className="st11" x1="90.12" y1="330.59" x2="85" y2="330.59"/>

		<line className="st11" x1="79.97" y1="330.59" x2="73.57" y2="330.59"/>

		<line className="st11" x1="68.54" y1="330.59" x2="62.15" y2="330.59"/>

		<line className="st11" x1="57.12" y1="330.59" x2="50.71" y2="330.59"/>

		<line className="st11" x1="45.68" y1="330.59" x2="39.28" y2="330.59"/>

		<line className="st11" x1="33.8" y1="330.59" x2="27.4" y2="330.59"/>

		<line className="st11" x1="23.74" y1="330.59" x2="17.34" y2="330.59"/>

		<line className="st11" x1="90.12" y1="335.88" x2="85" y2="335.88"/>

		<line className="st11" x1="79.97" y1="335.88" x2="73.57" y2="335.88"/>

		<line className="st11" x1="68.54" y1="335.88" x2="62.15" y2="335.88"/>

		<line className="st11" x1="57.12" y1="335.88" x2="50.71" y2="335.88"/>

		<line className="st11" x1="45.68" y1="335.88" x2="39.28" y2="335.88"/>

		<line className="st11" x1="33.8" y1="335.88" x2="27.4" y2="335.88"/>

		<line className="st11" x1="23.74" y1="335.88" x2="17.34" y2="335.88"/>

		<line className="st11" x1="90.19" y1="286.6" x2="85" y2="286.6"/>

		<line className="st11" x1="79.97" y1="286.6" x2="73.57" y2="286.6"/>

		<line className="st11" x1="68.54" y1="286.6" x2="62.15" y2="286.6"/>

		<line className="st11" x1="57.12" y1="286.6" x2="50.71" y2="286.6"/>

		<line className="st11" x1="45.68" y1="286.6" x2="39.28" y2="286.6"/>

		<line className="st11" x1="33.8" y1="286.6" x2="27.4" y2="286.6"/>

		<line className="st11" x1="23.74" y1="286.6" x2="17.34" y2="286.6"/>

		<line className="st11" x1="90.19" y1="281.41" x2="85" y2="281.41"/>

		<line className="st11" x1="79.97" y1="281.41" x2="73.57" y2="281.41"/>

		<line className="st11" x1="68.54" y1="281.41" x2="62.15" y2="281.41"/>

		<line className="st11" x1="57.12" y1="281.41" x2="50.71" y2="281.41"/>

		<line className="st11" x1="45.68" y1="281.41" x2="39.28" y2="281.41"/>

		<line className="st11" x1="33.8" y1="281.41" x2="27.4" y2="281.41"/>

		<line className="st11" x1="23.74" y1="281.41" x2="17.34" y2="281.41"/>

	<polygon className="st9" points="232.43,280.89 232.43,281.73 231.14,281.73 231.14,280.89 229.73,280.89 229.73,281.73 229.73,284.12 
		229.73,286.51 229.73,287.35 231.14,287.35 231.14,286.51 232.43,286.51 232.43,287.35 233.78,287.35 233.78,286.51 233.78,284.12 
		233.78,281.73 233.78,280.89"/>
	<polygon className="st9" points="232.48,329.69 232.48,330.53 231.2,330.53 231.2,329.69 229.78,329.69 229.78,330.53 229.78,332.92 
		229.78,335.31 229.78,336.16 231.2,336.16 231.2,335.31 232.48,335.31 232.48,336.16 233.83,336.16 233.83,335.31 233.83,332.92 
		233.83,330.53 233.83,329.69"/>

		<line className="st11" x1="588.28" y1="335.72" x2="581.66" y2="335.72"/>

		<line className="st11" x1="576.47" y1="335.71" x2="569.85" y2="335.71"/>

		<line className="st11" x1="564.66" y1="335.71" x2="558.04" y2="335.71"/>

		<line className="st11" x1="552.84" y1="335.71" x2="546.23" y2="335.71"/>

		<line className="st11" x1="540.56" y1="335.7" x2="534.94" y2="335.7"/>

		<line className="st11" x1="588.28" y1="330.38" x2="581.67" y2="330.38"/>

		<line className="st11" x1="576.47" y1="330.38" x2="569.85" y2="330.38"/>

		<line className="st11" x1="564.66" y1="330.38" x2="558.04" y2="330.37"/>

		<line className="st11" x1="552.85" y1="330.37" x2="546.23" y2="330.37"/>

		<line className="st11" x1="540.56" y1="330.37" x2="534.94" y2="330.37"/>

	<polygon className="st9" points="531.63,280.93 531.63,281.77 530.34,281.77 530.34,280.93 528.92,280.93 528.93,281.77 528.93,284.17 
		528.93,286.56 528.93,287.4 530.34,287.4 530.34,286.56 531.63,286.56 531.63,287.4 532.98,287.4 532.98,286.56 532.98,284.17 
		532.98,281.77 532.98,280.93"/>
	<polygon className="st9" points="593.81,329.86 593.81,330.7 592.53,330.7 592.53,329.86 591.12,329.86 591.12,330.7 591.11,333.09 
		591.11,335.49 591.11,336.33 592.53,336.33 592.53,335.49 593.81,335.49 593.81,336.33 595.16,336.33 595.16,335.49 595.17,333.1 
		595.17,330.7 595.17,329.86"/>

		<polygon className="st9" points="467.43,677.66 467.43,678.5 466.15,678.49 466.15,677.65 464.74,677.65 464.74,678.49 464.74,680.89 
			465.55,680.89 468.79,680.89 468.79,678.5 468.79,677.65"/>
		<polygon className="st9" points="465.55,682.62 467.93,682.62 467.93,681.76 467.93,680.89 465.55,680.89 465.55,681.75"/>
		<polygon className="st9" points="464.74,685.01 464.74,685.85 466.15,685.85 466.15,685.01 467.43,685.01 467.43,685.85 
			468.78,685.85 468.78,685.01 468.79,682.62 464.74,682.62"/>

		<rect x="330.51" y="680.81" className="st9" width="4.85" height="1.73"/>
		<rect x="339.42" y="680.81" className="st9" width="4.85" height="1.73"/>

		<polygon className="st9" points="273.91,681.68 273.91,680.81 274.76,680.81 274.76,678.42 274.76,677.58 273.41,677.58 
			273.41,678.42 272.12,678.42 272.12,677.58 270.71,677.58 270.71,678.42 270.71,680.81 271.52,680.81 271.52,681.68 
			271.52,682.55 270.71,682.55 270.71,684.94 270.71,685.78 272.12,685.78 272.12,684.94 273.41,684.94 273.41,685.78 
			274.76,685.78 274.76,684.94 274.76,682.55 273.91,682.55"/>
		<rect x="265.85" y="680.81" className="st9" width="4.85" height="1.73"/>
		<rect x="274.76" y="680.81" className="st9" width="4.85" height="1.73"/>

		<polygon className="st9" points="209.25,681.68 209.25,680.81 210.1,680.81 210.1,678.42 210.1,677.58 208.75,677.58 208.75,678.42 
			207.46,678.42 207.46,677.58 206.05,677.58 206.05,678.42 206.05,680.81 206.86,680.81 206.86,681.68 206.86,682.55 
			206.05,682.55 206.05,684.94 206.05,685.78 207.46,685.78 207.46,684.94 208.75,684.94 208.75,685.78 210.1,685.78 210.1,684.94 
			210.1,682.55 209.25,682.55"/>
		<rect x="201.2" y="680.81" className="st9" width="4.85" height="1.73"/>
		<rect x="210.1" y="680.81" className="st9" width="4.85" height="1.73"/>

		<polygon className="st9" points="144.58,681.68 144.58,680.81 145.44,680.81 145.44,678.42 145.44,677.58 144.09,677.58 
			144.09,678.42 142.8,678.42 142.8,677.58 141.39,677.58 141.39,678.42 141.39,680.81 142.21,680.81 142.21,681.68 142.21,682.55 
			141.39,682.55 141.39,684.94 141.39,685.78 142.8,685.78 142.8,684.94 144.09,684.94 144.09,685.78 145.44,685.78 145.44,684.94 
			145.44,682.55 144.58,682.55"/>
		<rect x="136.54" y="680.81" className="st9" width="4.85" height="1.73"/>
		<rect x="145.44" y="680.81" className="st9" width="4.85" height="1.73"/>

		<polygon className="st9" points="79.93,681.68 79.93,680.81 80.78,680.81 80.78,678.42 80.78,677.58 79.42,677.58 79.42,678.42 
			78.14,678.42 78.14,677.58 76.73,677.58 76.73,678.42 76.73,680.81 77.54,680.81 77.54,681.68 77.54,682.55 76.73,682.55 
			76.73,684.94 76.73,685.78 78.14,685.78 78.14,684.94 79.42,684.94 79.42,685.78 80.78,685.78 80.78,684.94 80.78,682.55 
			79.93,682.55"/>
		<rect x="71.88" y="680.81" className="st9" width="4.85" height="1.73"/>
		<rect x="80.78" y="680.81" className="st9" width="4.85" height="1.73"/>

	<rect x="16.13" y="680.81" className="st9" width="4.85" height="1.73"/>
	<polygon className="st9" points="385.9,280.88 385.9,281.72 384.62,281.72 384.62,280.88 383.21,280.88 383.21,281.72 383.2,284.11 
		383.2,286.51 383.2,287.35 384.62,287.35 384.62,286.51 385.9,286.51 385.9,287.35 387.26,287.35 387.26,286.51 387.26,284.12 
		387.26,281.72 387.26,280.88"/>
	<polygon className="st9" points="385.89,329.72 385.89,330.56 384.61,330.56 384.61,329.72 383.19,329.72 383.19,330.56 383.19,332.95 
		383.19,335.35 383.19,336.18 384.6,336.19 384.61,335.35 385.89,335.35 385.89,336.19 387.24,336.19 387.24,335.35 387.24,332.95 
		387.24,330.56 387.24,329.72"/>
	<polygon className="st9" points="531.61,329.82 531.61,330.66 530.33,330.66 530.33,329.82 528.91,329.82 528.91,330.66 528.91,333.05 
		528.91,335.44 528.91,336.28 530.32,336.28 530.33,335.44 531.61,335.44 531.61,336.28 532.96,336.28 532.96,335.44 532.96,333.05 
		532.96,330.66 532.96,329.82"/>
	<polygon className="st9" points="593.47,280.9 593.47,281.74 592.19,281.74 592.19,280.9 590.78,280.9 590.78,281.74 590.78,284.13 
		590.78,286.53 590.78,287.37 592.19,287.37 592.19,286.53 593.47,286.53 593.47,287.37 594.83,287.37 594.83,286.53 594.83,284.13 
		594.83,281.74 594.83,280.9"/>
		<line className="st11" x1="587.57" y1="287.07" x2="580.96" y2="287.07"/>

		<line className="st11" x1="575.76" y1="287.06" x2="569.14" y2="287.06"/>

		<line className="st11" x1="563.95" y1="287.06" x2="557.33" y2="287.06"/>

		<line className="st11" x1="552.13" y1="287.06" x2="545.52" y2="287.06"/>
		<line className="st11" x1="539.85" y1="287.05" x2="534.23" y2="287.05"/>

		<line className="st11" x1="587.57" y1="281.73" x2="580.96" y2="281.73"/>

		<line className="st11" x1="575.76" y1="281.73" x2="569.15" y2="281.73"/>
	
		<line className="st11" x1="563.95" y1="281.73" x2="557.33" y2="281.72"/>

		<line className="st11" x1="552.14" y1="281.72" x2="545.52" y2="281.72"/>

		<line className="st11" x1="539.85" y1="281.72" x2="534.23" y2="281.72"/>

		<polygon className="st9" points="402.86,677.64 402.86,678.48 401.57,678.48 401.57,677.63 400.16,677.63 400.16,678.48 
			400.16,680.87 400.98,680.87 404.21,680.87 404.21,678.48 404.21,677.64"/>
		<polygon className="st9" points="400.98,682.6 403.36,682.6 403.36,681.74 403.36,680.87 400.98,680.87 400.98,681.74"/>
		<polygon className="st9" points="400.16,684.99 400.16,685.83 401.57,685.83 401.57,684.99 402.86,684.99 402.86,685.83 
			404.21,685.83 404.21,684.99 404.21,682.6 400.16,682.6"/>

</g>
</svg>




{/* 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1339.4 2300" id="svgItem" ref={this.mapRef} >
            <g id="Center_Hall_Booths" data-name="Center Hall Booths">




              <Path handleBoothClick={this.handleBoothClick} selectedBooth={this.props.selectedBooth} d={"M953.13,1537.75l15.13-17.54,17.54,15.13-15.14,17.54Z"} booth={'600'} venid={123} textX={"953.13"} textY={"1537.75"} compName={'Agriserve'}/>

              <Path handleBoothClick={this.handleBoothClick} selectedBooth={this.props.selectedBooth} d={"M945.22,1503.32l-69-61.82L907.16,1407l69,61.82Z"} booth={'601'} venid={0} textX={"945.22"} textY={"1503.32"} compName={''}/>

              <Path handleBoothClick={this.handleBoothClick} selectedBooth={this.props.selectedBooth} d={"M968.23,1520.2l15.14-17.53,17.53,15.13-15.13,17.53Z"} booth={'602'} venid={123} textX={"945.22"} textY={"1503.32"} compName={'CLCA Insurance'} />
             
              <Path handleBoothClick={this.handleBoothClick} selectedBooth={this.props.selectedBooth} d={"M1000.9,1517.8l-17.53-15.14,15.13-17.53,17.54,15.13Z"} booth={'604'} venid={0} textX={"1000.9"} textY={"1517.8"} compName={''} />


              
              <text className="arenaBoothText" x="1000.9" y="1517.8">Booth</text>
              <path className="booth" d="M998.5,1485.13l15.13-17.54,17.54,15.13L1016,1500.26Z" transform="translate(0.25 -11.58)" data-booth="000" data-venid="0000" onClick={this.handleBoothClick} onHover={this.handleBoothHover}/>
              <path className="booth" d="M1013.67,1467.59l15.13-17.53,17.54,15.13-15.13,17.54Z" transform="translate(0.25 -11.58)" data-booth="608" data-venid="0000" onClick={this.handleBoothClick} onHover={this.handleBoothHover}/>
              <path className="booth" d="M1028.81,1450l15.13-17.54,17.53,15.13-15.13,17.54Z" transform="translate(0.25 -11.58)" data-booth="610" data-venid="0000" onClick={this.handleBoothClick} onHover={this.handleBoothHover}/>
              <path className="booth" d="M1057.77,1386.21l.49-23.15,23.16.48-.49,23.16-.75,5.27-5.79,22.43-22.43-5.8,5.79-22.42Z" transform="translate(0.25 -11.58)" data-booth="614" data-venid="0000" onClick={this.handleBoothClick} />
              <path className="booth" d="M1080.67,1357.53l-22.5,5.53-5.52-22.5,22.49-5.52Z" transform="translate(0.25 -11.58)" data-booth="618" data-venid="0000" onClick={this.handleBoothClick} onHover={this.handleBoothHover}/>
              <path className="booth" d="M1073.66,1331l-21,9.8-9.8-21,21-9.81Z" transform="translate(0.25 -11.58)" data-booth="629" data-venid="0000" onClick={this.handleBoothClick} onHover={this.handleBoothHover}/>
              <path className="booth" d="M1027.22,1302.5l17.36-15.33,15.33,17.36-17.36,15.33Z" transform="translate(0.25 -11.58)" data-booth="622" data-venid="0000" onClick={this.handleBoothClick} onHover={this.handleBoothHover}/>
              <path className="booth" d="M1009.68,1287.68l15.13-17.54,17.54,15.14-15.14,17.53Z" transform="translate(0.25 -11.58)" data-booth="624" data-venid="0000" onClick={this.handleBoothClick} onHover={this.handleBoothHover}/>
              <path className="booth" d="M992.25,1272.64l15.14-17.53,17.53,15.13-15.13,17.54Z" transform="translate(0.25 -11.58)" data-booth="626" data-venid="0000" onClick={this.handleBoothClick} onHover={this.handleBoothHover}/>
              <path className="booth" d="M974.79,1257.58,989.92,1240l17.54,15.13-15.13,17.54Z" transform="translate(0.25 -11.58)" data-booth="628" data-venid="0000" onClick={this.handleBoothClick} onHover={this.handleBoothHover}/>
              <path className="booth" d="M990,1240.14l-15.13,17.53-17.53-15.13-17.54-15.13L955,1209.87,972.5,1225Z" transform="translate(0.25 -11.58)" data-booth="630" data-venid="0000" onClick={this.handleBoothClick} onHover={this.handleBoothHover}/>
              
              
              
            </g>
           
          </svg> */}

        </div>
      </div>
    );
  }
}

export default Map;
