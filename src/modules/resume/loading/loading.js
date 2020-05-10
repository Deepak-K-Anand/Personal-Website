import { LightningElement, api } from "lwc";
import Styles from "resume/styles";

export default class Loading extends LightningElement {
    @api displayed;

    constructor() {
        super();

        Styles.load(this);
    }
}
