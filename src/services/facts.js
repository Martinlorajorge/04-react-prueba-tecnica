const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

// Obtengo un echo aleatorio
export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}
