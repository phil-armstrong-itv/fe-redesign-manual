export interface Engagement {
  referenceNumber: string;
  startDate: Date;
  endDate: Date;
  type: string;
  contributorName: string;
  contracteeName: string;
  payeeName: string;
  programmeName: string;
  totalPaid: number;
  status: string;
}
