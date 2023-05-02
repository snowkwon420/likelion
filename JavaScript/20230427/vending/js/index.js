import ColaGenerator from "./classes/colaGenerator.js";
import VendingMachineEvents from "./classes/vendingMachineEvents2.js";

const colaGenerator = new ColaGenerator();
const vendingMachineEvents = new VendingMachineEvents();

(async function () {
  await colaGenerator.setup();
  vendingMachineEvents.bindEvent();
})();
