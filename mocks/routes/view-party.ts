import agentData from '../data/party/agent.json' with { type: 'json' };
import contributorData from '../data/party/contributor.json' with { type: 'json' };
import serviceCompanyData from '../data/party/service-company.json' with { type: 'json' };

const routes = [
  {
    id: 'view-party', // id of the route
    url: '/api/view-party/:partyId', // url in path-to-regexp format
    method: 'GET', // HTTP method
    variants: [
      {
        id: 'agent', // id of the variant
        type: 'json', // variant type
        options: {
          status: 200,
          body: agentData,
        },
      },
      {
        id: 'contributor', // id of the variant
        type: 'json', // variant type
        options: {
          status: 200,
          body: contributorData,
        },
      },
      {
        id: 'service-company', // id of the variant
        type: 'json', // variant type
        options: {
          status: 200,
          body: serviceCompanyData,
        },
      },
      {
        id: 'not-found', // id of the variant
        type: 'json', // variant type
        options: {
          status: 404,
          body: {},
        },
      },
    ],
  },
];

export default routes;
