webpackJsonp([0],{

/***/ 2470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsx=function(){var REACT_ELEMENT_TYPE=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||0xeac7;return function createRawReactElement(type,props,key,children){var defaultProps=type&&type.defaultProps;var childrenLength=arguments.length-3;if(!props&&childrenLength!==0){props={};}if(props&&defaultProps){for(var propName in defaultProps){if(props[propName]===void 0){props[propName]=defaultProps[propName];}}}else if(!props){props=defaultProps||{};}if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+3];}props.children=childArray;}return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:key===undefined?null:''+key,ref:null,props:props,_owner:null};};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactPerfectScrollbar=__webpack_require__(505);var _reactPerfectScrollbar2=_interopRequireDefault(_reactPerfectScrollbar);var _Absolute=__webpack_require__(199);var _Absolute2=_interopRequireDefault(_Absolute);var _zones=__webpack_require__(2480);var _DashboardMainRoutes=__webpack_require__(2491);var _DashboardMainRoutes2=_interopRequireDefault(_DashboardMainRoutes);var _DashboardHeaderRoutes=__webpack_require__(2499);var _DashboardHeaderRoutes2=_interopRequireDefault(_DashboardHeaderRoutes);var _DashboardAsideRoutes=__webpack_require__(2500);var _DashboardAsideRoutes2=_interopRequireDefault(_DashboardAsideRoutes);var _DashboardMainPanelLeftRoutes=__webpack_require__(2506);var _DashboardMainPanelLeftRoutes2=_interopRequireDefault(_DashboardMainPanelLeftRoutes);var _DashboardMainPanelRightRoutes=__webpack_require__(2507);var _DashboardMainPanelRightRoutes2=_interopRequireDefault(_DashboardMainPanelRightRoutes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}/* ------------------------- External Dependencies -------------------------- *//* ------------------------- Internal Dependencies -------------------------- *//*--- Zones ---*//*--- Routes ---*//* ---------------------------- Module Package ------------------------------ */var _ref2=_jsx(_DashboardHeaderRoutes2.default,{});var _ref3=_jsx(_reactPerfectScrollbar2.default,{},void 0,_jsx(_DashboardMainPanelLeftRoutes2.default,{}));var _ref4=_jsx(_reactPerfectScrollbar2.default,{},void 0,_jsx(_DashboardMainRoutes2.default,{}));var _ref5=_jsx(_reactPerfectScrollbar2.default,{},void 0,_jsx(_DashboardMainPanelRightRoutes2.default,{}));var _ref6=_jsx(_reactPerfectScrollbar2.default,{},void 0,_jsx(_DashboardAsideRoutes2.default,{}));exports.default=function(_ref){var zones=_ref.zones,header=_ref.header,main=_ref.main,aside=_ref.aside,props=_objectWithoutProperties(_ref,['zones','header','main','aside']);return _jsx(_Absolute2.default,{left:true,right:true,top:true,bottom:true,of:'hidden'},void 0,!zones.header?null:_react2.default.createElement(_zones.DashboardHeader,header.layout,_ref2),!zones.main?null:_react2.default.createElement(_zones.DashboardMain,_extends({},main.layout,{h:'100vh'}),!zones.panelLeft?null:_react2.default.createElement(_zones.DashboardMainPanelLeft,main.regions.panelLeft.layout,_ref3),!zones.mainContent?null:_react2.default.createElement(_zones.DashboardMainContent,main.regions.content.layout,_ref4),!zones.panelRight?null:_react2.default.createElement(_zones.DashboardMainPanelRight,main.regions.panelRight.layout,_ref5)),!zones.aside?null:_react2.default.createElement(_zones.DashboardAside,_extends({},aside.layout,{left:'unset'}),_ref6));};module.exports=exports['default'];

/***/ }),

/***/ 2471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/* ------------------------- External Dependencies -------------------------- */var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _particles=__webpack_require__(29);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* ---------------------------- Module Package ------------------------------ */exports.default=function(props){return _react2.default.createElement(_particles.Absolute,_extends({is:'aside',bs:2,top:true,bottom:true,right:true,left:true},props,props.layout));};module.exports=exports['default'];

/***/ }),

/***/ 2472:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/* ------------------------- External Dependencies -------------------------- */var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _particles=__webpack_require__(29);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* ---------------------------- Module Package ------------------------------ */exports.default=function(props){return _react2.default.createElement(_particles.Absolute,_extends({is:'header',bs:2,top:true,right:true,left:true},props,props.layout));};module.exports=exports['default'];

/***/ }),

/***/ 2473:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _templateObject=_taggedTemplateLiteral(['\n  overflow: hidden;\n'],['\n  overflow: hidden;\n']);var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _styledComponents=__webpack_require__(19);var _styledComponents2=_interopRequireDefault(_styledComponents);var _particles=__webpack_require__(29);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}/* ------------------------- External Dependencies -------------------------- *//* ------------------------- Internal Dependencies -------------------------- */var DashboardMainStyled=(0,_styledComponents2.default)(_particles.Flex)(_templateObject);DashboardMainStyled.defaultProps={is:'main',justify:'space-evenly'/* ---------------------------- Module Package ------------------------------ */};exports.default=function(props){return _react2.default.createElement(DashboardMainStyled,_extends({bs:2},props,props.layout));};module.exports=exports['default'];

/***/ }),

/***/ 2474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/* ------------------------- External Dependencies -------------------------- */var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _lodash=__webpack_require__(342);var _lodash2=_interopRequireDefault(_lodash);var _propTypes=__webpack_require__(2);var _propTypes2=_interopRequireDefault(_propTypes);var _styledComponents=__webpack_require__(19);var _styledComponents2=_interopRequireDefault(_styledComponents);var _particles=__webpack_require__(29);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* ------------------------- Internal Dependencies -------------------------- */var layout={bg:'white',is:'footer',w:1/* ---------------------------- React Component ----------------------------- */};exports.default=function(props){return _react2.default.createElement(_particles.Block,_extends({},props,layout),props.children);};module.exports=exports['default'];

