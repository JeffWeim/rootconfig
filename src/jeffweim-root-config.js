import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from "single-spa-layout";
import { registerApplication, start } from "single-spa";

const routes = constructRoutes(document.querySelector("#single-spa-layout"), {
  loaders: {
    topNav: "<h1>Loading topnav</h1>",
  },
  errors: {
    topNav: "<h1>Failed to load topnav</h1>",
  },
});

const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name),
});

// Delay starting the layout engine until the root-config is loaded
const layoutEngine = constructLayoutEngine({
  routes,
  applications,
  active: false,
});

applications.forEach(registerApplication);

System.import("./jeffweim-root-config.js").then(() => {
  // Activate the layout engine once the root-config is loaded
  layoutEngine.activate();
  start();
});
