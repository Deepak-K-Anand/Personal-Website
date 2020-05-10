import { LightningElement, api } from "lwc";

import Styles from "resume/styles";

export default class Body extends LightningElement {
    @api resume;

    constructor() {
        super();

        Styles.load(this);
    }
}