/***/ }),

/***/ 2475:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/* ------------------------- External Dependencies -------------------------- */var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _lodash=__webpack_require__(342);var _lodash2=_interopRequireDefault(_lodash);var _propTypes=__webpack_require__(2);var _propTypes2=_interopRequireDefault(_propTypes);var _styledComponents=__webpack_require__(19);var _styledComponents2=_interopRequireDefault(_styledComponents);var _particles=__webpack_require__(29);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* ------------------------- Internal Dependencies -------------------------- */var layout={is:'header',of:'hidden',w:1/* ---------------------------- React Component ----------------------------- */};exports.default=function(props){return _react2.default.createElement(_particles.Block,_extends({},props,layout),props.children);};module.exports=exports['default'];

/***/ }),

/***/ 2476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/* ------------------------- External Dependencies -------------------------- */var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _lodash=__webpack_require__(342);var _lodash2=_interopRequireDefault(_lodash);var _propTypes=__webpack_require__(2);var _propTypes2=_interopRequireDefault(_propTypes);var _styledComponents=__webpack_require__(19);var _styledComponents2=_interopRequireDefault(_styledComponents);var _particles=__webpack_require__(29);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* ------------------------- Internal Dependencies -------------------------- */var layout={bg:'white',is:'main',w:1/* ---------------------------- React Component ----------------------------- */};exports.default=function(props){return _react2.default.createElement(_particles.Block,_extends({},props,layout),props.children);};module.exports=exports['default'];

/***/ }),

/***/ 2477:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default={styledFieldOuter:{align:'center',p:0},styledField:{br:5,mb:5},styledInput:{bs:0,br:3},styledWrapper:{w:1}};module.exports=exports['default'];

/***/ }),

/***/ 2478:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(value,previousValue){return!previousValue||value.length>previousValue.length?value.replace(/[^a-z0-9_.]/g,''):value;};module.exports=exports['default'];

/***/ }),

/***/ 2479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactRedux=__webpack_require__(33);var _recompose=__webpack_require__(160);var _reduxForm=__webpack_require__(124);var _validation=__webpack_require__(852);var _selectors=__webpack_require__(853);var _actions=__webpack_require__(344);var _actions2=_interopRequireDefault(_actions);var _form=__webpack_require__(2496);var _form2=_interopRequireDefault(_form);var _actions3=__webpack_require__(58);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* ---------------------------- Module Package ------------------------------ *//*-* Recompose *-*/// Component
var QueryLifecycle=(0,_recompose.lifecycle)({componentDidMount:function componentDidMount(){},componentDidUpdate:function componentDidUpdate(prevProps){if(this.props.submitting===true){this.props.reset();}}});/*-* Redux *-*/// Depreacted Store Department Request Style | fix this @kamescg
/* ------------------------- Internal Dependencies -------------------------- *//* ------------------------- External Dependencies -------------------------- */var mapStateToProps=function mapStateToProps(state,props){return{};};var mapDispatchToProps=function mapDispatchToProps(dispatch,props){return{// Blockchain
ipfsFileAdd:function ipfsFileAdd(){return dispatch(_actions2.default.filesAdd('REQUEST')(null,{delta:'ipfs|file|add'}));}};};/* ----------------------------- Redux Form -------------------------------- *//*-- Event Handlers ---*/var onSubmit=function onSubmit(data,dispatch,props){return new Promise(function(resolve,reject){dispatch(_actions2.default.filesAdd('REQUEST')(null,{delta:'ipfs|file|add'}));});};var validate=(0,_validation.createValidator)({});var config={form:'FormEnsScan',fields:['ethBlockNumber','countBackwards'],destroyOnUnmount:true,onSubmit:onSubmit,validate:validate/* ----------------------------- Export -------------------------------- */};var FormConfiguration=(0,_reduxForm.reduxForm)(config);exports.default=(0,_recompose.compose)((0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps),FormConfiguration,QueryLifecycle)(_form2.default);module.exports=exports['default'];

/***/ }),

/***/ 2480:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------- Require Context ----------------------------- */var req=__webpack_require__(2481);/* ------------------------- Import Dependencies --------------------------- */req.keys().forEach(function(key){var name=key.replace(/\.\/(.+)\/.+$/,'$1');module.exports[name]=req(key);});

/***/ }),

/***/ 2481:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./DashboardAside/index.js": 2482,
	"./DashboardAside/render/index.js": 2471,
	"./DashboardHeader/index.js": 2483,
	"./DashboardHeader/render/index.js": 2472,
	"./DashboardMain/index.js": 2484,
	"./DashboardMain/render/index.js": 2473,
	"./DashboardMainContent/index.js": 2485,
	"./DashboardMainPanelLeft/index.js": 2486,
	"./DashboardMainPanelRight/index.js": 2487,
	"./SiteFooter/index.js": 2488,
	"./SiteFooter/render/index.js": 2474,
	"./SiteHeader/index.js": 2489,
	"./SiteHeader/render/index.js": 2475,
	"./SiteMain/index.js": 2490,
	"./SiteMain/render/index.js": 2476
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2481;

/***/ }),

