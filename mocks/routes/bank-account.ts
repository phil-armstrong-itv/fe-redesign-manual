import agentData from '../data/party/agent.json' with { type: 'json' };
import contributorData from '../data/party/contributor.json' with { type: 'json' };
import deceasedContributorData from '../data/party/deceased-contributor.json' with { type: 'json' };
import serviceCompanyData from '../data/party/service-company.json' with { type: 'json' };

const routes = [
  {
    id: 'get-party-bank-account', // id of the route
    url: '/api/party/:partyId/bank-account', // url in path-to-regexp format
    method: 'GET', // HTTP method
    variants: [
      {
        id: 'default', // id of the variant
        type: 'json', // variant type
        options: {
          status: 200,
          body: {
            'bankAccountNumber': '12345678',
          },
        },
      },
    ],
  },
];

export default routes;
