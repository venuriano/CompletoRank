export interface Resena {
  id: number;
  usuarioId: number;
  localId: number;
  comentario: string;
  puntuacion: number;
  fecha: Date;
  imagen?: string;
}