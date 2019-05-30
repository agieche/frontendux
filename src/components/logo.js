/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { Link } from "gatsby";
import { TimelineMax, Bounce } from "gsap"
import './logo.css';

class Logo extends React.Component {

  constructor(props) {
    super(props);

    this.svgLogo = null;
    this.logoTextPath = null;
    this.logoIconPath = null;

    this.timeLine = new TimelineMax({paused: true});
  }

  componentDidMount() {
		try {
      // workaround for tree shaking issues => https://github.com/greensock/GreenSock-JS/issues/290
			require("../utils/draw_svg")
		} catch (e) {
			console.error(e)
		}

    this.timeLine
      .to('#' + this.logoIconPath.id, 0, {drawSVG: '0%'})
      .to('#' + this.logoTextPath.id, 0, {stroke: 'transparent', fill: 'transparent'})
      .to('#' + this.logoIconPath.id, 0, {stroke: '#00df7a'})
      .to('#' + this.logoIconPath.id, 2, {delay: 0.5, drawSVG: '100%', ease: Bounce.ease})
      .to('#' + this.logoIconPath.id, 1, {fill: '#00df7a', ease: Bounce.ease})
      .to('#' + this.logoIconPath.id, 1, {stroke: 'transparent',  ease: Bounce.ease})
      .to('#' + this.logoTextPath.id, 5, {fill: '#ffffff'}, '-=1')
      .play();
  }

