export async function auth() {
  const act = localStorage.getItem("act");

  if (act) {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: { Authorization: `Bearer ${JSON.parse(act)}` },
      });

      const session = await res.json();
      return session;
    } catch (error) {
      console.error(error);
    }
  } else return;
}