/***/ 2482:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _reactRedux=__webpack_require__(33);var _reactRouterDom=__webpack_require__(198);var _render=__webpack_require__(2471);var _render2=_interopRequireDefault(_render);var _selectors=__webpack_require__(341);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* ------------------------ Initialize Dependencies ------------------------- *//* ---------------------------- Module Package ------------------------------ *//* ------------------------- Internal Dependencies -------------------------- *//* ------------------------- External Dependencies -------------------------- */function mapStateToProps(state){var layout=(0,_selectors.getZoneDashboardLayout)(state,'aside');return{layout:layout};}/* ----------------------- Redux | State Management  ------------------------ */var mapDispatchToProps=function mapDispatchToProps(dispatch){return{};};exports.default=(0,_reactRouterDom.withRouter)((0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(_render2.default));module.exports=exports['default'];

/***/ }),

/***/ 2483:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _reactRedux=__webpack_require__(33);var _reactRouterDom=__webpack_require__(198);var _render=__webpack_require__(2472);var _render2=_interopRequireDefault(_render);var _selectors=__webpack_require__(341);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* ------------------------ Initialize Dependencies ------------------------- *//* ---------------------------- Module Package ------------------------------ *//* ------------------------- Internal Dependencies -------------------------- *//* ------------------------- External Dependencies -------------------------- */function mapStateToProps(state){var layout=(0,_selectors.getZoneDashboardLayout)(state,'header');return{layout:layout};}/* ----------------------- Redux | State Management  ------------------------ */var mapDispatchToProps=function mapDispatchToProps(dispatch){return{};};exports.default=(0,_reactRouterDom.withRouter)((0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(_render2.default));module.exports=exports['default'];

/***/ }),

/***/ 2484:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _reactRedux=__webpack_require__(33);var _reactRouterDom=__webpack_require__(198);var _render=__webpack_require__(2473);var _render2=_interopRequireDefault(_render);var _selectors=__webpack_require__(341);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* ------------------------ Initialize Dependencies ------------------------- *//* ---------------------------- Module Package ------------------------------ *//* ------------------------- Internal Dependencies -------------------------- *//* ------------------------- External Dependencies -------------------------- */function mapStateToProps(state){var _getZoneDashboard=(0,_selectors.getZoneDashboard)(state,'main'),layout=_getZoneDashboard.layout,regions=_getZoneDashboard.regions;return{layout:layout,regions:regions};}/* ----------------------- Redux | State Management  ------------------------ */var mapDispatchToProps=function mapDispatchToProps(dispatch){return{};};exports.default=(0,_reactRouterDom.withRouter)((0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(_render2.default));module.exports=exports['default'];

/***/ }),

/***/ 2485:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _templateObject=_taggedTemplateLiteral(['\n  overflow-x: hidden;\n  overflow-y: hidden;\n'],['\n  overflow-x: hidden;\n  overflow-y: hidden;\n']);var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _styledComponents=__webpack_require__(19);var _styledComponents2=_interopRequireDefault(_styledComponents);var _particles=__webpack_require__(29);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}/* ------------------------- External Dependencies -------------------------- */var MainContent=(0,_styledComponents2.default)(_particles.Box)(_templateObject);exports.default=function(props){return _react2.default.createElement(MainContent,_extends({is:'section'},props,props.layout));};module.exports=exports['default'];

/***/ }),

/***/ 2486:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/* ------------------------- External Dependencies -------------------------- */var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _particles=__webpack_require__(29);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(props){return _react2.default.createElement(_particles.Box,_extends({is:'aside',of:'hidden',grow:3,shrink:3},props,props.layout));};module.exports=exports['default'];

/***/ }),

/***/ 2487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/* ------------------------- External Dependencies -------------------------- */var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _particles=__webpack_require__(29);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(props){return _react2.default.createElement(_particles.Box,_extends({is:'aside'},props,props.layout));};module.exports=exports['default'];

/***/ }),

/***/ 2488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _reactRedux=__webpack_require__(33);var _render=__webpack_require__(2474);var _render2=_interopRequireDefault(_render);var _selectors=__webpack_require__(341);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* ------------------------ Initialize Dependencies ------------------------- *//* ---------------------------- Module Package ------------------------------ *//* ------------------------- Internal Dependencies -------------------------- */function mapStateToProps(state){var layout=(0,_selectors.getZoneLayout)(state,'footer');return{layout:layout};}/* ----------------------- Redux | State Management  ------------------------ *//* ------------------------- External Dependencies -------------------------- */var mapDispatchToProps=function mapDispatchToProps(dispatch){return{};};exports.default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(_render2.default);module.exports=exports['default'];

/***/ }),

/***/ 2489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _reactRedux=__webpack_require__(33);var _reactRouterDom=__webpack_require__(198);var _render=__webpack_require__(2475);var _render2=_interopRequireDefault(_render);var _selectors=__webpack_require__(341);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* ------------------------ Initialize Dependencies ------------------------- *//* ---------------------------- Module Package ------------------------------ *//* ------------------------- Internal Dependencies -------------------------- *//* ------------------------- External Dependencies -------------------------- */function mapStateToProps(state){var layout=(0,_selectors.getZoneLayout)(state,'header');return{layout:layout};}/* ----------------------- Redux | State Management  ------------------------ */var mapDispatchToProps=function mapDispatchToProps(dispatch){return{};};exports.default=(0,_reactRouterDom.withRouter)((0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(_render2.default));module.exports=exports['default'];

/***/ }),

/***/ 2490:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _reactRedux=__webpack_require__(33);var _reactRouterDom=__webpack_require__(198);var _render=__webpack_require__(2476);var _render2=_interopRequireDefault(_render);var _selectors=__webpack_require__(341);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* ------------------------ Initialize Dependencies ------------------------- *//* ---------------------------- Module Package ------------------------------ *//* ------------------------- Internal Dependencies -------------------------- *//* ------------------------- External Dependencies -------------------------- */function mapStateToProps(state){var _getZone=(0,_selectors.getZone)(state,'main'),layout=_getZone.layout,regions=_getZone.regions;return{layout:layout,regions:regions};}/* ----------------------- Redux | State Management  ------------------------ */var mapDispatchToProps=function mapDispatchToProps(dispatch){return{};};exports.default=(0,_reactRouterDom.withRouter)((0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(_render2.default));module.exports=exports['default'];

