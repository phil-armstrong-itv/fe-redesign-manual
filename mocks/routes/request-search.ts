import requestSearch from '../data/request/requestSearch.json' with {type: 'json'}
import requestSearchWithQueryParams from '../data/request/requestSearchWithQueryParam.json' with {type: 'json'}
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
  },
  {
    id: 'request-search-with-query-params',
    url: '/api/requestSearch?*',
    method: 'GET',
    variants: [
      {
        id: 'success',
        type: 'json',
        options: {
          status: 200,
          body: requestSearchWithQueryParams
        }
      }
    ]
  }
]

export default routes;
