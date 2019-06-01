/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { Link } from "gatsby";
import { TweenMax, TimelineMax, Elastic, Bounce } from "gsap";
import MorphSVGPlugin from "../utils/morph_svg";
import './morph_logo.css';


class LogoMorph extends React.Component {

  constructor(props) {
    super(props);

    this.props = props;
    this.svgLogo = null;
    this.logoTextPath = null;
    this.logoIconPath = null;

    this.logoAnimationSvgStep1 = null;
    this.logoAnimationSvgStep2 = null;
    this.logoAnimationSvgStep3 = null;
    this.logoAnimationSvgStep4 = null;
    this.logoAnimationSvgStep5 = null;

    this.logoAnimationStep1 = null;
    this.logoAnimationStep2 = null;
    this.logoAnimationStep3 = null;
    this.logoAnimationStep4 = null;
    this.logoAnimationStep5 = null;

    this.timeLine = new TimelineMax({paused: true});

    this.getRandomColor = function() { return '#'+(Math.random()*0xFFFFFF<<0).toString(16);}

    const myVariables = [MorphSVGPlugin];
  }

  componentDidMount() {
		try {
      // workaround for tree shaking issues => https://github.com/greensock/GreenSock-JS/issues/290
			require("../utils/morph_svg")
		} catch (e) {
			console.error(e)
		}

    const rotation1 = 360;
    

    this.timeLine
      .to(this.logoAnimationStep1, 0, {scale: 0, fill: this.getRandomColor()})
      .to(this.logoAnimationStep1, 2, {scale: 3, fill: this.getRandomColor(), ease: Bounce.ease})
      .to(this.logoAnimationStep1, 2, {morphSVG:{shape:this.logoAnimationStep2, ease: Elastic.easeOut}}, '-=2')
      .to(this.logoAnimationStep1, 1, {scale: 1, x: Math.floor(Math.random() * Math.floor(160)), y: Math.floor(Math.random() * Math.floor(-30)), ease: Elastic.easeOut}, '-=2')

      .to(this.logoAnimationStep1, 1, {fill: this.getRandomColor(), scale: 1 + Math.floor(Math.random() * Math.floor(2.5)), x: Math.floor(Math.random() * Math.floor(50)), y: -75, ease: Bounce.ease})

      .to(this.logoAnimationStep1, 2, {fill: 'transparent', stroke: this.getRandomColor(), strokeWidth: (1 + Math.floor(Math.random() * Math.floor(5))) + 'px', scale: 1, x: 0, y: 0, ease: Elastic.easeOut})
      .to(this.logoAnimationStep1, 2, {morphSVG:{scale: 1, x: 40, y: -30, shape:this.logoAnimationStep3, ease: Elastic.easeOut}}, '-=2')
      .to(this.logoAnimationStep1, 2, {rotation: rotation1, scale: 2, x:50, y:-50, ease: Elastic.easeOut}, '-=2')


      .to(this.logoAnimationStep1, 1, {fill: this.getRandomColor(), strokeWidth: '0px', rotation: -rotation1, scale: 0.5, x:0, y:-60, ease: Bounce.ease})

      .to(this.logoAnimationStep1, 0.5, {morphSVG:{fill: this.getRandomColor(), shape:this.logoAnimationStep4, ease: Bounce.ease}})
      .to(this.logoAnimationStep1, 0.5, {x: -20, y: -10, ease: Bounce.ease}, '-=0.5')
      .to(this.logoAnimationStep1, 1, {scale: 0.7, ease: Bounce.ease}, '-=0.5')
      // .to(this.logoAnimationStep1, 3, {rotation: -(rotation1), x:0, y:0, ease: Elastic.ease}, '-=0.5')


      .to(this.logoAnimationStep1, 1, {morphSVG:{shape:this.logoAnimationStep5, ease: Elastic.easeOut}})
      .to(this.logoAnimationStep1, 2, {fill: "#00df7a", scale: 0.8, ease: Elastic.easeOut.config(1, 0.3)}, '-=1')

      .play();
  }

  handleEnter() {
    this.timeLine
      .to(this.logoAnimationStep1, 0.5, {morphSVG:{scale: 1, shape:this.logoAnimationStep4, ease: Elastic.easeOut}, ease: Bounce.ease})
  }

  handleLeave() {
    this.timeLine
      .to(this.logoAnimationStep1, 1, {fill: "#00df7a", scale: 0.8, ease: Elastic.easeOut.config(1, 0.3)})
      .to(this.logoAnimationStep1, 1, {morphSVG:{shape:this.logoAnimationStep5, ease: Elastic.easeOut}}, '-=1')

  }

