import { LightningElement, api } from "lwc";

import Styles from "resume/styles";

export default class Strengths extends LightningElement {
    @api resume;

    constructor() {
        super();

        Styles.load(this);
    }

    get isBusy() {
        return Object.keys(this.resume).length === 0;
    }

    get data() {
        return this.resume.sections.talent;
    }
}
