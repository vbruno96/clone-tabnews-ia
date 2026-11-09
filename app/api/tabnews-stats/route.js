export const dynamic = "force-dynamic"; // garante execução a cada requisição

export async function GET() {
  try {
    const res = await fetch(
      "https://www.tabnews.com.br/api/v1/contents?strategy=new&per_page=1&page=1",
      { cache: "no-store" },
    );

    if (!res.ok) {
      return Response.json({ error: "API indisponível" }, { status: 502 });
    }

    const total = res.headers.get("x-pagination-total-rows");

    return Response.json({
      totalContents: total ? parseInt(total, 10) : null,
    });
  } catch {
    return Response.json({ error: "Falha ao buscar dados" }, { status: 500 });
  }
}
