export async function refreshToken() {
  const decodeCookie = decodeURIComponent(document.cookie);
  const refreshToken = decodeCookie.split("=")[1];

  try {
    await fetch("https://api.escuelajs.co/api/v1/auth/refresh-token", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refreshToken: `${refreshToken}`,
      }),
    });
  } catch (error) {
    console.error(error);
  }
}
