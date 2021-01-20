const worker = new Worker("../src/worker.js");

worker.onmessage = (e) => {
  // Event handler logic
  const message = e.data;
  console.log(`[From Worker]: ${message}`);
  setTimeout(() => worker.postMessage("Marco!"), 3000);
};

worker.postMessage("Marco!");
