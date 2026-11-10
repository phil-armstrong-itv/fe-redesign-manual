import engagementSearch from '../data/engagements/engagementSearch.json' with {type: 'json'}
const routes = [
  {
    id: 'engagement-search',
    url: '/api/engagementSearch/:partyId',
    method: 'GET',
    variants: [
      {
        id: 'success',
        type: 'json',
        options: {
          status: 200,
          body: engagementSearch
        }
      }
    ]
  }
]

export default routes;
