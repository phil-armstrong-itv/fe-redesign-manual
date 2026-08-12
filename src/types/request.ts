export interface Request {
  referenceNo: string;
  requestedDate:string;
  formType:string;
  contributorParty: string;
  payeeParty:string;
  workGroup: string;
  programmeName: string;
  total: number;
  status: string;
}
