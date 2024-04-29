export async function getUserFromDb(email: string, password: string) {
  const response = await fetch(
    `http://localhost:3000/api/getUser?email=${email}&password=${password}`
  );

  if (response.status === 401) {
    const errorResponse = await response.json();
    throw new Error(JSON.stringify(errorResponse));
  }

  return response.json();
}
