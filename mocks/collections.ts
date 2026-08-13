const collections = [
  {
    id: 'contributor', // collection id
    routes: [
      'view-party:contributor',
      'request-search:success',
      'request-search-with-query-params:success',
      'payment-search:success',
      'party-relationships:contributor-with-agent',
    ],
  },
  {
    id: 'deceased-contributor',
    routes: [
      'view-party:contributor-deceased',
      'request-search:success',
      'request-search-with-query-params:success',
      'payment-search:success',
      'payment-search-with-query-params:success',
      'party-relationships:contributor-with-deceased',
    ],
  },
  {
    id: 'service-company',
    routes: [
      'view-party:service-company',
      'request-search:success',
      'request-search-with-query-params:success',
      'payment-search:success',
      'payment-search-with-query-params:success',
      'party-relationships:contributor-with-deceased',
    ],
  },
  {
    id: 'agent',
    routes: [
      'view-party:agent',
      'request-search:success',
      'request-search-with-query-params:success',
      'payment-search:success',
      'payment-search-with-query-params:success',
      'party-relationships:contributor-with-deceased',
    ],
  },
];

export default collections;
