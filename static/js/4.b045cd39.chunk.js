(this["webpackJsonpcolors-test"]=this["webpackJsonpcolors-test"]||[]).push([[4],{480:function(e,r,o){"use strict";o.d(r,"a",(function(){return t}));var t=o(30).c.div.withConfig({componentId:"sc-1m4jlzw-0"})(["width:960px;margin:0 auto;padding:0 1.5rem;box-sizing:content-box;"])},487:function(e,r,o){"use strict";o.r(r),o.d(r,"HomePage",(function(){return R}));var t=o(0),a=o.n(t),n=o(106),l=o(30),i=l.c.h1.withConfig({componentId:"dbqn26-0"})(["font-size:15px;font-weight:bold;color:",";margin:1rem 0;"],(function(e){return e.theme.text})),c=o(48),h=o(108);var u,s=o(486),d=Object(t.memo)((function(e){var r=e.ratio;Object(s.a)(e,["ratio"]);return a.a.createElement("h4",null,"Contrast Ratio is: ",r)})),m=o(68),b={headerColor:"#000000",headerComputedColors:{},headerRatio:"1",textColor:"#000000",colorsVariation:{high:1.5,medium:1,low:.5,bypass:!0}},C=o(481),g=(u={name:"Picker",initialState:b,reducers:{changeColorVariation:function(e,r){e.colorsVariation.bypass=!1,e.colorsVariation[r.payload.key]=r.payload.value},useDefaultColorVariation:function(e){e.colorsVariation.bypass=!0},changeColor:function(e,r){e.headerColor=r.payload,e.headerRatio=C.contrast(r.payload,"#ffffff");var o=Number(e.headerRatio),t=e.colorsVariation.high,a=e.colorsVariation.medium,n=e.colorsVariation.low;o<=1.34&&(e.textColor=C("gray").luminance(0).hex(),e.colorsVariation.bypass&&(e.colorsVariation.low=.25,e.colorsVariation.medium=.5,e.colorsVariation.high=.75,t=e.colorsVariation.high,a=e.colorsVariation.medium,n=e.colorsVariation.low),e.headerComputedColors={buttonStatus:e.headerColor,buttonStatusHover:C(e.headerColor).darken(n).hex(),buttonStatusPressed:C(e.headerColor).darken(a).hex(),searchBar:C(e.headerColor).darken(n).hex(),searchBarHover:C(e.headerColor).darken(a).hex(),searchBarPressed:C(e.headerColor).darken(t).hex(),buttonDevice:e.headerColor,buttonDeviceHover:C(e.headerColor).darken(n).hex(),buttonDevicePressed:C(e.headerColor).darken(a).hex(),buttonPlus:e.headerColor,buttonPlusHover:C(e.headerColor).darken(n).hex(),buttonPlusPressed:C(e.headerColor).darken(a).hex()}),o>1.34&&o<=4.75&&(e.textColor=C("gray").luminance(0).hex(),e.colorsVariation.bypass&&(e.colorsVariation.low=.4,e.colorsVariation.medium=.8,e.colorsVariation.high=.8,t=e.colorsVariation.high,a=e.colorsVariation.medium,n=e.colorsVariation.low),e.headerComputedColors={buttonStatus:e.headerColor,buttonStatusHover:C(e.headerColor).brighten(n).hex(),buttonStatusPressed:C(e.headerColor).brighten(a).hex(),searchBar:C(e.headerColor).brighten(n).hex(),searchBarHover:C(e.headerColor).brighten(n).hex(),searchBarPressed:C(e.headerColor).brighten(a).hex(),buttonDevice:e.headerColor,buttonDeviceHover:C(e.headerColor).brighten(n).hex(),buttonDevicePressed:C(e.headerColor).brighten(a).hex(),buttonPlus:e.headerColor,buttonPlusHover:C(e.headerColor).brighten(n).hex(),buttonPlusPressed:C(e.headerColor).brighten(a).hex()}),o>4.75&&o<11.25&&(e.colorsVariation.bypass&&(e.colorsVariation.low=.4,e.colorsVariation.medium=.8,e.colorsVariation.high=.8,t=e.colorsVariation.high,a=e.colorsVariation.medium,n=e.colorsVariation.low),e.textColor=C("gray").luminance(.95).hex(),e.headerComputedColors={buttonStatus:e.headerColor,buttonStatusHover:C(e.headerColor).darken(n).hex(),buttonStatusPressed:C(e.headerColor).darken(a).hex(),searchBar:C(e.headerColor).brighten(n).hex(),searchBarHover:C(e.headerColor).darken(n).hex(),searchBarPressed:C(e.headerColor).darken(a).hex(),buttonDevice:e.headerColor,buttonDeviceHover:C(e.headerColor).darken(n).hex(),buttonDevicePressed:C(e.headerColor).darken(a).hex(),buttonPlus:e.headerColor,buttonPlusHover:C(e.headerColor).darken(n).hex(),buttonPlusPressed:C(e.headerColor).darken(a).hex()}),o>=11.25&&(e.colorsVariation.bypass&&(e.colorsVariation.low=.5,e.colorsVariation.medium=1,e.colorsVariation.high=1.5,t=e.colorsVariation.high,a=e.colorsVariation.medium,n=e.colorsVariation.low),e.textColor=C("gray").luminance(.95).hex(),e.headerComputedColors={buttonStatus:e.headerColor,buttonStatusHover:C(e.headerColor).brighten(n).hex(),buttonStatusPressed:C(e.headerColor).brighten(a).hex(),searchBar:C(e.headerColor).brighten(n).hex(),searchBarHover:C(e.headerColor).brighten(a).hex(),searchBarPressed:C(e.headerColor).brighten(t).hex(),buttonDevice:e.headerColor,buttonDeviceHover:C(e.headerColor).brighten(n).hex(),buttonDevicePressed:C(e.headerColor).brighten(a).hex(),buttonPlus:e.headerColor,buttonPlusHover:C(e.headerColor).brighten(n).hex(),buttonPlusPressed:C(e.headerColor).brighten(a).hex()})}}},Object(m.b)(u)),x=g.actions,p=g.reducer,f=g.name,v=o(482),V=o.n(v),k=o(41),P=function(e){return e.Picker||b},E=Object(k.a)([P],(function(e){return e.headerColor})),y=Object(k.a)([P],(function(e){return e.headerRatio})),w=Object(k.a)([P],(function(e){return e.headerComputedColors})),H=Object(k.a)([P],(function(e){return e.textColor})),j=Object(k.a)([P],(function(e){return e.colorsVariation}));function O(){var e;e={key:f,reducer:p},Object(h.b)(e);o(481);var r=Object(c.c)(),t=Object(c.d)(E),n=Object(c.d)(y),l=Object(c.d)(w),u=Object(c.d)(j),s=Object(c.d)(H),m=V()((function(e){r(x.changeColor(e))}),200),b=function(e,o){r(x.changeColorVariation({value:e.currentTarget.value,key:o})),r(x.changeColor(t))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Color tester"),a.a.createElement(S,null,a.a.createElement(i,{as:"h2"},"1. Select a color"),a.a.createElement("input",{type:"color",value:t,onChange:function(e){return m(e.currentTarget.value)}})),a.a.createElement(S,null,a.a.createElement(i,{as:"h2"},"2. Select variation ratios (for darken / brighten calculations)"),"low: ",a.a.createElement("input",{type:"text",onChange:function(e){return b(e,"low")},value:u.low}),a.a.createElement("br",null),a.a.createElement("br",null),"medium: ",a.a.createElement("input",{type:"text",onChange:function(e){return b(e,"medium")},value:u.medium}),a.a.createElement("br",null),a.a.createElement("br",null),"high: ",a.a.createElement("input",{type:"text",onChange:function(e){return b(e,"high")},value:u.high})),a.a.createElement(S,null,a.a.createElement(i,{as:"h2"},"OR: Use default values (click any time to reset)"),a.a.createElement("button",{onClick:function(){r(x.useDefaultColorVariation()),r(x.changeColor(t))}},"Use Defaults")),a.a.createElement(S,null,a.a.createElement(i,{as:"h2"},"Results:"),a.a.createElement(d,{ratio:n}),Object.keys(l).map((function(e){return a.a.createElement(D,{key:e,txtcolor:s,bgcolor:l[e]},e)}))))}var D=l.c.div.withConfig({componentId:"sc-6re40l-0"})(["display:block;float:left;position:relative;width:200px;height:50px;margin-right:5px;margin-top:5px;color:",";text-align:center;background:",""],(function(e){return e.txtcolor}),(function(e){return e.bgcolor})),S=(l.c.li.withConfig({componentId:"sc-6re40l-1"})(["display:flex;margin:6.25rem 0 6.25rem 2.25rem;.feature-icon{width:6.25rem;height:6.25rem;margin-right:2.25rem;flex-shrink:0;}"]),l.c.div.withConfig({componentId:"sc-6re40l-2"})(["flex:1;"])),B=(l.c.ul.withConfig({componentId:"sc-6re40l-3"})(["padding:0;margin:6.25rem 0 0 0;"]),o(480));function R(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(n.a,null,a.a.createElement("title",null,"Home Page"),a.a.createElement("meta",{name:"description",content:"A React Boilerplate application homepage"})),a.a.createElement(B.a,null,a.a.createElement(O,null)))}}}]);