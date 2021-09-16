import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@zuri/duty-shift",
  app: () => System.import("@zuri/duty-shift"),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@zcmain/navbar",
//   app: () => System.import("@zcmain/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
