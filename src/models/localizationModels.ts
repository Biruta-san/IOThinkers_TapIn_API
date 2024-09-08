// #region PAIS
export interface dbPais {
    PAIS_ID: number;
    PAIS_SufixoTelefonia: number;
    PAIS_Nome: string;
    PAIS_Sigla: string;
}

export interface getPais {
    id: number;
    sufixoTelefonia: number;
    nome: string;
    sigla: string;
}

export interface postPais {
    sufixoTelefonia: number;
    nome: string;
    sigla: string;
}

export interface putPais {
    sufixoTelefonia?: number;
    nome?: string;
    sigla?: string;
}
// #endregion

// #region ESTADO
export interface dbEstado {
    ESTD_ID: number;
    ESTD_Nome: string;
    ESTD_Sigla: string;
    PAIS_ID: number;
}

export interface getEstado {
    id: number;
    nome: string;
    sigla: string;
    paisId: number;
}

export interface postEstado {
    nome: string;
    sigla: string;
    paisId: number;
}

export interface putEstado {
    nome?: string;
    sigla?: string;
    paisId?: number;
}
// #endregion

// #region CIDADE
export interface dbCidade {
    CIDA_ID: number;
    CIDA_Nome: string;
    ESTD_ID: number;
}

export interface getCidade {
    id: number;
    nome: string;
    estadoId: number;
}

export interface postCidade {
    nome: string;
    estadoId: number;
}

export interface putCidade {
    nome?: string;
    estadoId?: number;
}
// #endregion