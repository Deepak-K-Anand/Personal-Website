/* eslint-disable @lwc/lwc/no-inner-html */
import { createElement } from "lwc";
import ResumeApp from "resume/app";

const app = createElement("resume-app", { is: ResumeApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector("#main").innerHTML = "";
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector("#main").appendChild(app);
