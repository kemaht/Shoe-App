import axios, { AxiosError } from "axios";

const API_URL = "https://fluffy-meme-5gvqrwq55gxjfrxj-3000.app.github.dev/api";

export const getNikeShoeData = async (model: string): Promise<NikeShoeData> => {
  return new Promise<NikeShoeData>((resolve, reject) => {
    axios
      .get(`${API_URL}/shoe/${model}`)
      .then((res) => {
        resolve({
          brand: 'Nike',
          model: model,
          color: res.data.color,
          price: res.data.price,
        });
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 404) {
            reject("Brand not found");
          } else {
            // It's a good practice to reject with an Error object
            reject(axiosError.message);
          }
        } else {
          // Handle non-Axios errors
          reject("An unknown error occurred");
        }
      });
  });
};