  render() {
    return (
      <div className={`header__logo morph-logo`}>
        <div className='morph-logo__wrapper'>
          <Link to={`/`} className='morph-logo__link'>
            <svg onMouseEnter={this.handleEnter.bind(this)} onMouseLeave={this.handleLeave.bind(this)} ref={svg => this.logoAnimationSvgStep1 = svg} id='logo-animation-svg-step-1' className='morph-logo__stage' width="400px" height="400px" viewBox="0 0 400 400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <title>{this.props.title}</title>
                <desc>Created with Sketch.</desc>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="step-1">
                        <path ref={path => this.logoAnimationStep1 = path} id='logo-animation-step-1'  fill="#00df7a" d="M165,204a5,5 0 1,0 10,0a5,5 0 1,0 -10,0"></path>
                    </g>
                </g>
            </svg>    
            <h1 className='screenreader'>{this.props.title}</h1>
          </Link>
        </div>
        <div className='morph-logo__hidden-wrapper'>
          <svg ref={svg => this.logoAnimationSvgStep2 = svg} id='logo-animation-svg-step-2' className='morph-logo__target' width="400px" height="230px" viewBox="0 0 400 230" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <title>step 2</title>
              <desc>Created with Sketch.</desc>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="step-2">
                      <path  ref={path => this.logoAnimationStep2 = path} id='logo-animation-step-2' fill="#00df7a" d="M130,184a40,40 0 1,0 80,0a40,40 0 1,0 -80,0"></path>
                  </g>
              </g>
          </svg>

          <svg ref={svg => this.logoAnimationSvgStep3 = svg} id='logo-animation-svg-step-3' className='morph-logo__target' width="400px" height="230px" viewBox="0 0 400 230" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <title>step 3</title>
              <desc>Created with Sketch.</desc>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="step-3">
                      <path ref={path => this.logoAnimationStep3 = path} id='logo-animation-step-3' d="M105.330532,179.251173 C128.76384,229.249048 192.007475,244.218705 237.452121,210.524802 C248.42857,202.387425 217.286424,174.605417 208.408843,180.34687 C186.655604,194.401011 155.859211,186.151629 144.249692,163.15173 C139.569848,153.879698 98.3278098,164.305865 105.330532,179.251173 Z" id="path1-copy-12" fill="#00df7a"></path>
                  </g>
              </g>
          </svg>


          <svg ref={svg => this.logoAnimationSvgStep4 = svg} id='logo-animation-svg-step-4' className='morph-logo__target' width="400px" height="230px" viewBox="0 0 400 230" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <title>step 4</title>
              <desc>Created with Sketch.</desc>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="step-4">
                      <path ref={path => this.logoAnimationStep4 = path} id='logo-animation-step-4' d="M96.8571408,24 L96.4529503,29 L96.4529503,36 L96.4529503,43.4772602 L96.4529503,58.3446521 L96.4529503,73.2169139 L96.4529503,78 L96.4529503,84 L96.4529503,89 L96.4529503,95.200595 L96.4529503,98.8460422 L96.4529503,106.369091 L96.8571408,115.851705 L96.603913,131.556696 C96.2630295,153.00801 98.3278098,164.305865 105.330532,179.251173 C128.76384,229.249048 192.007475,244.218705 237.452121,210.524802 C248.42857,202.387425 255.124497,194.863639 272.490078,171.181972 L288.998581,148.65931 C290.096602,147.185316 290.91024,146.092953 291.439494,145.382223 C292.557469,143.880905 293.636263,142.431679 294.675877,141.034545 C295.79068,139.536364 296.860429,138.098083 297.885126,136.719701 C299.142063,135.028917 300.331212,133.428261 301.452572,131.917732 C302.700997,130.23604 303.865399,128.666058 304.945779,127.207786 C306.288394,125.395556 307.501247,123.755847 308.584339,122.288659 C313.046517,116.244066 315.306233,113.127708 315.363488,112.939585 C315.460883,112.618181 333.074822,88.2157895 354.511527,58.7050147 C375.943362,29.19424 394.078366,4.13930009 394.803961,3.02899371 L396.128537,1.00804131 L370.270086,1.0372599 L344.406765,1.06647849 L316.858505,39.2697834 C305.174541,55.4753984 289.997686,76.2500302 276.113944,95.200595 C275.217701,96.4239185 274.326847,97.6396408 273.442669,98.8460422 C272.645912,99.9331636 271.854576,101.012716 271.069603,102.083441 C270.009746,103.529116 268.96149,104.958698 267.927153,106.369091 C266.96593,107.679786 266.016728,108.973909 265.081408,110.248974 C264.28596,111.333359 263.500553,112.40396 262.72633,113.459248 C261.961246,114.502079 261.207085,115.529956 260.464951,116.541402 C259.518767,117.830946 258.592134,119.093784 257.68734,120.326856 C249.991816,130.814484 243.87616,139.148938 240.748951,143.448662 C221.985747,169.248676 217.286424,174.605417 208.408843,180.34687 C186.655604,194.401011 155.859211,186.151629 144.249692,163.15173 C139.569848,153.879698 139.652634,155.369846 139.12183,75.325522 C138.853992,34.7360324 138.542328,1.43658062 138.435193,1.32457603 C138.376346,1.26572956 130.940535,1.1348912 119.293647,0.978060347 C109.73642,0.849367765 110.479036,1.20475878 97,1.06647849 L97,12 L97,18 L96.8571408,24 Z" id="path1-copy-11" fill="#00df7a"></path>
                  </g>
              </g>
          </svg>

          <svg ref={svg => this.logoAnimationSvgStep5 = svg} id='logo-animation-svg-step-5' className='morph-logo__target' width="400px" height="230px" viewBox="0 0 400 230" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <title>step 5</title>
              <desc>Created with Sketch.</desc>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="step-5">
                      <path ref={path => this.logoAnimationStep5 = path} id='logo-animation-step-5' d="M0.00238855775,41.7290146 C-0.143704386,42.0991168 6.4304781,42.4010422 14.611683,42.4010422 C22.7977576,42.4010422 44.5607365,42.6445304 62.9733173,42.9367163 L96.4529503,43.4772602 L96.4529503,58.3446521 L96.4529503,73.2169139 L74.3636972,73.4311835 L52.2695742,73.6454532 L40.2802133,90.2854395 C33.6865517,99.4357276 26.7666159,109.072992 24.9063658,111.702665 L21.526749,116.479904 L59.18951,116.16337 L96.8571408,115.851705 L96.603913,131.556696 C96.2630295,153.00801 98.3278098,164.305865 105.330532,179.251173 C128.76384,229.249048 192.007475,244.218705 237.452121,210.524802 C248.42857,202.387425 255.124497,194.863639 272.490078,171.181972 L288.998581,148.65931 L296.410363,158.759202 C300.486356,164.315604 313.683419,182.387301 325.736087,198.925023 L347.650028,228.99582 L373.825014,229.034778 C388.224909,229.054257 400,228.888685 400,228.659806 C400,228.435797 389.125815,213.548926 375.836227,195.589234 C323.237897,124.495537 315.193046,113.499608 315.363488,112.939585 C315.460883,112.618181 333.074822,88.2157895 354.511527,58.7050147 C375.943362,29.19424 394.078366,4.13930009 394.803961,3.02899371 L396.128537,1.00804131 L370.270086,1.0372599 L344.406765,1.06647849 L316.858505,39.2697834 C291.842524,73.9668576 289.21772,77.3318651 288.224288,75.9634612 C287.620438,75.1356012 274.998007,57.9404617 260.169573,37.7504168 L233.210555,1.04212967 L207.084267,1.02265061 L180.957979,1.00804131 L210.692763,41.7923216 C227.050303,64.2224583 245.467753,89.4867981 251.628006,97.9309703 L262.818725,113.285339 L260.934126,115.788398 C259.896867,117.161671 250.814755,129.60879 240.748951,143.448662 C221.985747,169.248676 217.286424,174.605417 208.408843,180.34687 C186.655604,194.401011 155.859211,186.151629 144.249692,163.15173 C139.569848,153.879698 139.652634,155.369846 139.12183,75.325522 C138.853992,34.7360324 138.542328,1.43658062 138.435193,1.32457603 C138.328058,1.2174412 113.769834,0.8716879 83.8646083,0.564892718 L29.4936842,0 L14.8843898,20.5309284 C6.84927788,31.8190432 0.153351267,41.3589125 0.00238855775,41.7290146 Z" id="path1-copy-10" fill="#00df7a"></path>
                  </g>
              </g>
          </svg>
        </div>
      </div>
    )
  }
}

export default LogoMorph;

// <svg width="399px" height="50px" viewBox="0 0 399 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
//   <title>f initial</title>
//   <desc>Created with Sketch.</desc>
//   <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
//     <g id="f-initial" fill="#ffffff">
//       <path ref={svg => this.logoAnimationStep1 = svg} id='logo-animation-step-1' points="1.77635684e-14 0.995 1.77635684e-15 9.75 9 9.75 9 0.995" stroke='#00df7a' strokeWidth='2px'></path>
//     </g>
//   </g>
// </svg>
