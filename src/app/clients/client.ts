export class Client {
  idCli?: number;
  razonSocial?: string;
  fechaActiv?: Date;
  neighborhood?: Neighborhood;

  constructor(obj: any) {
    this.idCli = obj.idCli;
    this.razonSocial = obj.razonSocial;
    this.fechaActiv = obj.fechaActiv;
    this.neighborhood = new Neighborhood(obj.neighborhood);
  }
}

export class Neighborhood {
  idBarrio?: number;
  name?: string;

  constructor(obj: any) {
    this.idBarrio = obj.idBarrio;
    this.name = obj.name;
  }
}
