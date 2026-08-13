export interface Payment {
  datePaid: string,
  paymentMethod: string,
  paymentReference: string,
  payee:  string,
  payeeType: string,
  amount: number,
  status: string
}