  render() {
    return (
      <div className={`header__logo logo ${ this.props.invertLogo ? 'logo--inverted' : ''}`}>
        <div className='logo__wrapper'>
          <Link to={`/`} className='logo__link'>
            <svg ref={svg => this.svgLogo = svg} id='logo-svg' width="399px" height="50px" viewBox="0 0 399 50" className='logo__stage' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <title>fux_1</title>
                <desc>Created with Sketch.</desc>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="fux_1">
                        <path ref={path => this.logoTextPath = path} className='logo__text' stroke='transparent' strokeWidth='1px' d="M95.25,8.067 C92.184,9.039 91.122,10.626 91.03,14.375 L90.969,16.833 L89.151,16.833 L87.333,16.833 L87.333,18.333 L87.333,19.833 L89.167,19.833 L91,19.833 L91,29.75 L91,39.667 L92.75,39.667 L94.5,39.667 L94.5,29.75 L94.5,19.833 L97.083,19.833 L99.667,19.833 L99.667,18.333 L99.667,16.833 L97.066,16.833 L94.465,16.833 L94.527,14.875 C94.63,11.596 96.369,10.274 99.338,11.217 C99.759,11.351 100.877,8.809 100.596,8.354 C100.289,7.857 96.545,7.656 95.25,8.067 M249,14.833 C249,20.851 248.995,20.886 248.301,19.791 C245.037,14.643 236.706,15.736 233.759,21.699 C231.474,26.322 232.022,33.321 234.943,36.84 C238.595,41.238 245.397,41.316 248.172,36.991 C248.999,35.703 249.167,35.86 249.167,37.917 L249.167,39.667 L250.833,39.667 L252.5,39.667 L252.5,24.417 L252.5,9.167 L250.75,9.167 L249,9.167 L249,14.833 M260,20.075 C260,27.397 260.061,31.274 260.184,31.867 C261.092,36.22 265.113,39.583 270.042,40.111 L271,40.214 L271,38.519 C271,37.303 270.941,36.807 270.792,36.766 C270.677,36.735 270.149,36.629 269.619,36.529 C267.295,36.094 264.964,34.259 264.141,32.22 L263.75,31.25 L263.704,20.208 L263.658,9.167 L261.829,9.167 L260,9.167 L260,20.075 M280,19.658 C280,26.697 279.939,30.441 279.815,31.033 C279.266,33.658 277.04,35.826 274.208,36.494 L273.333,36.7 L273.333,38.441 L273.333,40.182 L273.958,40.074 C279.043,39.201 282.421,36.271 283.399,31.884 C283.63,30.85 283.667,29.193 283.667,19.925 L283.667,9.167 L281.833,9.167 L280,9.167 L280,19.658 M288.667,9.249 C288.667,9.337 291.57,13.877 295.789,20.385 C297.204,22.568 298.326,24.445 298.283,24.557 C298.24,24.668 297.621,25.657 296.907,26.755 C293.914,31.356 288.667,39.534 288.667,39.598 C288.667,39.636 289.623,39.666 290.792,39.664 L292.917,39.662 L296.849,33.456 C299.012,30.043 300.841,27.25 300.914,27.25 C300.986,27.25 301.693,28.277 302.486,29.532 C303.278,30.788 303.971,31.86 304.026,31.915 C304.082,31.971 304.592,31.219 305.161,30.246 L306.196,28.476 L304.921,26.465 L303.647,24.453 L304.383,23.268 C304.788,22.616 306.93,19.212 309.143,15.704 C311.356,12.195 313.167,9.289 313.167,9.245 C313.167,9.202 312.21,9.167 311.042,9.168 L308.917,9.17 L305.333,14.936 C303.362,18.108 301.604,20.957 301.426,21.268 C301.247,21.579 301.022,21.832 300.926,21.831 C300.779,21.828 297.876,17.257 293.81,10.626 L292.917,9.17 L290.792,9.168 C289.623,9.167 288.667,9.204 288.667,9.249 M344.833,14.833 C344.833,20.634 344.804,20.894 344.253,19.958 C341.13,14.66 332.543,15.661 329.61,21.667 C327.734,25.509 327.726,31.066 329.592,34.945 C332.462,40.913 340.871,42.044 344.121,36.9 C344.853,35.74 345,35.91 345,37.917 L345,39.667 L346.667,39.667 L348.333,39.667 L348.333,24.417 L348.333,9.167 L346.583,9.167 L344.833,9.167 L344.833,14.833 M170.833,14.083 L170.833,16.833 L169.083,16.833 L167.333,16.833 L167.333,18.333 L167.333,19.833 L169.077,19.833 L170.821,19.833 L170.869,27.875 L170.917,35.917 L171.366,36.768 C172.614,39.133 175.664,40.44 178.542,39.842 C179.645,39.613 179.629,39.659 179.215,37.815 L178.93,36.547 L177.59,36.565 C174.4,36.607 174.333,36.413 174.333,27.131 L174.333,19.833 L176.75,19.833 L179.167,19.833 L179.167,18.333 L179.167,16.833 L176.75,16.833 L174.333,16.833 L174.333,14.083 L174.333,11.333 L172.583,11.333 L170.833,11.333 L170.833,14.083 M111.985,16.816 C110.366,17.334 108.938,18.56 108.275,20 C108.114,20.35 108.076,20.129 108.036,18.625 L107.989,16.833 L106.244,16.833 L104.5,16.833 L104.5,28.25 L104.5,39.667 L106.242,39.667 L107.985,39.667 L108.038,31.875 C108.098,23.113 108.086,23.206 109.355,21.765 C110.525,20.435 111.863,19.917 114.122,19.917 L116,19.917 L116,18.208 L116,16.5 L114.458,16.509 C113.458,16.515 112.589,16.623 111.985,16.816 M127.25,16.605 C121.755,17.458 118.583,21.751 118.584,28.333 C118.585,35.608 122.567,40.167 128.918,40.167 C135.101,40.167 139.088,35.524 139.08,28.333 C139.072,20.53 134.049,15.55 127.25,16.605 M152.898,16.748 C151.061,17.148 149.569,18.171 148.725,19.611 C148.104,20.67 148,20.523 148,18.583 L148,16.833 L146.333,16.833 L144.667,16.833 L144.667,28.25 L144.667,39.667 L146.417,39.667 L148.167,39.667 L148.167,32.03 C148.167,23.787 148.183,23.61 149.091,22.16 C151.279,18.664 157.038,18.891 158.686,22.537 L159.083,23.417 L159.131,31.542 L159.179,39.667 L160.931,39.667 L162.683,39.667 L162.629,31.042 C162.569,21.527 162.592,21.74 161.428,19.754 C159.936,17.208 156.443,15.977 152.898,16.748 M191.333,16.737 C180.867,18.944 180.23,36.491 190.5,39.694 C195.491,41.25 201.706,38.766 202.901,34.737 C202.995,34.42 199.835,33.255 199.598,33.52 C199.567,33.555 199.388,33.883 199.202,34.25 C197.721,37.16 192.656,37.938 189.605,35.724 C188.108,34.637 187.119,32.8 186.86,30.625 L186.726,29.5 L195.053,29.5 L203.38,29.5 L203.286,27.208 C202.979,19.68 198.011,15.329 191.333,16.737 M217.065,16.748 C215.24,17.145 213.819,18.113 212.882,19.596 C212.226,20.635 212.167,20.551 212.167,18.583 L212.167,16.833 L210.417,16.833 L208.667,16.833 L208.667,28.25 L208.667,39.667 L210.494,39.667 L212.321,39.667 L212.369,31.708 L212.417,23.75 L212.879,22.81 C214.91,18.675 221.013,18.582 222.899,22.658 C223.238,23.392 223.252,23.685 223.298,31.542 L223.345,39.667 L225.098,39.667 L226.85,39.667 L226.796,31.042 C226.736,21.527 226.758,21.74 225.594,19.754 C224.102,17.208 220.61,15.977 217.065,16.748 M362.268,16.774 C355.315,18.264 351.967,27.728 355.798,35.063 C359.221,41.616 370.337,41.906 373.569,35.528 C373.806,35.06 374,34.61 374,34.528 C374,34.408 371.176,33.5 370.801,33.5 C370.744,33.5 370.505,33.83 370.268,34.234 C367.055,39.717 357.833,36.676 357.833,30.132 L357.833,29.5 L366.104,29.5 L374.375,29.5 L374.289,27.125 C374.014,19.574 369.068,15.315 362.268,16.774 M378.08,17.125 C378.144,17.285 379.768,21.654 381.69,26.833 C383.611,32.012 385.464,37 385.807,37.917 L386.43,39.583 L388.256,39.583 L390.081,39.583 L390.695,37.917 C391.033,37 392.919,31.9 394.886,26.583 L398.463,16.917 L396.609,16.869 C395.589,16.843 394.729,16.881 394.698,16.953 C394.667,17.024 393.241,21.09 391.529,25.988 C389.817,30.885 388.342,34.915 388.25,34.944 C388.158,34.973 386.967,31.754 385.602,27.79 C384.238,23.826 382.824,19.74 382.46,18.708 L381.799,16.833 L379.881,16.833 C378.123,16.833 377.974,16.857 378.08,17.125 M131.559,20.218 C137.022,22.718 137.12,33.702 131.703,36.369 C127.663,38.358 123.273,35.896 122.25,31.069 C120.662,23.572 125.801,17.582 131.559,20.218 M195.917,20.069 C198.082,20.977 199.429,22.897 199.754,25.542 L199.872,26.5 L193.362,26.5 C189.782,26.5 186.821,26.444 186.782,26.375 C186.443,25.778 187.637,22.886 188.697,21.736 C190.423,19.864 193.649,19.119 195.917,20.069 M245.226,20.231 C250.484,22.803 250.354,33.923 245.036,36.519 C243.718,37.162 241.267,37.092 239.798,36.369 C234.162,33.596 234.587,21.901 240.392,19.999 C241.861,19.518 243.977,19.62 245.226,20.231 M341.066,20.234 C346.293,22.792 346.271,33.878 341.034,36.45 C339.033,37.433 336,37.014 334.298,35.52 C331.045,32.664 330.768,24.989 333.797,21.637 C335.546,19.7 338.722,19.087 341.066,20.234 M367.219,20.215 C369.305,21.169 370.833,23.661 370.833,26.106 L370.833,26.5 L364.312,26.5 L357.791,26.5 L357.874,25.708 C358.344,21.241 363.211,18.379 367.219,20.215 M306.555,32.595 L305.538,34.357 L307.22,37.012 L308.902,39.667 L311.04,39.667 C313.139,39.667 313.175,39.66 312.997,39.328 C312.637,38.655 307.962,31.245 307.769,31.042 C307.614,30.879 307.352,31.215 306.555,32.595 M319.486,34.654 C316.577,35.571 317.107,39.845 320.134,39.882 C323.466,39.922 323.794,35.112 320.494,34.607 C320.177,34.558 319.723,34.579 319.486,34.654" id="logo-text-path" fill="transparent"></path>
                        <path ref={path => this.logoIconPath = path} className='logo__icon' stroke='transparent' strokeWidth='2px' d="M3.25,5.176 C1.6,7.494 0.225,9.453 0.194,9.529 C0.164,9.605 1.514,9.667 3.194,9.667 C4.875,9.667 9.344,9.717 13.125,9.777 L20,9.888 L20,12.941 L20,15.995 L15.464,16.039 L10.927,16.083 L8.465,19.5 C7.111,21.379 5.69,23.358 5.308,23.898 L4.614,24.879 L12.348,24.814 L20.083,24.75 L20.031,27.975 C19.961,32.38 20.385,34.7 21.823,37.769 C26.635,48.036 39.622,51.11 48.954,44.191 C51.208,42.52 52.583,40.975 56.149,36.112 L59.539,31.487 L61.061,33.561 C61.898,34.702 64.608,38.413 67.083,41.809 L71.583,47.984 L76.958,47.992 C79.915,47.996 82.333,47.962 82.333,47.915 C82.333,47.869 80.1,44.812 77.371,41.124 C66.57,26.525 64.918,24.267 64.953,24.152 C64.973,24.086 68.59,19.075 72.992,13.015 C77.393,6.955 81.117,1.81 81.266,1.582 L81.538,1.167 L76.228,1.173 L70.917,1.179 L65.26,9.024 C60.123,16.149 59.584,16.84 59.38,16.559 C59.256,16.389 56.664,12.858 53.619,8.712 L48.083,1.174 L42.718,1.17 L37.353,1.167 L43.459,9.542 C46.818,14.148 50.6,19.336 51.865,21.07 L54.163,24.223 L53.776,24.737 C53.563,25.019 51.698,27.575 49.631,30.417 C45.778,35.715 44.813,36.815 42.99,37.994 C38.523,40.88 32.199,39.186 29.815,34.463 C28.854,32.559 28.871,32.865 28.762,16.428 C28.707,8.093 28.643,1.255 28.621,1.232 C28.599,1.21 23.556,1.139 17.415,1.076 L6.25,0.96 L3.25,5.176" id="path1" fill="transparent"></path>
                    </g>
                </g>
            </svg>
          </Link>
        </div>
      </div>
    )
  }
}

export default Logo
