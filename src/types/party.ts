export interface Party {
  id: string;
  type: PartyType;
  demographicDetails: ContributorDemographicDetails | AgentServiceCompanyDemographicDetails;
  paymentDetails: PaymentDetails;
  vatDetails: VatDetails;
}

export type PartyType = 'contributor' | 'serviceCompany' | 'agent';

export interface Contributor extends Party {
  type: 'contributor';
  demographicDetails: ContributorDemographicDetails;
  unionPensionDetails: UnionPensionDetails[];
  deceasedDate?: Date;
}

export interface ServiceCompany extends Party {
  type: 'serviceCompany';
  demographicDetails: AgentServiceCompanyDemographicDetails;
}

export interface Agent extends Party {
  type: 'agent';
  demographicDetails: AgentServiceCompanyDemographicDetails;
}

export interface DemographicDetails {
  address: Address;
  emails: Emails;
  contactNumber?: string;
  gtvapId?: string;
  status: 'active' | 'untraceable';
}

export interface ContributorDemographicDetails extends DemographicDetails {
  names: ContributorNames;
  dateOfBirth?: Date;
  niNumber?: string;
  foreignEntertainer?: boolean;
}

export interface AgentServiceCompanyDemographicDetails extends DemographicDetails {
  name: string;
}

export interface Emails {
  primary?: string;
  payDocuments?: string;
  vat?: string;
}

export interface Address {
  line1: string;
  line2?: string;
  line3?: string;
  town?: string;
  postcode?: string;
  country: string;
}

export interface ContributorNames {
  first: string;
  middle?: string;
  last: string;
  stage?: string;
}

export interface PaymentDetails {
  type: 'uk' | 'sepa' | 'international';
  accountName: string;
  onHold: boolean;
}

export interface UkPaymentDetails extends PaymentDetails {
  type: 'uk',
  bankName?: string;
  sortCode: string;
  accountNumber: string;
  rollNumber?: string;
}

export interface SepaPaymentDetails extends PaymentDetails {
  type: 'sepa';
  currency: string;
  iban: string;
  bicCode: string;
}

export interface InternationalPaymentDetails extends PaymentDetails {
  type: 'international';
  currency: string;
  iban: string;
  bicCode: string;
  specialInstructions: string;
}

export interface VatDetails {
  status: 'eligible' | 'ineligible';
  vatNumber?: string;
  startDate?: Date;
  endDate?: Date;
  sbas: SbaDetails[]
}

export interface SbaDetails {
  startDate: Date;
  endDate: Date;
  status: 'signed' | 'unsigned';
}

export interface UnionPensionDetails {
  name: string;
  enrolled: boolean;
  pensionNumber: string;
}

export interface RelationshipDetails {
  agents: Relationship[];
  serviceCompanies: Relationship[];
  deceased: DeceasedRelationshipDetails[];
}

export interface Relationship {
  name: string;
  partyId: string;
  status: string;
}

export interface DeceasedRelationshipDetails extends Relationship {
  relationship: 'beneficiary' | 'executor';
  endDate: Date;
}
