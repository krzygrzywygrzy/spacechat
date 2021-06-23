const loginService = async (login, password) => {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify({ login, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return { status: res.status, data };
};

export default loginService;
