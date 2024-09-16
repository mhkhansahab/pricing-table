import { h } from "@stencil/core";
export class PricingTable {
    constructor() {
        this.testData = [
            {
                id: 'test_1234',
                active: true,
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
                name: 'Professional',
            },
            {
                id: 'test_1233',
                active: true,
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
                name: 'Enterprise',
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
            return (h("div", { class: "card" }, h("div", { class: "card-title" }, product === null || product === void 0 ? void 0 : product.name), h("div", { class: `price-container ${(product === null || product === void 0 ? void 0 : product.default_price) ? '' : 'visibility-hidden'}` }, "\u00A3", (product === null || product === void 0 ? void 0 : product.default_price) || 0, h("div", null, "per month")), (product === null || product === void 0 ? void 0 : product.default_price) ? (h("button", { type: "button", class: "card-button", onClick: () => this.handleClick(product) }, "Subscribe")) : (h("button", { type: "button", class: "card-button", onClick: () => this.handleClick(product) }, "Contact Sales")), h("div", { class: "feature-container" }, h("div", { class: "feature-title" }, "This includes:"), h("ul", { class: "feature-ul-container" }, (_a = product === null || product === void 0 ? void 0 : product.features) === null || _a === void 0 ? void 0 : _a.map(feature => (h("li", { class: "feature" }, feature === null || feature === void 0 ? void 0 : feature.name)))))));
        })));
    }
    static get is() { return "pricing-table"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["pricing-table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["pricing-table.css"]
        };
    }
    static get states() {
        return {
            "loading": {},
            "products": {}
        };
    }
    static get events() {
        return [{
                "method": "handleButtonClick",
                "name": "handleButtonClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
const SkeletonLoader = () => {
    return (h("div", { class: "skeleton-loader" }, Array(2)
        .fill(0)
        .map(() => (h("div", { class: "skeleton-col" }, h("div", { class: "skeleton-header" }), Array(8)
        .fill(0)
        .map(() => (h("div", { class: "skeleton-row" }, h("div", { class: "skeleton-cell" }), h("div", { class: "skeleton-cell" })))))))));
};
//# sourceMappingURL=pricing-table.js.map
