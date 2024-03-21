const URL = 'https://api-colombia.com/api/v1'

export async function getTouristicAttractions() {
  const res = await fetch(`${URL}/TouristicAttraction`)
  return await res.json()
}

export async function getTouristicAttractionById(id) {
  const res = await fetch(`${URL}/TouristicAttraction/${id}`)
  return await res.json()
}