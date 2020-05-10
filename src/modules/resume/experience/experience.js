import { LightningElement, api } from "lwc";

import Styles from "resume/styles";

export default class Experience extends LightningElement {
    @api resume;

    indexed;

    constructor() {
        super();

        Styles.load(this);
    }

    get isBusy() {
        return Object.keys(this.resume).length === 0;
    }

    get data() {
        
        return this.resume.sections.experience;
    }
}
