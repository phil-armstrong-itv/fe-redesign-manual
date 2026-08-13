import contributorWithAgent from '../data/relationships/contributor-with-agent.json' with { type: 'json' };
import contributorWithServiceCompany from '../data/relationships/contributor-with-service-company.json' with { type: 'json' };
import contributorWithDeceased from '../data/relationships/contributor-with-deceased-relationships.json' with { type: 'json' };
const routes = [
  {
    id: 'party-relationships',
    url: '/api/party/:partyId/relationships',
    method: 'GET',
    variants: [
      {
        id: 'contributor-with-agent',
        type: 'json',
        options: {
          status: 200,
          body: contributorWithAgent,
        },
      },
      {
        id: 'contributor-with-service-company',
        type: 'json',
        options: {
          status: 200,
          body: contributorWithServiceCompany,
        },
      },
      {
        id: 'contributor-with-deceased',
        type: 'json',
        options: {
          status: 200,
          body: contributorWithDeceased,
        },
      },
    ],
  },
];

export default routes;
