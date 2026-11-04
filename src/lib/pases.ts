// src/lib/pases.ts
// La frase del pie del pase, en un solo lugar: la usan el render del
// servidor (Pase.astro) y el script que la actualiza con los datos del panel.
// Repartida en dos lados, el singular y el plural se desincronizan.
export const piePorPases = (cantidad: number) =>
    cantidad === 1 ? "pase en su honor" : "pases en su honor";
