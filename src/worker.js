onmessage = (e) => {
  const message = e.data;
  console.log(`[From Main]: ${message}`);
  setTimeout(() => postMessage("Polo!"), 3000);
};