/***/ }),

/***/ 2491:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsx=function(){var REACT_ELEMENT_TYPE=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||0xeac7;return function createRawReactElement(type,props,key,children){var defaultProps=type&&type.defaultProps;var childrenLength=arguments.length-3;if(!props&&childrenLength!==0){props={};}if(props&&defaultProps){for(var propName in defaultProps){if(props[propName]===void 0){props[propName]=defaultProps[propName];}}}else if(!props){props=defaultProps||{};}if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+3];}props.children=childArray;}return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:key===undefined?null:''+key,ref:null,props:props,_owner:null};};}();/* ------------------------- External Dependencies -------------------------- *//* ------------------------- External Dependencies -------------------------- */// Atoms
var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(198);var _atomic=__webpack_require__(45);var _EnsTools=__webpack_require__(2492);var _EnsTools2=_interopRequireDefault(_EnsTools);var _Documents=__webpack_require__(2495);var _Documents2=_interopRequireDefault(_Documents);var _Home=__webpack_require__(2497);var _Home2=_interopRequireDefault(_Home);var _DistributedApplications=__webpack_require__(2498);var _DistributedApplications2=_interopRequireDefault(_DistributedApplications);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* ------------------------------- Component -------------------------------- */var _ref=_jsx('div',{},void 0,_jsx(_reactRouterDom.Route,{exact:true,path:'/',component:_Home2.default}),_jsx(_reactRouterDom.Route,{exact:true,path:'/documents',component:_Documents2.default}),_jsx(_reactRouterDom.Route,{exact:true,path:'/dapps',component:_DistributedApplications2.default}),_jsx(_reactRouterDom.Route,{exact:true,path:'/ens',component:_EnsTools2.default}));exports.default=function(){return _ref;};module.exports=exports['default'];

/***/ }),

/***/ 2492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsx=function(){var REACT_ELEMENT_TYPE=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||0xeac7;return function createRawReactElement(type,props,key,children){var defaultProps=type&&type.defaultProps;var childrenLength=arguments.length-3;if(!props&&childrenLength!==0){props={};}if(props&&defaultProps){for(var propName in defaultProps){if(props[propName]===void 0){props[propName]=defaultProps[propName];}}}else if(!props){props=defaultProps||{};}if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+3];}props.children=childArray;}return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:key===undefined?null:''+key,ref:null,props:props,_owner:null};};}();/* ------------------------- External Dependencies -------------------------- *//* ------------------------- Internal Dependencies -------------------------- *//*---*--- Atoms ---*---*//*---*--- Assimilation ---*---*/var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _icons=__webpack_require__(854);var _atomic=__webpack_require__(45);var _EnsResolve=__webpack_require__(2493);var _EnsResolve2=_interopRequireDefault(_EnsResolve);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* ------------------------------- Component -------------------------------- */var _ref=_jsx(_atomic.SVG,{svg:_icons.commerceKiosk,svgColor:'blue',width:60,height:60,mr:15});var _ref2=_jsx(_atomic.HorizontalRule,{bi:'colorWheel'});var _ref3=_jsx(_atomic.Flex,{},void 0,_jsx(_EnsResolve2.default,{blockNumber:1}));exports.default=function(props){return _jsx(_atomic.Box,{p:20},void 0,_jsx(_atomic.Flex,{align:'center'},void 0,_ref,_jsx(_atomic.Heading,{f:[6],color:'blue'},void 0,'Ethereum Name System')),_ref2,_ref3);};module.exports=exports['default'];

/***/ }),

/***/ 2493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _recompose=__webpack_require__(160);var _reactRedux=__webpack_require__(33);var _reduxForm=__webpack_require__(124);var _form=__webpack_require__(2494);var _form2=_interopRequireDefault(_form);var _atomic=__webpack_require__(45);var _validation=__webpack_require__(852);var _selectors=__webpack_require__(853);var _actions=__webpack_require__(343);var _actions2=_interopRequireDefault(_actions);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* --------------------------- Component Entry ------------------------------ *//*-- Event Handlers ---*//*--- Redux Store ---*/var onSubmit=function onSubmit(data,dispatch,props){return new Promise(function(resolve,reject){var submission=data.ethEnsName;dispatch(_actions2.default.ensResolveName("REQUEST")(submission,{delta:'resolve|form'}));});};/*---*--- Lifecylce Methods ---*---*//* ------------------------- Internal Dependencies -------------------------- *//* ------------------------- External Dependencies -------------------------- */var QueryLifecycle=(0,_recompose.lifecycle)({/*--- Component Mount ---*/componentDidMount:function componentDidMount(){},/*--- Component Update ---*/componentDidUpdate:function componentDidUpdate(prevProps){if(this.props.submitting===true){this.props.reset();}}});/* ----------------------------- Form Validation -------------------------------- */var validate=(0,_validation.createValidator)({'detherPassword':_validation.required});var config={form:'FormDetherSendToBuyer',fields:['blockchainAddress','blockchainAmount','detherPassword'],destroyOnUnmount:true,onSubmit:onSubmit,validate:validate/*-* Redux *-*/};var mapStateToProps=function mapStateToProps(state,props){return{data:_selectors.fromEthers.getDeltaData(state,'resolve|form'),status:_selectors.fromEthers.getDeltaStatus(state,'resolve|form')};};var mapDispatchToProps=function mapDispatchToProps(dispatch,props){return{};};/* ----------------------------- Export -------------------------------- */var FormConfiguration=(0,_reduxForm.reduxForm)(config);var FormRedux=function FormRedux(props){return _react2.default.createElement(_form2.default,props);};exports.default=(0,_recompose.compose)((0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps),FormConfiguration,QueryLifecycle)(FormRedux);module.exports=exports['default'];

