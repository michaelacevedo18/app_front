/*import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/clienteData';

@Injectable({
  providedIn: 'root'
})
export class SacwsService {

  private apiUrl = 'https://sacwsuat.epm.com.co:60055/api/Clientes';

  constructor(private http: HttpClient) { }

  getList(): Observable<Cliente[]> {
    const url = `${this.apiUrl}?ClienteId=294530`;

    const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkVERVF8RURFUVxcQUFSRElMQU18QlhMVEtQNzF8NDE1MTU3NjkiLCJuYmYiOjE3MjA2MTc3OTAsImV4cCI6MTcyMDY1Mzc5MCwiaWF0IjoxNzIwNjE3NzkwLCJpc3MiOiJUZXN0Snd0IiwiYXVkIjoiVGVzdEp3dCJ9.zUz43WTJi0nvVbNCTSZSO70yWLlZ5iQrpnvu_Y1qGrw';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    
    return this.http.get<Cliente[]>(url, { headers });
  }
}*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, of, throwError } from 'rxjs';
import { Cliente } from '../interfaces/clienteData';
import { Invoice } from '../interfaces/invoiceData';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SacwsService {

  private apiUrl = 'https://sacwsuat.epm.com.co:60055/api/Clientes';
  private apiUrlLogin = 'https://sacwsuat.epm.com.co:60055/api/autenticacion/login';

  constructor(private http: HttpClient) { }

  //Login
  login(): Observable<string> {
    const strDominioLdapp = "EDEQ";
    const usuarioo ="EDEQ\\AARDILAM";
    const passwordd ="sacpruebas";
    const body = {
      strUsuario: usuarioo,
      strPassword: passwordd,
      strDominioLdap: strDominioLdapp
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<string>(this.apiUrlLogin, body, { headers: headers });
  }


  getListServ(): Observable<Cliente[]> {
    const url = `${this.apiUrl}?ClienteId=294530`;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkVERVF8RURFUVxcQUFSRElMQU18TzlBT1o1NUp8NDE1MTc3NjAiLCJuYmYiOjE3MjA2NDE1ODUsImV4cCI6MTcyMDY3NzU4NSwiaWF0IjoxNzIwNjQxNTg1LCJpc3MiOiJUZXN0Snd0IiwiYXVkIjoiVGVzdEp3dCJ9.dqGlQfygOBIWaiZBmQC1GxJT9Vpt72ND4k_q5qbmSpA';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Cliente[]>(url, { headers });
  }



  // Endpoint URL
  getListServ2(idCliente: string): Observable<Cliente[]> {
    const url2 = `https://10.46.4.44:4443/SACWS/api/Clientes?ClienteId=${idCliente}`;
    const token = 'e2yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkVERVF8RURFUVxcQUFSRElMQU18N1VOSk1CTE98NDE1Njg4NzgiLCJuYmYiOjE3MjExNDMxMjIsImV4cCI6MTcyMTE3OTEyMiwiaWF0IjoxNzIxMTQzMTIyLCJpc3MiOiJUZXN0Snd0IiwiYXVkIjoiVGVzdEp3dCJ9.VTwkr9_d5t44tDqf5RCIgBhwTubnCInQ7u8rJz2P_VI';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Cliente[]>(url2, { headers }).pipe(
      tap(response => {
        console.log('Respuesta del servidor:', response);
      }),
      catchError(error => {
        console.error('Error en la llamada HTTP:', error);
        return throwError(error); // Re-lanzar el error
      })
    );
  }

  getList(): Observable<Cliente[]> {
    const mockCliente: Cliente = {
      "$id": "2",
      "lngClienteId": '294530',
      "strDvClienteId": "4",
      "strNombre": "QUICENO SABOGAL. LUCEIDA",
      "strSoundexNombre": "Q252",
      "intEstadoCliente": 0,
      "intEstadoSuministro": 0,
      "intEstadoFacturacion": 0,
      "strDireccion": "CRA 10 CL 10 -45 AP 603 - CENTRO - ARMENIA",
      "strSoundexDir": "CRA10#CL#10#45",
      "intDepto": 63,
      "intZona": 11,
      "intMunicipio": 1,
      "intBarrio": 1074,
      "intCentroPoblado": 0,
      "intCodigoArea": 1,
      "strInformacionAdicional": null,
      "lngTelefono": 3008300994,
      "lngTelefonoCelular": 3008300994,
      "lngTelefonoContacto": 3008300994,
      "strTieneDirPostal": null,
      "strFichaCatastral": "630010106000000240001000000000",
      "lngNit": 24573590,
      "strApellido1": "QUICENO",
      "strApellido2": "SABOGAL",
      "strNombre1": "LUCEIDA",
      "strNombre2": null,
      "intTipoPersona": 1,
      "strCodigoEntidad": null,
      "intCiclo": 25,
      "lngRutaLectura": 11124146600,
      "intTarifa": 102,
      "intGrupoCu": 102,
      "intClaseServicio": 1,
      "intEstrato": 4.0,
      "intMedidaTension": 1,
      "intNroMedidores": 1,
      "decFactorUtilizacion": 36.0,
      "dblCargaContratada": 4.8,
      "dblCargaInstalada": 0.5,
      "dblCargaAdicional": 0.0,
      "decFactorAdicional": 0.0,
      "decFactorReferencia": 1.0,
      "strCargaAforada": "N",
      "intNumeroDias": 30,
      "strExentoIntereses": "N",
      "strExentoSuspension": "N",
      "strIndSaldo": "N",
      "strIndCritica": "A",
      "strIndFacturacion": "S",
      "intCantidadCasas": 1,
      "intTipoVencimiento": 1,
      "intTipoBloqueo": 0,
      "strTipoCliente": null,
      "intConsecutivo": 69,
      "intCorrCreditos": 1,
      "intCorrPagos": 59,
      "intFechaCreacion": 2458393,
      "intFechaAccion": 2458400,
      "intFechaLecturaAnt": 2460441,
      "intFechaLecturaAct": 2460473,
      "intFechaFacturacionAnt": 2460448,
      "intFechaFacturacionAct": 2460479,
      "intAntiguedadSaldo": 1,
      "lngSaldoActual": 121281,
      "dblInteresesMes": 0.0,
      "dblInteresesAcumulados": 0.0,
      "strCodigoSie": "10",
      "intCodigoCiu": 1,
      "strCodigoSic": null,
      "strModoRecaudo": null,
      "strInstaladorId": null,
      "intMotivoRechazo": 0,
      "intNroFormulario": null,
      "intPuntoSuspension": 0,
      "strCorreo": null,
      "dblFactorImpuesto": 0.0,
      "strResponsable": null,
      "strMatriculaInmobiliaria": "280-224884",
      "dblGpsLatitud": 4.536335,
      "dblGpsLongitud": -75.666069,
      "lngClienteIdRef": null,
      "strCalificacion": "C",
      "strDocumentoTipo": "13",
      "intCodigoGrupo": null,
      "strTipoRecibo": "E",
      "strAutorizaDatos": null,
      "strSegmentoMercado": "HOG_RIE",
      "strTipoServicio": "E",
      "strNumeroDocumento": "24573590",
      "strCondicionPredio": null,
      "strTipoFacturacion": "O",
      "personaId": null,
      "strDEstadoCliente": "Activo",
      "strDEstadoFacturacion": "Sin Proceso",
      "strDCiclo": "ARMENIA URBANO",
      "lngTipoCiclo": 1,
      "strTipoCicloChar": "Mensual",
      "strRlZona": "11",
      "strRlMunicipio": "12",
      "strRlSeccion": "414",
      "strRlOrden": "6600",
      "strDireccionInf": "CRA 10 CL 10 -45 AP 603 - CENTRO",
      "strDZona": "ZONA CENTR0",
      "strDMunicipio": "ARMENIA",
      "strDBarrio": "CENTRO",
      "strDEstrato": "Medio",
      "dblEstratoMedida": 4.0,
      "strDEstadoSuministro": "Con suministro",
      "strDClaseServicio": "Residencial",
      "strTipoConsumo": null,
      "strDTarifa": "RESIDENCIAL CCA",
      "strTarifaProvisional": "N",
      "dblSaldoTotal": 121281.0,
      "strDTipoBloqueo": "Sin bloqueo",
      "strRollBloqueo": null,
      "strDGrupoCu": "NT.1-R.Aerea-P.Edeq-NC.2",
      "strObservaciones": null,
      "strDPuntoSuspension": "Predio conectado.",
      "strDTipoPersona": "Persona Natural",
      "dTipoServicio": "Energía",
      "strCsEstratoMedida": "Residencial - Estrato 4",
      "strEstadoActual": "Pendiente pago",
      "rutaReparto": 11124146600,
      "puntajeSisben": null,
      "estratoCriterio": null,
      "tipoInfoPredial": 2,
      "gpsAltitud": 1491.0,
      "condicionEspecial": 0,
      "mensajeriaInstantanea": null,
      "dDepto": "QUINDIO"
    };
    const mockCliente2: Cliente = {
      "$id": "3",
      "lngClienteId": '1111130',
      "strDvClienteId": "3",
      "strNombre": "ROJAS PEREZ. LINA",
      "strSoundexNombre": "Q252",
      "intEstadoCliente": 0,
      "intEstadoSuministro": 0,
      "intEstadoFacturacion": 0,
      "strDireccion": "CRA 10 CL 10 -45 AP 603 - CENTRO - ARMENIA",
      "strSoundexDir": "CRA10#CL#10#45",
      "intDepto": 63,
      "intZona": 11,
      "intMunicipio": 1,
      "intBarrio": 1074,
      "intCentroPoblado": 0,
      "intCodigoArea": 1,
      "strInformacionAdicional": null,
      "lngTelefono": 3008300994,
      "lngTelefonoCelular": 3008300994,
      "lngTelefonoContacto": 3008300994,
      "strTieneDirPostal": null,
      "strFichaCatastral": "630010106000000240001000000000",
      "lngNit": 24573590,
      "strApellido1": "QUICENO",
      "strApellido2": "SABOGAL",
      "strNombre1": "LUCEIDA",
      "strNombre2": null,
      "intTipoPersona": 1,
      "strCodigoEntidad": null,
      "intCiclo": 25,
      "lngRutaLectura": 11124146600,
      "intTarifa": 102,
      "intGrupoCu": 102,
      "intClaseServicio": 1,
      "intEstrato": 4.0,
      "intMedidaTension": 1,
      "intNroMedidores": 1,
      "decFactorUtilizacion": 36.0,
      "dblCargaContratada": 4.8,
      "dblCargaInstalada": 0.5,
      "dblCargaAdicional": 0.0,
      "decFactorAdicional": 0.0,
      "decFactorReferencia": 1.0,
      "strCargaAforada": "N",
      "intNumeroDias": 30,
      "strExentoIntereses": "N",
      "strExentoSuspension": "N",
      "strIndSaldo": "N",
      "strIndCritica": "A",
      "strIndFacturacion": "S",
      "intCantidadCasas": 1,
      "intTipoVencimiento": 1,
      "intTipoBloqueo": 0,
      "strTipoCliente": null,
      "intConsecutivo": 69,
      "intCorrCreditos": 1,
      "intCorrPagos": 59,
      "intFechaCreacion": 2458393,
      "intFechaAccion": 2458400,
      "intFechaLecturaAnt": 2460441,
      "intFechaLecturaAct": 2460473,
      "intFechaFacturacionAnt": 2460448,
      "intFechaFacturacionAct": 2460479,
      "intAntiguedadSaldo": 1,
      "lngSaldoActual": 121281,
      "dblInteresesMes": 0.0,
      "dblInteresesAcumulados": 0.0,
      "strCodigoSie": "10",
      "intCodigoCiu": 1,
      "strCodigoSic": null,
      "strModoRecaudo": null,
      "strInstaladorId": null,
      "intMotivoRechazo": 0,
      "intNroFormulario": null,
      "intPuntoSuspension": 0,
      "strCorreo": null,
      "dblFactorImpuesto": 0.0,
      "strResponsable": null,
      "strMatriculaInmobiliaria": "280-224884",
      "dblGpsLatitud": 4.536335,
      "dblGpsLongitud": -75.666069,
      "lngClienteIdRef": null,
      "strCalificacion": "C",
      "strDocumentoTipo": "13",
      "intCodigoGrupo": null,
      "strTipoRecibo": "E",
      "strAutorizaDatos": null,
      "strSegmentoMercado": "HOG_RIE",
      "strTipoServicio": "E",
      "strNumeroDocumento": "24573590",
      "strCondicionPredio": null,
      "strTipoFacturacion": "O",
      "personaId": null,
      "strDEstadoCliente": "Activo",
      "strDEstadoFacturacion": "Sin Proceso",
      "strDCiclo": "ARMENIA URBANO",
      "lngTipoCiclo": 1,
      "strTipoCicloChar": "Mensual",
      "strRlZona": "11",
      "strRlMunicipio": "12",
      "strRlSeccion": "414",
      "strRlOrden": "6600",
      "strDireccionInf": "CRA 10 CL 10 -45 AP 603 - CENTRO",
      "strDZona": "ZONA CENTR0",
      "strDMunicipio": "ARMENIA",
      "strDBarrio": "CENTRO",
      "strDEstrato": "Medio",
      "dblEstratoMedida": 4.0,
      "strDEstadoSuministro": "Con suministro",
      "strDClaseServicio": "Residencial",
      "strTipoConsumo": null,
      "strDTarifa": "RESIDENCIAL CCA",
      "strTarifaProvisional": "N",
      "dblSaldoTotal": 121281.0,
      "strDTipoBloqueo": "Sin bloqueo",
      "strRollBloqueo": null,
      "strDGrupoCu": "NT.1-R.Aerea-P.Edeq-NC.2",
      "strObservaciones": null,
      "strDPuntoSuspension": "Predio conectado.",
      "strDTipoPersona": "Persona Natural",
      "dTipoServicio": "Energía",
      "strCsEstratoMedida": "Residencial - Estrato 4",
      "strEstadoActual": "Pendiente pago",
      "rutaReparto": 11124146600,
      "puntajeSisben": null,
      "estratoCriterio": null,
      "tipoInfoPredial": 2,
      "gpsAltitud": 1491.0,
      "condicionEspecial": 0,
      "mensajeriaInstantanea": null,
      "dDepto": "QUINDIO"
    };

    const mockData: Cliente[] = [mockCliente, mockCliente2];
    return of(mockData);
  }

  getByClientId(idCliente: string): Observable<Cliente[]> {
    return this.getList().pipe(
      map((clientes: Cliente[]) => clientes.filter(cliente => cliente.lngClienteId === idCliente))
    );
  }

  getListInvoice(): Observable<Invoice[]> {
    const mockCliente: Invoice = {
      "ClienteId": '111130',
      "CorrPagos": 195.0,
      "FechaPago": "2024-01-25T00:00:00",
      "Caja": "FACILISIMO",
      "Recaudador": "ARMENIA",
      "Tipo": "Pago total",
      "Valor": 70207.0,
      "Conceptos": [
        {
          "CorrPagos": 195,
          "CodigoConcepto": 816,
          "Descripcion": "ALUMBRADO PUBLICO C",
          "Valor": 28126
        },
        {
          "CorrPagos": 195,
          "CodigoConcepto": 1,
          "Descripcion": "CONSUMO ACTIVA",
          "Valor": 45081
        },
        {
          "CorrPagos": 195,
          "CodigoConcepto": 1365,
          "Descripcion": "DEVOLUCION APORTE LA GUAJIRA",
          "Valor": -3000
        }
      ]
    };

    const mockCliente2: Invoice = {
      "ClienteId": '111130',
      "CorrPagos": 196.0,
      "FechaPago": "2024-02-14T00:00:00",
      "Caja": "FACILISIMO",
      "Recaudador": "ARMENIA",
      "Tipo": "Pago total",
      "Valor": 86967.0,
      "Conceptos": [
      ]
    };
    const mockCliente3: Invoice = {
      "ClienteId": '8082',
      "CorrPagos": 96.0,
      "FechaPago": "2024-02-14T00:00:00",
      "Caja": "FACILISIMO",
      "Recaudador": "ARMENIA",
      "Tipo": "Pago total",
      "Valor": 81117.0,
      "Conceptos": [
        {
          "CorrPagos": 196,
          "CodigoConcepto": 1,
          "Descripcion": "CONSUMO ACTIVA",
          "Valor": 59100
        },
        {
          "CorrPagos": 196,
          "CodigoConcepto": 816,
          "Descripcion": "ALUMBRADO PUBLICO C",
          "Valor": 27867
        }
      ]
    };
    const mockData: Invoice[] = [mockCliente, mockCliente2, mockCliente3];
    return of(mockData);
  }

  getInvoicesByClientId(idCliente: string): Observable<Invoice[]> {
    return this.getListInvoice().pipe(
      map((clientes: Invoice[]) => clientes.filter(cliente => cliente.ClienteId === idCliente))
    );
  }
}

