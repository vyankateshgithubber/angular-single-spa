import { pathToActiveWhen, registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return import(/* webpackIgnore: true */ name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

registerApplication("@BFL2/navbar", () =>
  System.import("http://localhost:4210/main.js").then((module) => ({
    bootstrap: module.bootstrap,
    mount: module.mount,
    unmount: module.unmount,
  })),
  () => true  
);
registerApplication("@BFL2/angular-mfe1", () =>
  System.import("http://localhost:4205/main.js").then((module) => ({
    bootstrap: module.bootstrap,
    mount: module.mount,
    unmount: module.unmount,
  })),
  (location) => location.pathname.startsWith('/angular-mfe1')
);

registerApplication("@BFL2/angular-mfe2", () =>
  System.import("http://localhost:4201/main.js").then((module) => ({
    bootstrap: module.bootstrap,
    mount: module.mount,
    unmount: module.unmount,
  })),
  (location) => location.pathname.startsWith('/angular-mfe2')
);
const filteredApplications = applications.filter(
  app => app.name !== "@BFL2/angular-mfe1" && app.name !== "@BFL2/angular-mfe2"
);

filteredApplications.forEach(registerApplication);
layoutEngine.activate();
start();
