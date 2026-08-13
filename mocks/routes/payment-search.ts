import paymentSearch from '../data/payment/paymentSearch.json' with {type: 'json'}
import paymentSearchWithQueryParams from '../data/payment/paymentSearchWithQueryParams.json' with {type: 'json'}
const routes = [
  {
    id: 'payment-search',
    url: '/api/paymentSearch/:partyId',
    method: 'GET',
    variants: [
      {
        id: 'success',
        type: 'json',
        options: {
          status: 200,
          body: paymentSearch
        }
      }
    ]
  },
  {
    id: 'payment-search-with-query-params',
    url: '/api/paymentSearch?*',
    method: 'GET',
    variants: [
      {
        id: 'success',
        type: 'json',
        options: {
          status: 200,
          body: paymentSearchWithQueryParams
        }
      }
    ]
  }
]

export default routes;
