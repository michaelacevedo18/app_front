//using System.Net.Http.Headers;

//namespace ClienteApiConsumer
//{
//	class Program
//	{
//		static async Task Main(string[] args)
//		{
//			var clienteId = "2945300";
//			var token = "e2yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkVERVF8RURFUVxcQUFSRElMQU18N1VOSk1CTE98NDE1Njg4NzgiLCJuYmYiOjE3MjExNDMxMjIsImV4cCI6MTcyMTE3OTEyMiwiaWF0IjoxNzIxMTQzMTIyLCJpc3MiOiJUZXN0Snd0IiwiYXVkIjoiVGVzdEp3dCJ9.VTwkr9_d5t44tDqf5RCIgBhwTubnCInQ7u8rJz2P_VI";
//			var url = $"https://10.46.4.44:4443/SACWS/api/Clientes?ClienteId={clienteId}";

//			using (var handler = new HttpClientHandler())
//			{
//				handler.ServerCertificateCustomValidationCallback = (message, cert, chain, errors) => true;

//				using (var client = new HttpClient(handler))
//				{
//					client.DefaultRequestHeaders.Accept.Clear();
//					client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
//					client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);

//					try
//					{
//						var response = await client.GetAsync(url);

//						// Leer el contenido de la respuesta
//						var jsonResponse = await response.Content.ReadAsStringAsync();

//						if (response.IsSuccessStatusCode)
//						{
//							Console.WriteLine("Respuesta de la API:");
//							Console.WriteLine(jsonResponse);
//						}
//						else
//						{
//							Console.WriteLine($"Error: {response.StatusCode}");
//							Console.WriteLine("Contenido del error:");
//							Console.WriteLine(jsonResponse);
//						}
//					}
//					catch (HttpRequestException e)
//					{
//						Console.WriteLine($"Error en la solicitud: {e.Message}");
//					}
//				}
//			}
//		}
//	}
//}

using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace ClienteApiConsumer
{
	class Program
	{
		static async Task Main(string[] args)
		{
			var clienteId = "2945300";
			var baseUrl = $"https://10.46.4.44:4443/SACWS/api/Clientes?ClienteId={clienteId}";
			var token = "tu_token_aqui"; // Reemplaza con tu token real

			using (var handler = new HttpClientHandler())
			{
				handler.ServerCertificateCustomValidationCallback = (message, cert, chain, errors) => true;

				using (var cliente = new HttpClient(handler))
				{
					cliente.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
					try
					{
						var response = await cliente.GetAsync(baseUrl);

						if (response.IsSuccessStatusCode)
						{
							var jsonRespuesta = await response.Content.ReadAsStringAsync();
							Console.WriteLine(jsonRespuesta);
						}
						else
						{
							var errorRespuesta = await response.Content.ReadAsStringAsync();
							Console.WriteLine($"Error: {response.StatusCode}");
							Console.WriteLine($"Contenido del error: {errorRespuesta}");
						}
					}
					catch (HttpRequestException e)
					{
						Console.WriteLine($"Error en la solicitud: {e.Message}");
					}
					catch (Exception ex)
					{
						Console.WriteLine($"Error inesperado: {ex.Message}");
					}
				}
			}
		}
	}
}
