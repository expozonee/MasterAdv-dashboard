export async function GET(request: Request) {
  const response = await fetch(
    "https://masteradv-backend.vercel.app/categories",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    }
  );
  const data = await response.json();

  return new Response(JSON.stringify({ data }));
}
