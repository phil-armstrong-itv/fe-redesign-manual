import contributorWithAgent from '../data/relationships/contributor-with-agent.json' with { type: 'json' };
import contributorWithServiceCompany from '../data/relationships/contributor-with-service-company.json' with { type: 'json' };
import contributorWithDeceased from '../data/relationships/contributor-with-deceased-relationships.json' with { type: 'json' };
import agentWithContributors from '../data/relationships/agent-with-contributors.json' with { type: 'json' };
import serviceCompanyWithContributors from '../data/relationships/service-company-with-contributors.json' with { type: 'json' };

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
      {
        id: 'agent-with-contributors',
        type: 'json',
        options: {
          status: 200,
          body: agentWithContributors,
        },
      },
      {
        id: 'service-company-with-contributors',
        type: 'json',
        options: {
          status: 200,
          body: serviceCompanyWithContributors,
        },
      },
    ],
  },
];

export default routes;
