# APE005

Los cambios fueron realizados en la rama:
- feature/http-client


Comandos utilizados:
- git add .
- git commit -m "Implementación de práctica HTTP client"
- git push origin feature/http-client

#Estructura del proyecto
/
├── index.html
├── style.css
└── script.js

#Registro de resultados
| Método | URL                                                                                          | Código de estado | Tiempo respuesta | Observaciones CORS   |
| ------ | -------------------------------------------------------------------------------------------- | ---------------- | ---------------- | -------------------- |
| GET    | [https://api.sampleapis.com/futurama/characters](https://api.sampleapis.com/futurama/characters) | 200              | 123 ms           | CORS permitido (`*`) |
