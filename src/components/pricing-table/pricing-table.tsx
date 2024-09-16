import { Component, h, Event as StencilEvent, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'pricing-table',
  styleUrl: 'pricing-table.css',
  shadow: true,
})
export class PricingTable {
  @StencilEvent({
    eventName: 'handle-button-click',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  handleButtonClick: EventEmitter;
  @State() loading: boolean = true;

  @State() products = [];

  private testData = [
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
    } catch (e) {
      console.log('err ==>', e);
    } finally {
      this.loading = false;
    }
  }

  async componentWillLoad() {
    this.fetchProducts();
  }

  handleClick(product) {
    this?.handleButtonClick?.emit(product);
  }

  render() {
    if (this.loading) return <SkeletonLoader />;

    return (
      <div class="card-container">
        {this.products?.map(product => {
          return (
            <div class="card">
              <div class="card-title">{product?.name}</div>
              <div class={`price-container ${product?.default_price ? '' : 'visibility-hidden'}`}>
                &pound;{product?.default_price || 0}
                <div>per month</div>
              </div>
              {product?.default_price ? (
                <button type="button" class="card-button" onClick={() => this.handleClick(product)}>
                  Subscribe
                </button>
              ) : (
                <button type="button" class="card-button" onClick={() => this.handleClick(product)}>
                  Contact Sales
                </button>
              )}

              <div class="feature-container">
                <div class="feature-title">This includes:</div>
                <ul class="feature-ul-container">
                  {product?.features?.map(feature => (
                    <li class="feature">{feature?.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const SkeletonLoader = () => {
  return (
    <div class="skeleton-loader">
      {Array(2)
        .fill(0)
        .map(() => (
          <div class="skeleton-col">
            <div class="skeleton-header"></div>
            {Array(8)
              .fill(0)
              .map(() => (
                <div class="skeleton-row">
                  <div class="skeleton-cell"></div>
                  <div class="skeleton-cell"></div>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};