/***/ }),

/***/ 2494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsx=function(){var REACT_ELEMENT_TYPE=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||0xeac7;return function createRawReactElement(type,props,key,children){var defaultProps=type&&type.defaultProps;var childrenLength=arguments.length-3;if(!props&&childrenLength!==0){props={};}if(props&&defaultProps){for(var propName in defaultProps){if(props[propName]===void 0){props[propName]=defaultProps[propName];}}}else if(!props){props=defaultProps||{};}if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+3];}props.children=childArray;}return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:key===undefined?null:''+key,ref:null,props:props,_owner:null};};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reduxForm=__webpack_require__(124);var _StyleFieldDefault=__webpack_require__(2477);var _StyleFieldDefault2=_interopRequireDefault(_StyleFieldDefault);var _Box=__webpack_require__(49);var _Box2=_interopRequireDefault(_Box);var _Flex=__webpack_require__(56);var _Flex2=_interopRequireDefault(_Flex);var _Button=__webpack_require__(77);var _Button2=_interopRequireDefault(_Button);var _Heading=__webpack_require__(68);var _Heading2=_interopRequireDefault(_Heading);var _Span=__webpack_require__(125);var _Span2=_interopRequireDefault(_Span);var _Form=__webpack_require__(851);var _Form2=_interopRequireDefault(_Form);var _ReduxField=__webpack_require__(250);var _ReduxField2=_interopRequireDefault(_ReduxField);var _ens=__webpack_require__(2478);var _ens2=_interopRequireDefault(_ens);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}/* ------------------------- External Dependencies -------------------------- *//* ------------------------- Internal Dependencies -------------------------- *//* ---------------------------- Form Component ------------------------------ */var _ref2=_jsx(_Span2.default,{fw:'700'},void 0,'Wallet Address:');exports.default=function(_ref){var handleSubmit=_ref.handleSubmit,isSubmitting=_ref.isSubmitting,styled=_ref.styled,props=_objectWithoutProperties(_ref,['handleSubmit','isSubmitting','styled']);return _react2.default.createElement(_Form2.default,_extends({},styled,{w:1}),_jsx(_Flex2.default,{align:'center',mh:50},void 0,!(props.data&&props.status)?null:_jsx(_Heading2.default,{f:[4],color:props.color,fw:'500'},void 0,_ref2,' ',props.data),!props.data&&props.status?_jsx(_Heading2.default,{f:[3],color:props.color,fw:'300'},void 0,'Unable To Locate Wallet'):null),_jsx(_Box2.default,{},void 0,_react2.default.createElement(_reduxForm.Field,_extends({name:'ethEnsName',placeholder:'Ethereum Name System (Enter Name)',component:_ReduxField2.default,type:'text'},_StyleFieldDefault2.default,{h:50,normalize:_ens2.default}))),_jsx(_Box2.default,{mt:10},void 0,_jsx(_Button2.default,{type:'submit',onClick:handleSubmit,gradient:'cherry',w:1,py:20},void 0,'Locate Address')));};module.exports=exports['default'];

/***/ }),

/***/ 2495:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsx=function(){var REACT_ELEMENT_TYPE=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||0xeac7;return function createRawReactElement(type,props,key,children){var defaultProps=type&&type.defaultProps;var childrenLength=arguments.length-3;if(!props&&childrenLength!==0){props={};}if(props&&defaultProps){for(var propName in defaultProps){if(props[propName]===void 0){props[propName]=defaultProps[propName];}}}else if(!props){props=defaultProps||{};}if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+3];}props.children=childArray;}return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:key===undefined?null:''+key,ref:null,props:props,_owner:null};};}();/* ------------------------- External Dependencies -------------------------- *//* ------------------------- Internal Dependencies -------------------------- */var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _assets=__webpack_require__(95);var _atomic=__webpack_require__(45);var _IpfsFileAdd=__webpack_require__(2479);var _IpfsFileAdd2=_interopRequireDefault(_IpfsFileAdd);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _ref=_jsx('strong',{},void 0,'Hash');var _ref2=_jsx('strong',{},void 0,'Download Link:');var DocumentCard=function DocumentCard(props){return _react2.default.createElement(_atomic.Box,_extends({br:7,boxShadow:1,p:20},props),_jsx(_atomic.Heading,{level:[3],f:[3]},void 0,props.title,' - ',_jsx(_atomic.Span,{color:'purple',fw:'700'},void 0,props.type,' ')),_jsx(_atomic.Paragraph,{f:[1]},void 0,_jsx(_atomic.Span,{},void 0,_ref,': ',props.hash,' ')),_jsx(_atomic.Paragraph,{f:[1]},void 0,_jsx(_atomic.Span,{},void 0,_ref2,' ',props.type,' ')));};var documents=[{title:'KYC Identity',type:'PDF',hash:'0G4J81NCKAJ37592NKVN2317465HVNAK29CJA'},{title:'Ethesense Certificate',type:'json',hash:'0G4J81NCKAJ37592NKVN2317465HVNAK29CJA'},{title:'Meshpass',type:'txt',hash:'0G4J81NCKAJ37592NKVN2317465HVNAK29CJA'},{title:'Bounty Hunter',type:'json',hash:'0G4J81NCKAJ37592NKVN2317465HVNAK29CJA'}];/* ------------------------------- Component -------------------------------- */var _ref3=_jsx(_IpfsFileAdd2.default,{});exports.default=function(props){return _jsx(_atomic.Box,{p:50},void 0,_jsx(_atomic.Heading,{level:[3],f:[4,5]},void 0,'\u0110ocuments'),_ref3,_jsx(_atomic.Flex,{wrap:'wrap'},void 0,documents.map(function(props){return _react2.default.createElement(DocumentCard,_extends({w:1},props));})));};module.exports=exports['default'];

