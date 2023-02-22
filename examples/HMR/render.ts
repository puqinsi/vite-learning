export const render = () => {
  const app = document.querySelector("#root")!;
  app.innerHTML = `
    <h1> HMR </h1>
    <p>this is HMR test：00</p>
  `;
};
