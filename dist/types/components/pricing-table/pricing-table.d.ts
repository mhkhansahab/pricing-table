import { EventEmitter } from '../../stencil-public-runtime';
export declare class PricingTable {
    handleButtonClick: EventEmitter;
    loading: boolean;
    products: any[];
    private testData;
    fetchProducts(): Promise<void>;
    componentWillLoad(): Promise<void>;
    handleClick(product: any): void;
    render(): any;
}
