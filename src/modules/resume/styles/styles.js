import Config from "resume/config";

export default class Styles {
    static load(srcCmp) {
        let link = document.createElement("link");
        link.href = Config.CSS_PATH;
        link.rel = "stylesheet";
        srcCmp.template.appendChild(link);
    }
}
