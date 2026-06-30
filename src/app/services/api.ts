import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { StorageService } from './storage';
import { Local } from '../interfaces/local.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Utilizamos JSONPlaceholder como fuente de datos de demostración
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private readonly LOCALES_STORAGE_KEY = 'locales_offline';

  constructor(
    private http: HttpClient,
    private storage: StorageService // Inyectamos tu StorageService personalizado
  ) {}

  /**
   * Obtiene la lista de locales desde la API.
   * Maneja el estado offline en caso de que la API falle o no haya internet.
   */
  getLocales(): Observable<Local[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      
      // 1. MAP: Transformamos la respuesta genérica de la API para que cumpla con la interfaz 'Local'
      map(users => users.map(user => ({
        id: user.id,
        nombre: `Completería ${user.username}`, // Simulamos un nombre de local
        direccion: user.address.street,
        comuna: user.address.city,
        puntuacion: Math.floor(Math.random() * 5) + 1, // Generamos una puntuación aleatoria entre 1 y 5
        imagen: 'https://ionicframework.com/docs/img/demos/card-media.png' // Imagen genérica
      })) as Local[]),

      // 2. TAP: Si la petición HTTP es exitosa, guardamos inmediatamente los datos en Storage
      tap(localesApi => {
        this.storage.set(this.LOCALES_STORAGE_KEY, localesApi);
        console.log('Datos de la API obtenidos y respaldados correctamente.');
      }),

      // 3. CATCHERROR: Si falla la conexión a la API, interceptamos el error y devolvemos los datos del Storage
      catchError(error => {
        console.error('Error al conectar con la API (Posible falta de internet o 404). Cargando modo offline...', error);
        
        // Convertimos la Promesa que devuelve el StorageService a un Observable usando 'from'
        return from(this.storage.get(this.LOCALES_STORAGE_KEY)).pipe(
          map(datosGuardados => {
            if (datosGuardados) {
              return datosGuardados as Local[];
            } else {
              // Si falla la API y tampoco hay nada guardado localmente, retornamos un arreglo vacío
              return [];
            }
          })
        );
      })
    );
  }
}