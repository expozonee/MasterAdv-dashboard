export async function GET(request: Request) {
  const { method } = request;

  if (method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "https://masteradv.vip/",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

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
