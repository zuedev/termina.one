export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      if (url.pathname.startsWith("/api/teleport/")) {
        const key = url.pathname.split("/").pop();
        const record = await env.KV.T1_TELEPORTER.get(key);

        if (record)
          return new Response(JSON.stringify({ url: record }), {
            headers: { "Content-Type": "application/json" },
          });

        return new Response("Not Found", { status: 404 });
      }

      return new Response("Ok");
    }

    return env.ASSETS.fetch(request);
  },
};
