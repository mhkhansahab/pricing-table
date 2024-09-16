import{r as e,c as i,h as t}from"./p-c2c517c5.js";const n=":host{font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif}.card-container,.skeleton-loader{display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:fit-content}.card,.skeleton-col{width:300px;font-size:14px;border:1px solid #e8ecef;border-radius:10px;padding:40px 25px}.card-title{font-size:24px;font-weight:bold}.price-container{display:flex;align-items:center;font-size:48px;font-weight:bolder;margin-top:10px;margin-bottom:40px}.price-container>div{font-size:16px;line-height:18px;font-weight:300;width:30px;margin-left:10px}.card-button{cursor:pointer;width:100%;padding:10px 16px;border-radius:6px;outline:none;border:none;color:#fff;background-color:#00a0d7}.card-button:hover{background-color:#0084b1}.feature-container{margin-top:20px}.feature-title,.feature{font-size:16px;text-align:left;font-weight:300}.feature-ul-container>li::marker{font-size:26px}.visibility-hidden{visibility:hidden}.skeleton-header,.skeleton-cell{background:linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);background-size:200% 100%;animation:loading 1.5s infinite}.skeleton-header{height:40px;margin-bottom:20px}.skeleton-row{display:flex;margin-bottom:10px}.skeleton-cell{height:20px;flex:1;margin-right:10px}.skeleton-cell:last-child{margin-right:0}@keyframes loading{0%{background-position:200% 0}100%{background-position:-200% 0}}";const a=n;const o=class{constructor(t){e(this,t);this.handleButtonClick=i(this,"handleButtonClick",7);this.testData=[{id:"test_1234",active:true,default_price:"200",description:"per user",features:[{name:"Calendar/Swimlane"},{name:"5 Plan Limit"},{name:"20 Communication"},{name:"30 Tasks"},{name:"No Analytics"},{name:"No Reporting"}],name:"Professional"},{id:"test_1233",active:true,default_price:"",description:null,features:[{name:"10 Plan Limit"},{name:"100 communications TBC based on feedback from"},{name:"60 Tasks"},{name:"Advanced analytics"},{name:"2 integrations to begin - viva engage and share point Outlook in next"},{name:"SSO"},{name:"Branding"},{name:"Support package"}],name:"Enterprise"}];this.loading=true;this.products=[]}async fetchProducts(){try{await new Promise((e=>{const i=setTimeout((()=>{e(true);clearTimeout(i)}),3e3)}));this.products=this.testData}catch(e){console.log("err ==>",e)}finally{this.loading=false}}async componentWillLoad(){this.fetchProducts()}handleClick(e){var i;(i=this===null||this===void 0?void 0:this.handleButtonClick)===null||i===void 0?void 0:i.emit(e)}render(){var e;if(this.loading)return t(l,null);return t("div",{class:"card-container"},(e=this.products)===null||e===void 0?void 0:e.map((e=>{var i;return t("div",{class:"card"},t("div",{class:"card-title"},e===null||e===void 0?void 0:e.name),t("div",{class:`price-container ${(e===null||e===void 0?void 0:e.default_price)?"":"visibility-hidden"}`},"£",(e===null||e===void 0?void 0:e.default_price)||0,t("div",null,"per month")),(e===null||e===void 0?void 0:e.default_price)?t("button",{type:"button",class:"card-button",onClick:()=>this.handleClick(e)},"Subscribe"):t("button",{type:"button",class:"card-button",onClick:()=>this.handleClick(e)},"Contact Sales"),t("div",{class:"feature-container"},t("div",{class:"feature-title"},"This includes:"),t("ul",{class:"feature-ul-container"},(i=e===null||e===void 0?void 0:e.features)===null||i===void 0?void 0:i.map((e=>t("li",{class:"feature"},e===null||e===void 0?void 0:e.name))))))})))}};const l=()=>t("div",{class:"skeleton-loader"},Array(2).fill(0).map((()=>t("div",{class:"skeleton-col"},t("div",{class:"skeleton-header"}),Array(8).fill(0).map((()=>t("div",{class:"skeleton-row"},t("div",{class:"skeleton-cell"}),t("div",{class:"skeleton-cell"}))))))));o.style=a;export{o as pricing_table};
//# sourceMappingURL=p-23efeeef.entry.js.map