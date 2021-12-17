export interface Cuenta {
    id:               number;
    tipoCuenta:       string;
    nroCuenta:        string;
    saldo:            number;
    fechaApertura:    string;
    perteneceSocio:   number;
    //tieneMovimientos: TieneMovimiento[];
}