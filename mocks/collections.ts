const collections = [
  {
    id: 'contributor', // collection id
    routes: [
      'view-party:contributor',
      'request-search:success',
      'payment-search:success',
      'payment-search-with-query-params:success',
      'party-relationships:contributor-with-agent',
      'get-debt-for-party:success',
    ],
  },
  {
    id: 'deceased-contributor',
    routes: [
      'view-party:contributor-deceased',
      'request-search:success',
      'payment-search:success',
      'payment-search-with-query-params:success',
      'party-relationships:contributor-with-deceased',
      'get-debt-for-party:success',
    ],
  },
  {
    id: 'service-company',
    routes: [
      'view-party:service-company',
      'request-search:success',
      'payment-search:success',
      'payment-search-with-query-params:success',
      'party-relationships:service-company-with-contributors',
      'get-debt-for-party:success',
    ],
  },
  {
    id: 'agent',
    routes: [
      'view-party:agent',
      'request-search:success',
      'payment-search:success',
      'payment-search-with-query-params:success',
      'party-relationships:contributor-with-deceased',
      'party-relationships:agent-with-contributors',
      'get-debt-for-party:success',
    ],
  },
];

export default collections;
