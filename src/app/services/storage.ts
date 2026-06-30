import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  private storagePromise: Promise<void>;

  constructor(private storage: Storage) {
    // Inicializamos el storage y guardamos la promesa
    this.storagePromise = this.init();
  }

  private async init(): Promise<void> {
    // Si ya existe, no lo volvemos a crear
    if (this._storage != null) {
      return;
    }
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Método auxiliar para asegurar que el storage esté listo antes de cualquier operación
  private async ensureStorageReady(): Promise<void> {
    await this.storagePromise;
  }

  public async set(key: string, value: any): Promise<void> {
    await this.ensureStorageReady();
    await this._storage?.set(key, value);
  }

  public async get(key: string): Promise<any> {
    await this.ensureStorageReady();
    return await this._storage?.get(key);
  }

  public async remove(key: string): Promise<void> {
    await this.ensureStorageReady();
    await this._storage?.remove(key);
  }

  public async clear(): Promise<void> {
    await this.ensureStorageReady();
    await this._storage?.clear();
  }
}