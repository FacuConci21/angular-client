export class Client {
  idCli?: number;
  razonSocial?: string;
  fechaActiv?: string;
  neighborhood?: {
    idBarrio: number;
    name: string;
    localidad: {
      idLocalidad: number;
      name: string;
    };
  };

  get getNBName(): string {
    return this.neighborhood ? this.neighborhood.name : 'sin cargar';
  }
}
