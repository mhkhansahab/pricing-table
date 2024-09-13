import { Component, h } from '@stencil/core';

@Component({
  tag: 'pricing-table',
  styleUrl: 'pricing-table.css',
  shadow: true,
})
export class PricingTable {
  private testData = [
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

  render() {
    return (
      <div class="card-container">
        {this.testData?.map(product => {
          return (
            <div class="card">
              <div class="card-title">{product?.name}</div>
              <div class={`price-container ${product?.default_price ? '' : 'visibility-hidden'}`}>
                &pound;{product?.default_price || 0}
                <div>per month</div>
              </div>
              {product?.default_price && (
                <button type="button" class="card-button">
                  Subscribe
                </button>
              )}
              {!product?.default_price && (
                <button type="button" class="card-button">
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