/***/ }),

/***/ 2496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsx=function(){var REACT_ELEMENT_TYPE=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||0xeac7;return function createRawReactElement(type,props,key,children){var defaultProps=type&&type.defaultProps;var childrenLength=arguments.length-3;if(!props&&childrenLength!==0){props={};}if(props&&defaultProps){for(var propName in defaultProps){if(props[propName]===void 0){props[propName]=defaultProps[propName];}}}else if(!props){props=defaultProps||{};}if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+3];}props.children=childArray;}return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:key===undefined?null:''+key,ref:null,props:props,_owner:null};};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reduxForm=__webpack_require__(124);var _SVG=__webpack_require__(57);var _SVG2=_interopRequireDefault(_SVG);var _StyleFieldDefault=__webpack_require__(2477);var _StyleFieldDefault2=_interopRequireDefault(_StyleFieldDefault);var _Box=__webpack_require__(49);var _Box2=_interopRequireDefault(_Box);var _Flex=__webpack_require__(56);var _Flex2=_interopRequireDefault(_Flex);var _Button=__webpack_require__(77);var _Button2=_interopRequireDefault(_Button);var _Heading=__webpack_require__(68);var _Heading2=_interopRequireDefault(_Heading);var _Paragraph=__webpack_require__(161);var _Paragraph2=_interopRequireDefault(_Paragraph);var _Span=__webpack_require__(125);var _Span2=_interopRequireDefault(_Span);var _Form=__webpack_require__(851);var _Form2=_interopRequireDefault(_Form);var _ReduxField=__webpack_require__(250);var _ReduxField2=_interopRequireDefault(_ReduxField);var _ens=__webpack_require__(2478);var _ens2=_interopRequireDefault(_ens);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}/* ------------------------- External Dependencies -------------------------- *//* ------------------------- Internal Dependencies -------------------------- */// atoms
/* ---------------------------- Form Component ------------------------------ */exports.default=function(_ref){var handleSubmit=_ref.handleSubmit,isSubmitting=_ref.isSubmitting,styled=_ref.styled,props=_objectWithoutProperties(_ref,['handleSubmit','isSubmitting','styled']);return _react2.default.createElement(_Form2.default,_extends({},styled,{w:1}),_jsx(_Box2.default,{},void 0,_react2.default.createElement(_reduxForm.Field,_extends({name:'ipfsFileAdd',placeholder:'Scan Count (Reverse) ',component:_ReduxField2.default,type:'file'},_StyleFieldDefault2.default,{h:50}))),_jsx(_Box2.default,{mt:10},void 0,_jsx(_Button2.default,{type:'submit',onClick:handleSubmit,gradient:'cherry',w:1,py:20},void 0,'Upload File')));};module.exports=exports['default'];

/***/ }),

/***/ 2497:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsx=function(){var REACT_ELEMENT_TYPE=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||0xeac7;return function createRawReactElement(type,props,key,children){var defaultProps=type&&type.defaultProps;var childrenLength=arguments.length-3;if(!props&&childrenLength!==0){props={};}if(props&&defaultProps){for(var propName in defaultProps){if(props[propName]===void 0){props[propName]=defaultProps[propName];}}}else if(!props){props=defaultProps||{};}if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+3];}props.children=childArray;}return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:key===undefined?null:''+key,ref:null,props:props,_owner:null};};}();/* ------------------------- External Dependencies -------------------------- *//* ------------------------- Internal Dependencies -------------------------- *//*-* Atoms *-*//*-* Foundry *-*/var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _assets=__webpack_require__(95);var _Flex=__webpack_require__(56);var _Flex2=_interopRequireDefault(_Flex);var _Box=__webpack_require__(49);var _Box2=_interopRequireDefault(_Box);var _Container=__webpack_require__(253);var _Container2=_interopRequireDefault(_Container);var _foundry=__webpack_require__(251);var _containers=__webpack_require__(252);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* ------------------------------- Component -------------------------------- */var _ref=_jsx(_containers.LocalStore,{});exports.default=function(props){return _jsx('div',{},void 0,_jsx(_Container2.default,{w:[1120],py:[15,25]},void 0,_ref));};module.exports=exports['default'];

/***/ }),

