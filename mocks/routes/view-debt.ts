import debt from '../data/debt/debt.json' with {type: 'json'}
const routes = [
  {
    id: 'get-debt-for-party',
    url: '/api/debt/:partyId',
    method: 'GET',
    variants: [
      {
        id: 'success',
        type: 'json',
        options: {
          status: 200,
          body: debt
        }
      }
    ]
  },
]
export default routes
