'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b37bcd7f.js');

const pricingTableCss = ":host{font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif}.card-container{display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:fit-content}.card{width:300px;font-size:14px;border:1px solid #e8ecef;border-radius:10px;padding:40px 25px}.card-title{font-size:24px;font-weight:bold}.price-container{display:flex;align-items:center;font-size:48px;font-weight:bolder;margin-top:10px;margin-bottom:40px}.price-container>div{font-size:16px;line-height:18px;font-weight:300;width:30px;margin-left:10px}.card-button{cursor:pointer;width:100%;padding:10px 16px;border-radius:6px;outline:none;border:none;color:#fff;background-color:#00a0d7}.card-button:hover{background-color:#0084b1}.feature-container{margin-top:20px}.feature-title,.feature{font-size:16px;text-align:left;font-weight:300}.feature-ul-container>li::marker{font-size:26px}.visibility-hidden{visibility:hidden}";
const PricingTableStyle0 = pricingTableCss;

const PricingTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.testData = [
            {
                id: 'prod_QaZZY7T1S9KDuY',
                object: 'product',
                active: true,
                attributes: [],
                created: 1722616400,
                default_price: '200',
                description: 'per user',
                features: [
                    {
                        name: 'Calendar/Swimlane',
                    },
                    {
                        name: '5 Plan Limit',
                    },
                    {
                        name: '20 Communication',
                    },
                    {
                        name: '30 Tasks',
                    },
                    {
                        name: 'No Analytics',
                    },
                    {
                        name: 'No Reporting',
                    },
                ],
                images: [],
                livemode: false,
                marketing_features: [
                    {
                        name: 'Calendar/Swimlane',
                    },
                    {
                        name: '5 Plan Limit',
                    },
                    {
                        name: '20 Communication',
                    },
                    {
                        name: '30 Tasks',
                    },
                    {
                        name: 'No Analytics',
                    },
                    {
                        name: 'No Reporting',
                    },
                ],
                metadata: {},
                name: 'Professional',
                url: null,
            },
            {
                id: 'prod_QaRUIbwG4DQGEv',
                object: 'product',
                active: true,
                attributes: [],
                created: 1722586384,
                default_price: '',
                description: null,
                features: [
                    {
                        name: '10 Plan Limit',
                    },
                    {
                        name: '100 communications TBC based on feedback from',
                    },
                    {
                        name: '60 Tasks',
                    },
                    {
                        name: 'Advanced analytics',
                    },
                    {
                        name: '2 integrations to begin - viva engage and share point Outlook in next',
                    },
                    {
                        name: 'SSO',
                    },
                    {
                        name: 'Branding',
                    },
                    {
                        name: 'Support package',
                    },
                ],
                images: [],
                livemode: false,
                marketing_features: [
                    {
                        name: '10 Plan Limit',
                    },
                    {
                        name: '100 communications TBC based on feedback from',
                    },
                    {
                        name: '60 Tasks',
                    },
                    {
                        name: 'Advanced analytics',
                    },
                    {
                        name: '2 integrations to begin - viva engage and share point Outlook in next',
                    },
                    {
                        name: 'SSO',
                    },
                    {
                        name: 'Branding',
                    },
                    {
                        name: 'Support package',
                    },
                ],
                metadata: {},
                name: 'Enterprise',
                url: null,
            },
        ];
    }
    render() {
        var _a;
        return (index.h("div", { key: '532725c356c597afd86d7c45aa4b42cf29ed42da', class: "card-container" }, (_a = this.testData) === null || _a === void 0 ? void 0 : _a.map(product => {
            var _a;
            return (index.h("div", { class: "card" }, index.h("div", { class: "card-title" }, product === null || product === void 0 ? void 0 : product.name), index.h("div", { class: `price-container ${(product === null || product === void 0 ? void 0 : product.default_price) ? '' : 'visibility-hidden'}` }, "\u00A3", (product === null || product === void 0 ? void 0 : product.default_price) || 0, index.h("div", null, "per month")), (product === null || product === void 0 ? void 0 : product.default_price) && (index.h("button", { type: "button", class: "card-button" }, "Subscribe")), !(product === null || product === void 0 ? void 0 : product.default_price) && (index.h("button", { type: "button", class: "card-button" }, "Contact Sales")), index.h("div", { class: "feature-container" }, index.h("div", { class: "feature-title" }, "This includes:"), index.h("ul", { class: "feature-ul-container" }, (_a = product === null || product === void 0 ? void 0 : product.features) === null || _a === void 0 ? void 0 : _a.map(feature => (index.h("li", { class: "feature" }, feature === null || feature === void 0 ? void 0 : feature.name)))))));
        })));
    }
};
PricingTable.style = PricingTableStyle0;

exports.pricing_table = PricingTable;

//# sourceMappingURL=pricing-table.cjs.entry.js.map