/***/ 2498:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsx=function(){var REACT_ELEMENT_TYPE=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||0xeac7;return function createRawReactElement(type,props,key,children){var defaultProps=type&&type.defaultProps;var childrenLength=arguments.length-3;if(!props&&childrenLength!==0){props={};}if(props&&defaultProps){for(var propName in defaultProps){if(props[propName]===void 0){props[propName]=defaultProps[propName];}}}else if(!props){props=defaultProps||{};}if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+3];}props.children=childArray;}return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:key===undefined?null:''+key,ref:null,props:props,_owner:null};};}();/* ------------------------- External Dependencies -------------------------- *//* ------------------------- Internal Dependencies -------------------------- */var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _assets=__webpack_require__(95);var _atomic=__webpack_require__(45);var _IpfsFileAdd=__webpack_require__(2479);var _IpfsFileAdd2=_interopRequireDefault(_IpfsFileAdd);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _ref=_jsx('strong',{},void 0,'Hash');var _ref2=_jsx('strong',{},void 0,'Download Link:');var DocumentCard=function DocumentCard(props){return _react2.default.createElement(_atomic.Flex,_extends({direction:'column',br:7,boxShadow:1},props,{h:[200],mb:20}),_jsx(_atomic.Box,{height:0.7,color:'white',gradient:'purple',p:20,justify:'flex-end',w:1},void 0,_jsx(_atomic.Heading,{level:[3],f:[3]},void 0,props.title,' - ',_jsx(_atomic.Span,{color:'white',fw:'300'},void 0,props.type,' '))),_jsx(_atomic.Box,{height:0.3,p:20,w:1},void 0,_jsx(_atomic.Paragraph,{f:[1]},void 0,_jsx(_atomic.Span,{},void 0,_ref,': ',props.hash,' ')),_jsx(_atomic.Paragraph,{f:[1]},void 0,_jsx(_atomic.Span,{},void 0,_ref2,' ',props.type,' '))));};var documents=[{title:'Ethesence',type:'Education',hash:'0G4J81NCKAJ37592NKVN2317465HVNAK29CJA'},{title:'Gnosis Olympia',type:'Prediction',hash:'0G4J81NCKAJ37592NKVN2317465HVNAK29CJA'},{title:'Meshpass',type:'Consensys',hash:'0G4J81NCKAJ37592NKVN2317465HVNAK29CJA'},{title:'Gitcoin',type:'bounty',hash:'0G4J81NCKAJ37592NKVN2317465HVNAK29CJA'}];/* ------------------------------- Component -------------------------------- */exports.default=function(props){return _jsx(_atomic.Box,{p:50},void 0,_jsx(_atomic.Heading,{level:[3],f:[4,5]},void 0,'\u0110ecentralized Applicaitons'),_jsx(_atomic.Flex,{wrap:'wrap'},void 0,documents.map(function(props){return _react2.default.createElement(DocumentCard,_extends({w:1},props));})));};module.exports=exports['default'];

/***/ }),

/***/ 2499:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsx=function(){var REACT_ELEMENT_TYPE=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||0xeac7;return function createRawReactElement(type,props,key,children){var defaultProps=type&&type.defaultProps;var childrenLength=arguments.length-3;if(!props&&childrenLength!==0){props={};}if(props&&defaultProps){for(var propName in defaultProps){if(props[propName]===void 0){props[propName]=defaultProps[propName];}}}else if(!props){props=defaultProps||{};}if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+3];}props.children=childArray;}return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:key===undefined?null:''+key,ref:null,props:props,_owner:null};};}();/* ------------------------- External Dependencies -------------------------- *//* ------------------------- Internal Dependencies -------------------------- */var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _Box=__webpack_require__(49);var _Box2=_interopRequireDefault(_Box);var _Route=__webpack_require__(504);var _Route2=_interopRequireDefault(_Route);var _RegionBranding=__webpack_require__(855);var _RegionBranding2=_interopRequireDefault(_RegionBranding);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _ref=_jsx(_Box2.default,{},void 0,_jsx(_Route2.default,{path:'/',component:_RegionBranding2.default}));exports.default=function(){return _ref;};module.exports=exports['default'];

/***/ }),

/***/ 2500:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsx=function(){var REACT_ELEMENT_TYPE=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||0xeac7;return function createRawReactElement(type,props,key,children){var defaultProps=type&&type.defaultProps;var childrenLength=arguments.length-3;if(!props&&childrenLength!==0){props={};}if(props&&defaultProps){for(var propName in defaultProps){if(props[propName]===void 0){props[propName]=defaultProps[propName];}}}else if(!props){props=defaultProps||{};}if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+3];}props.children=childArray;}return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:key===undefined?null:''+key,ref:null,props:props,_owner:null};};}();/* ------------------------- External Dependencies -------------------------- *//* ------------------------- Internal Dependencies -------------------------- */var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _atomic=__webpack_require__(45);var _RegionAccount=__webpack_require__(2501);var _RegionAccount2=_interopRequireDefault(_RegionAccount);var _AsideDrawerMenu=__webpack_require__(2502);var _AsideDrawerMenu2=_interopRequireDefault(_AsideDrawerMenu);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* ------------------------------- Component -------------------------------- */var _ref=_jsx(_atomic.Box,{},void 0,_jsx(_RegionAccount2.default,{}),_jsx(_AsideDrawerMenu2.default,{owner:'aside'}));exports.default=function(props){return _ref;};module.exports=exports['default'];

/***/ }),

/***/ 2501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsx=function(){var REACT_ELEMENT_TYPE=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||0xeac7;return function createRawReactElement(type,props,key,children){var defaultProps=type&&type.defaultProps;var childrenLength=arguments.length-3;if(!props&&childrenLength!==0){props={};}if(props&&defaultProps){for(var propName in defaultProps){if(props[propName]===void 0){props[propName]=defaultProps[propName];}}}else if(!props){props=defaultProps||{};}if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+3];}props.children=childArray;}return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:key===undefined?null:''+key,ref:null,props:props,_owner:null};};}();/* ------------------------- External Dependencies -------------------------- *//* ------------------------- Internal Dependencies -------------------------- */var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _assets=__webpack_require__(95);var _Flex=__webpack_require__(56);var _Flex2=_interopRequireDefault(_Flex);var _Box=__webpack_require__(49);var _Box2=_interopRequireDefault(_Box);var _Heading=__webpack_require__(68);var _Heading2=_interopRequireDefault(_Heading);var _Button=__webpack_require__(77);var _Button2=_interopRequireDefault(_Button);var _Link=__webpack_require__(126);var _Link2=_interopRequireDefault(_Link);var _Image=__webpack_require__(109);var _Image2=_interopRequireDefault(_Image);var _Span=__webpack_require__(125);var _Span2=_interopRequireDefault(_Span);var _SVG=__webpack_require__(57);var _SVG2=_interopRequireDefault(_SVG);var _DrawerOpen=__webpack_require__(506);var _DrawerOpen2=_interopRequireDefault(_DrawerOpen);var _UPortCredentialsRequest=__webpack_require__(856);var _UPortCredentialsRequest2=_interopRequireDefault(_UPortCredentialsRequest);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* ------------------------------- Component -------------------------------- */var _ref=_jsx(_UPortCredentialsRequest2.default,{text:'Sovereign Login'});exports.default=function(props){return _jsx(_Flex2.default,{align:'center',justify:'center',wrap:'wrap',pos:'relative',gradientDir:'182deg',bs:[0],color:['white']},void 0,_jsx(_Flex2.default,{align:'center',direction:'column',justify:'center',px:20,py:[10],w:[1]},void 0,_ref),_jsx(_Link2.default,{to:'/'},void 0,_jsx(_Heading2.default,{color:'white',level:4,margin:'0',fontSize:[1],fontWeight:'100'},void 0,'eidenai')));};module.exports=exports['default'];

