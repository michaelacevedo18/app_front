export interface Invoice {
    ClienteId: string;
    CorrPagos: number;
    FechaPago: string;
    Caja: string;
    Recaudador: string;
    Tipo: string;
    Valor: number;
    Conceptos: Concept[];
  }
  
  export interface Concept {
    CorrPagos: number;
    CodigoConcepto: number;
    Descripcion: string;
    Valor: number;
  }
  