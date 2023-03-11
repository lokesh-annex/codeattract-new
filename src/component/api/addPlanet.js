const addPlanet = async (data) => {
  const { name } = data;
  const body = { name };
  return axiosInstance({
    url: "planets",
    method: "POST",
    data: body,
  }).then(({ data }) => {
    return data;
  });
};