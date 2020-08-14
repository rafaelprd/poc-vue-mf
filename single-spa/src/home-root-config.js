import { registerApplication, start } from "single-spa";

registerApplication({
  // name: "@single-spa/welcome",
  // app: () => System.import("https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"),
  name: '@app/navbar',
  app: () => System.import("@app/navbar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@app/app-a",
  app: () => System.import("@app/app-a"),
  activeWhen: ["/app-a"]
});

registerApplication({
  name: "@app/app-b",
  app: () => System.import("@app/app-b"),
  activeWhen: ["/app-b"]
});

start({
  urlRerouteOnly: true,
});
