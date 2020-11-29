/*
    Dados da pagina
   * Nome : Navita
   * Objetivo: Buscar modelos de veiculos da marca escolhida
   * Desenvolvedor: Hernani Almeida
   * data criacao: 29/11/2020
   
*/

import { MaterialModule } from './material.module';

describe('MaterialModule', () => {
  let materialModule: MaterialModule;

  beforeEach(() => {
    materialModule = new MaterialModule();
  });

  it('should create an instance', () => {
    expect(materialModule).toBeTruthy();
  });
});
