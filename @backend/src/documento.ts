import {DocumentoElectronico } from '@fe/common';
import { Contribuyente } from '@fe/common';
import { DetalleDocumento } from '@fe/common';
import { DatoAdicional } from '@fe/common';
import { DocumentoRelacionado } from '@fe/common';
import { Discrepancia } from '@fe/common';

export const Documento = {
    IdDocumento: '07',
    TipoDocumento: 'NOTA DE CREDITO',
    Emisor: {
        NroDocumento: '20553510661',
        TipoDocumento: '01',
        NombreLegal: 'CONTROL S.A.',
        NombreComercial: 'CONTROL S.A.',
        Ubigeo: '020102',
        Direccion: 'AV. LOS NOGALES S/N.',
        Urbanizacion: 'URB. MIRAFLORES.',
        Departamento: 'LIMA',
        Provincia: 'LIMA',
        Distrito: 'LIMITA',
    } as Contribuyente,
    Receptor: {
        NroDocumento: '20261295246',
        TipoDocumento: '01',
        NombreLegal: 'FM CONTRATISTAS GENERALES S.R.L',
        NombreComercial: 'FM CONTRATISTAS GENERALES S.R.L',
        Ubigeo: '020102',
        Direccion: 'AV. LOS INKAS S/N.',
        Urbanizacion: 'URB. SAN JUAN.',
        Departamento: 'CUSCO',
        Provincia: 'CUSCO',
        Distrito: 'WANCHAQ',
    } as Contribuyente,
    FechaEmision: '2019-06-30',
    Moneda: 'PEN',
    TipoOperacion: '01',
    Gravadas: 0,
    Gratuitas: 0,
    Inafectas: 0,
    Exoneradas: 0,
    DescuentoGlobal: 0,
    Items: [{
        Id: 1,
        Cantidad: 2.00,
        UnidadMedida: 'NIU',
        CodigoItem: 'GLG199',
        Descripcion: 'Grabadora LG Externo Modelo: GE20LU10',
        PrecioUnitario: 83.05,
        PrecioReferencial: 83.05,
        TipoPrecio:  '01',
        TipoImpuesto: '10',
        Impuesto: 1494.92,
        ImpuestoSelectivo: 0,
        OtroImpuesto: 0,
        Descuento: 0,
        PlacaVehiculo: '',
        TotalVenta: 8305.08,
        Suma: 0,
    }as DetalleDocumento],
    TotalVenta: 8305.08,
    TotalOtrosTributos: 0,
    MontoEnLetras: '',
    PlacaVehiculo: '',
    MontoPercepcion: 0,
    MontoDetraccion: 0,
    DatoAdicionales: [{
        Codigo: '',
        Contenido: '',
    } as DatoAdicional ],
    TipoDocAnticipo: '',
    DocAnticipo: '',
    MonedaAnticipo: '',
    MontoAnticipo: 0,
    DatosGuiaTransportista: {},
    Relacionados: [{
        NroDocumento: 'F001-00000093',
        TipoDocumento: '01',
    } as DocumentoRelacionado],
    OtrosDocumentosRelacionados: [{
        NroDocumento: 'FC01-4355',
        TipoDocumento: '01',
    } as DocumentoRelacionado],
    Discrepancias: [{
        NroReferencia: 'F001-00000093',
        Tipo: '01',
        Descripcion: 'Unidades defectuosas, no leen CD que contengan archivos MP3',
    } as Discrepancia],
    NroOrdenCompra: '',
    CalculoIgv: 0,
    CalculoIsc: 0,
    CalculoDetraccion: 0,
} as DocumentoElectronico;