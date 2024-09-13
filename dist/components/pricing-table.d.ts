import type { Components, JSX } from "../types/components";

interface PricingTable extends Components.PricingTable, HTMLElement {}
export const PricingTable: {
    prototype: PricingTable;
    new (): PricingTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