/***/ }),

/***/ 2502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsx=function(){var REACT_ELEMENT_TYPE=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||0xeac7;return function createRawReactElement(type,props,key,children){var defaultProps=type&&type.defaultProps;var childrenLength=arguments.length-3;if(!props&&childrenLength!==0){props={};}if(props&&defaultProps){for(var propName in defaultProps){if(props[propName]===void 0){props[propName]=defaultProps[propName];}}}else if(!props){props=defaultProps||{};}if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+3];}props.children=childArray;}return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:key===undefined?null:''+key,ref:null,props:props,_owner:null};};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _foundry=__webpack_require__(251);var _menus=__webpack_require__(2503);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(props){return _jsx('div',{},void 0,_menus.MenuMainDashboard.map(function(item){return _react2.default.createElement(_foundry.MenuAsideItem,_extends({},props,item));}));};module.exports=exports['default'];

/***/ }),

/***/ 2503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------- Require Context ----------------------------- */var req=__webpack_require__(2504);/* ------------------------- Import Dependencies --------------------------- */req.keys().forEach(function(key){var name=key.replace(/\.\/(.+)\/.+$/,'$1');module.exports[name]=req(key);});

/***/ }),

/***/ 2504:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./MenuMainDashboard/index.js": 2505
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2504;

/***/ }),

/***/ 2505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _assets=__webpack_require__(95);exports.default=[{title:'Bounties',to:'/bounties',svg:_assets.icons.uiCode,childrenItems:QuestChildren},{title:'Quests',to:'/quests',svg:_assets.icons.uiMoon},{title:'Tokens',to:'/quests',svg:_assets.icons.uiChartPie},{title:'Community',to:'/community',svg:_assets.icons.uiPulse}];var QuestChildren=[{title:'Map',to:'/quests/map',svg:_assets.svg.brain,gradient:'crimson',gradientDir:'90deg',titleWrap:{bg:'white',px:[10,15]},wrapper:{display:'flex',align:'center'}},{title:'Add',to:'/dashboard/person/add',svg:_assets.svg.holePuzzle,gradient:'crimson',gradientDir:'150deg',titleWrap:{bg:'white',px:[10,15]},wrapper:{display:'flex',align:'center'}}];module.exports=exports['default'];

/***/ }),

/***/ 2506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsx=function(){var REACT_ELEMENT_TYPE=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||0xeac7;return function createRawReactElement(type,props,key,children){var defaultProps=type&&type.defaultProps;var childrenLength=arguments.length-3;if(!props&&childrenLength!==0){props={};}if(props&&defaultProps){for(var propName in defaultProps){if(props[propName]===void 0){props[propName]=defaultProps[propName];}}}else if(!props){props=defaultProps||{};}if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+3];}props.children=childArray;}return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:key===undefined?null:''+key,ref:null,props:props,_owner:null};};}();/* ------------------------- External Dependencies -------------------------- *//* ------------------------- External Dependencies -------------------------- */var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(198);var _Box=__webpack_require__(49);var _Box2=_interopRequireDefault(_Box);var _Absolute=__webpack_require__(199);var _Absolute2=_interopRequireDefault(_Absolute);var _Flex=__webpack_require__(56);var _Flex2=_interopRequireDefault(_Flex);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* ------------------------------- Component -------------------------------- */var _ref=_jsx('div',{},void 0);exports.default=function(){return _ref;};module.exports=exports['default'];

/***/ }),

/***/ 2507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsx=function(){var REACT_ELEMENT_TYPE=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||0xeac7;return function createRawReactElement(type,props,key,children){var defaultProps=type&&type.defaultProps;var childrenLength=arguments.length-3;if(!props&&childrenLength!==0){props={};}if(props&&defaultProps){for(var propName in defaultProps){if(props[propName]===void 0){props[propName]=defaultProps[propName];}}}else if(!props){props=defaultProps||{};}if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+3];}props.children=childArray;}return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:key===undefined?null:''+key,ref:null,props:props,_owner:null};};}();/* ------------------------- External Dependencies -------------------------- *//* ------------------------- External Dependencies -------------------------- */var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(198);var _Box=__webpack_require__(49);var _Box2=_interopRequireDefault(_Box);var _Absolute=__webpack_require__(199);var _Absolute2=_interopRequireDefault(_Absolute);var _Flex=__webpack_require__(56);var _Flex2=_interopRequireDefault(_Flex);var _containers=__webpack_require__(252);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* ------------------------------- Component -------------------------------- */var _ref=_jsx('div',{},void 0);exports.default=function(){return _ref;};module.exports=exports['default'];

/***/ })

});
//# sourceMappingURL=0.faba9572.chunk.js.map