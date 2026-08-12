import requestSearch from '../data/request/requestSearch.json' with {type: 'json'}
const routes = [
  {
    id: 'request-search',
    url: '/api/requestSearch/:partyId',
    method: 'GET',
    variants: [
      {
        id: 'success',
        type: 'json',
        options: {
          status: 200,
          body: requestSearch
        }
      }
    ]
  }
]

export default routes;
