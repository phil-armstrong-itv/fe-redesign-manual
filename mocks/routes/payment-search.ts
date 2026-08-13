import paymentSearch from '../data/payment/paymentSearch.json' with {type: 'json'}
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
  }
]

export default routes;
