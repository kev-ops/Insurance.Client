export class BenefitsDetail {
    constructor(
        public benefitsDetailId: number = 0,
        public consumerId?: number,
        public multiple?: number,
        public benefits_Amount_Quotation?: number,
        public pended_Amount?: number,
        public benefits?: number
    ) {

    }
}