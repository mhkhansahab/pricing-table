import { h } from "@stencil/core";
export class PricingTable {
    constructor() {
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
        return (h("div", { key: '532725c356c597afd86d7c45aa4b42cf29ed42da', class: "card-container" }, (_a = this.testData) === null || _a === void 0 ? void 0 : _a.map(product => {
            var _a;
            return (h("div", { class: "card" }, h("div", { class: "card-title" }, product === null || product === void 0 ? void 0 : product.name), h("div", { class: `price-container ${(product === null || product === void 0 ? void 0 : product.default_price) ? '' : 'visibility-hidden'}` }, "\u00A3", (product === null || product === void 0 ? void 0 : product.default_price) || 0, h("div", null, "per month")), (product === null || product === void 0 ? void 0 : product.default_price) && (h("button", { type: "button", class: "card-button" }, "Subscribe")), !(product === null || product === void 0 ? void 0 : product.default_price) && (h("button", { type: "button", class: "card-button" }, "Contact Sales")), h("div", { class: "feature-container" }, h("div", { class: "feature-title" }, "This includes:"), h("ul", { class: "feature-ul-container" }, (_a = product === null || product === void 0 ? void 0 : product.features) === null || _a === void 0 ? void 0 : _a.map(feature => (h("li", { class: "feature" }, feature === null || feature === void 0 ? void 0 : feature.name)))))));
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
}
//# sourceMappingURL=pricing-table.js.map
