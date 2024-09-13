import { r as registerInstance, a as createEvent, h } from './index-46e9a099.js';

const pricingTableCss = ":host{font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif}.card-container,.skeleton-loader{display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:fit-content}.card,.skeleton-col{width:300px;font-size:14px;border:1px solid #e8ecef;border-radius:10px;padding:40px 25px}.card-title{font-size:24px;font-weight:bold}.price-container{display:flex;align-items:center;font-size:48px;font-weight:bolder;margin-top:10px;margin-bottom:40px}.price-container>div{font-size:16px;line-height:18px;font-weight:300;width:30px;margin-left:10px}.card-button{cursor:pointer;width:100%;padding:10px 16px;border-radius:6px;outline:none;border:none;color:#fff;background-color:#00a0d7}.card-button:hover{background-color:#0084b1}.feature-container{margin-top:20px}.feature-title,.feature{font-size:16px;text-align:left;font-weight:300}.feature-ul-container>li::marker{font-size:26px}.visibility-hidden{visibility:hidden}.skeleton-header,.skeleton-cell{background:linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);background-size:200% 100%;animation:loading 1.5s infinite}.skeleton-header{height:40px;margin-bottom:20px}.skeleton-row{display:flex;margin-bottom:10px}.skeleton-cell{height:20px;flex:1;margin-right:10px}.skeleton-cell:last-child{margin-right:0}@keyframes loading{0%{background-position:200% 0}100%{background-position:-200% 0}}";

const PricingTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.handleButtonClick = createEvent(this, "handleButtonClick", 7);
        this.testData = [
            {
                id: 'test_1234',
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
                id: 'test_1233',
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
        this.loading = true;
        this.products = [];
    }
    async fetchProducts() {
        try {
            await new Promise(resolve => {
                const timeout = setTimeout(() => {
                    resolve(true);
                    clearTimeout(timeout);
                }, 3000);
            });
            // const response = await fetch('');
            // this.products = (await response.json())?.data?.packages;
            // console.log('api response ==>', response);
            this.products = this.testData;
        }
        catch (e) {
            console.log('err ==>', e);
        }
        finally {
            this.loading = false;
        }
    }
    async componentWillLoad() {
        this.fetchProducts();
    }
    handleClick(product) {
        var _a;
        (_a = this === null || this === void 0 ? void 0 : this.handleButtonClick) === null || _a === void 0 ? void 0 : _a.emit(product);
    }
    render() {
        var _a;
        if (this.loading)
            return h(SkeletonLoader, null);
        return (h("div", { class: "card-container" }, (_a = this.products) === null || _a === void 0 ? void 0 : _a.map(product => {
            var _a;
            return (h("div", { class: "card" }, h("div", { class: "card-title" }, product === null || product === void 0 ? void 0 : product.name), h("div", { class: `price-container ${(product === null || product === void 0 ? void 0 : product.default_price) ? '' : 'visibility-hidden'}` }, "\u00A3", (product === null || product === void 0 ? void 0 : product.default_price) || 0, h("div", null, "per month")), (product === null || product === void 0 ? void 0 : product.default_price) && (h("button", { type: "button", class: "card-button", onClick: () => this.handleClick(product) }, "Subscribe")), !(product === null || product === void 0 ? void 0 : product.default_price) && (h("button", { type: "button", class: "card-button", onClick: () => this.handleClick(product) }, "Contact Sales")), h("div", { class: "feature-container" }, h("div", { class: "feature-title" }, "This includes:"), h("ul", { class: "feature-ul-container" }, (_a = product === null || product === void 0 ? void 0 : product.features) === null || _a === void 0 ? void 0 : _a.map(feature => (h("li", { class: "feature" }, feature === null || feature === void 0 ? void 0 : feature.name)))))));
        })));
    }
};
const SkeletonLoader = () => {
    return (h("div", { class: "skeleton-loader" }, Array(2)
        .fill(0)
        .map(() => (h("div", { class: "skeleton-col" }, h("div", { class: "skeleton-header" }), Array(8)
        .fill(0)
        .map(() => (h("div", { class: "skeleton-row" }, h("div", { class: "skeleton-cell" }), h("div", { class: "skeleton-cell" })))))))));
};
PricingTable.style = pricingTableCss;

export { PricingTable as pricing_table };

//# sourceMappingURL=pricing-table.entry.js.map