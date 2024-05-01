interface WeatherData {
  city: string;
  temperature: number;
  humidity: number;
  wind: number;
  rain: number;
}

interface NikeShoeData {
  brand: 'Nike';          // The brand is fixed as 'Nike'
  model: string;          // Specific models of Nike shoes
  color: string;          // The primary color of the shoe
  price: number;          // The retail price of the shoe in dollars
}