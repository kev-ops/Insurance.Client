import { BenefitsDetail } from "./benefits";
import { Setup } from "./setup";

export class Consumer {
    constructor(
        public consumerId: number = 0,
        public insuranceSetupId?: number,
        public consumerName?: string,
        public basicSalary?: number,
        public birthDate?: Date,
        public age?:number,
        public createdDate?: Date,
        public lastModified?: Date,
        public insuranceSetup?: Setup,
        public benefitsDetails?: BenefitsDetail[]

    ) {

    }


}