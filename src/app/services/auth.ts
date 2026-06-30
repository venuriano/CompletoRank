import { Injectable } from '@angular/core';
import { StorageService } from './storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // BehaviorSubject mantiene el "estado" actual de la autenticación en memoria
  private authState = new BehaviorSubject<boolean>(false);
  private readonly USER_KEY = 'usuario_actual';

  constructor(private storage: StorageService) { 
    this.checkToken(); 
  }

  // Verifica en el Storage si el usuario ya había iniciado sesión previamente
  private async checkToken(): Promise<void> {
    const user = await this.storage.get(this.USER_KEY);
    if (user) {
      this.authState.next(true);
    }
  }

  // Simula un inicio de sesión y guarda el usuario en SQLite/Storage
  public async login(correo: string, password: string): Promise<boolean> {
    // Aquí, en un entorno real, llamarías a tu API. Por ahora lo simulamos:
    if (correo && password) {
      const mockUser: Usuario = { 
        id: 1, 
        nombre: 'Experto en Completos', 
        correo: correo, 
        password: password 
      };
      
      await this.storage.set(this.USER_KEY, mockUser);
      this.authState.next(true);
      return true;
    }
    return false;
  }

  // Cierra sesión y limpia el usuario del Storage
  public async logout(): Promise<void> {
    await this.storage.remove(this.USER_KEY);
    this.authState.next(false);
  }

  // Permite a los componentes suscribirse a los cambios de estado (ej. para ocultar menús)
  public isAuthenticated(): Observable<boolean> {
    return this.authState.asObservable();
  }

  // Método sincrónico rápido utilizado por el Guard para permitir o denegar el paso
  public isLoggedIn(): boolean {
    return this.authState.value;
  }
}