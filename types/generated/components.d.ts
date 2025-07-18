import type { Schema, Struct } from '@strapi/strapi';

export interface TestCards extends Struct.ComponentSchema {
  collectionName: 'components_test_cards';
  info: {
    displayName: 'Flip card';
  };
  attributes: {
    bgColor: Schema.Attribute.Enumeration<
      [
        'bg-royal-blue-400',
        'bg-royal-blue-300',
        'bg-royal-blue-200',
        'bg-royal-blue-100',
      ]
    >;
    hideOnMobile: Schema.Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'test.cards': TestCards;
    }
  }
}
