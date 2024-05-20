import client from "@/lib/client";

export async function POST(req: Request) {
  const reqData = await req.json();
  const user = await client.user.create({
    data: {
      name: reqData,
    },
  });
  console.log(user);

  try {
    return new Response(JSON.stringify({ result: "성공" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ result: "실패" }), { status: 400 });
  }
}
