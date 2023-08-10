const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

// Obtengo hecho aleatorio
export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

// Este código abajo es lo mismo que el código de arriba, ambos devuelven una promesa

// export const getRandomFact = () => {
//   return fetch(CAT_ENDPOINT_RANDOM_FACT)
//     .then(res => res.json())
//     .then(data => {
//       const { fact } = data
//       return fact
//     })
// }
