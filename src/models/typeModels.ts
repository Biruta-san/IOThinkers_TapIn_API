// #region TIPO INTEGRACAO
export interface dbTipoIntegracao {
  TPIT_ID: number;
  TPIT_Nome: string;
}

export interface getTipoIntegracao {
  id: number;
  nome: string;
}

export interface postTipoIntegracao {
  nome: string;
}

export interface putTipoIntegracao {
  nome?: string;
}
// #endregion
