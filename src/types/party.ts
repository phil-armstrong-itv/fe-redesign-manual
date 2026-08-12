export interface Party {

}

export interface Contributor extends Party {
  type: 'contributor';
  demographicDetails: ContributorDemographicDetails;
  paymentDetails: PaymentDetails;
  vatDetails: VatDetails;
  unionPensionDetails: UnionPensionDetails[];
}

export interface ContributorDemographicDetails {
  names: ContributorNames,
  address: Address,
  emails: Emails,
  contactNumber?: string,
  dateOfBirth?: Date,
  niNumber?: string,
  gtvapId?: string,
  status: 'active' | 'untraceable';
  foreignEntertainer?: boolean;
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
