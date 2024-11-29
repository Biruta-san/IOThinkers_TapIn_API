/*
  Warnings:

  - You are about to drop the column `HOIM_Base64` on the `HotelImagem` table. All the data in the column will be lost.
  - You are about to drop the column `HOIM_GUIDArquivo` on the `HotelImagem` table. All the data in the column will be lost.
  - You are about to drop the column `HOIM_NomeArquivo` on the `HotelImagem` table. All the data in the column will be lost.
  - Added the required column `HOIM_Link` to the `HotelImagem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `HotelImagem` DROP COLUMN `HOIM_Base64`,
    DROP COLUMN `HOIM_GUIDArquivo`,
    DROP COLUMN `HOIM_NomeArquivo`,
    ADD COLUMN `HOIM_Link` LONGTEXT NOT NULL;

-- Usuario
INSERT INTO Usuario (USUA_Nome, USUA_Email, USUA_Senha) VALUES
('Marcelo Ribeiro', 'marceloribeiro@gmail.com' ,'U2FsdGVkX1/XrnUC0Al9UUw3bjcE2m1AXG6wTJ00+ZA='),
('Otavio Reis', 'otavioreis@gmail.com' ,'U2FsdGVkX1+cTNo2qhbNfvwm8VRvZIZKWP3JqMXIlX8='),
('Marcos Gustavo', 'marcosgustavo@gmail.com' ,'U2FsdGVkX1/D82D2SRYIFFDEWfTopWlujlFhp5tldEQ='),
('Maria Raquel', 'mariaraquel@gmail.com' ,'U2FsdGVkX1/oWZIDNVgKodLjGGeh91Oh75vmOIQfnqs='),
('Paola Fernanda', 'paolafernanda@gmail.com' ,'U2FsdGVkX18gvjZxzDmhz/E8qZe2Al/cr3khFujYhyY='),
('Heitor Gabriel', 'heitorgabriel@gmail.com' ,'U2FsdGVkX19ehRwLeSVnBrp5bwy1bmgHkaOK1gUpib0='),
('Júlio César', 'juliocesar@gmail.com' ,'U2FsdGVkX1+GEk8De5oEVHlGPLvD+zyA+QBz/pSK9Kw='),
('Dora Lis', 'doralis@gmail.com' ,'U2FsdGVkX1/IH/d/TE9ZvRzlOm6KkFRVkaNloXGe/fo='),
('Bela Sofia', 'belasofia@gmail.com' ,'U2FsdGVkX1+v8B049Bc+StBPF5bb9TIYSmibHynJbN0=');

-- Pais
INSERT INTO Pais (PAIS_ID, PAIS_SufixoTelefonia, PAIS_Nome, PAIS_Sigla) VALUES 
(1, 54, 'Argentina', 'ARG'),
(2, 591, 'Bolívia', 'BOL'),
(3, 55, 'Brasil', 'BR'),
(4, 56, 'Chile', 'CHL'),
(5, 57, 'Colômbia', 'CO'),
(6, 593, 'Equador', 'EC'),
(11, 595, 'Paraguai', 'PAR'),
(12, 51, 'Peru', 'PER'),
(14, 598, 'Uruguai', 'URU'),
(15, 58, 'Venezuela', 'VE');

-- Estado
INSERT INTO Estado (ESTD_ID, ESTD_Nome, ESTD_Sigla, PAIS_ID) VALUES
(1, 'Acre', 'AC', 3),
(2, 'Alagoas', 'AL', 3),
(3, 'Amapá', 'AP', 3),
(4, 'Amazonas', 'AM', 3),
(5, 'Bahia', 'BA', 3),
(6, 'Ceará', 'CE', 3),
(7, 'Distrito Federal', 'DF', 3),
(8, 'Espírito Santo', 'ES', 3),
(9, 'Goiás', 'GO', 3),
(10, 'Maranhão', 'MA', 3),
(11, 'Mato Grosso', 'MT', 3),
(12, 'Mato Grosso do Sul', 'MS', 3),
(13, 'Minas Gerais', 'MG', 3),
(14, 'Pará', 'PA', 3),
(15, 'Paraíba', 'PB', 3),
(16, 'Paraná', 'PR', 3),
(17, 'Pernambuco', 'PE', 3),
(18, 'Piauí', 'PI', 3),
(19, 'Rio de Janeiro', 'RJ', 3),
(20, 'Rio Grande do Norte', 'RN', 3),
(21, 'Rio Grande do Sul', 'RS', 3),
(22, 'Rondônia', 'RO', 3),
(23, 'Roraima', 'RR', 3),
(24, 'Santa Catarina', 'SC', 3),
(25, 'São Paulo', 'SP', 3),
(26, 'Sergipe', 'SE', 3),
(27, 'Tocantins', 'TO', 3);

-- Cidade
INSERT INTO Cidade (CIDA_ID, CIDA_Nome, ESTD_ID) VALUES
(1, 'Patos de Minas',13),
(2, 'Pouso Alegre',13),
(3, 'Teófilo Otoni',13),
(4, 'Varginha',13),
(5, 'Conselheiro Lafaiete',13),
(6, 'Sabará',13),
(7, 'Vespasiano',13),
(8, 'Barbacena',13),
(9, 'Araguari',13),
(10, 'Itabira',13),
(11, 'Passos',13),
(12, 'Nova Lima',13),
(13, 'Araxá',13),
(14, 'Nova Serrana',13),
(15, 'Lavras',13),
(16, 'Coronel Fabriciano',13),
(17, 'Muriaé',13),
(18, 'Ubá',13),
(19, 'Ituiutaba',13),
(20, 'Itaúna',13),
(21, 'Pará de Minas',13),
(22, 'São Paulo',25),
(23, 'Guarulhos',25),
(24, 'Campinas',25),
(25, 'São Bernardo do Campo',25),
(26, 'Santo André',25),
(27, 'Sorocaba',25),
(28, 'Osasco',25),
(29, 'Ribeirão Preto',25),
(30, 'São José dos Campos',25),
(31, 'São José do Rio Preto',25),
(32, 'Mogi das Cruzes',25),
(33, 'Jundiaí',25),
(34, 'Piracicaba',25),
(35, 'Santos',25),
(36, 'Mauá',25),
(37, 'Diadema',25),
(38, 'Carapicuíba',25),
(39, 'Bauru',25),
(40, 'Itaquaquecetuba',25),
(41, 'Praia Grande',25),
(42, 'Franca',25),
(43, 'São Vicente',25),
(44, 'Barueri',25),
(45, 'Taubaté',25),
(46, 'Suzano',25),
(47, 'Limeira',25),
(48, 'Guarujá',25),
(49, 'Sumaré',25),
(50, 'Cotia',25),
(51, 'Taboão da Serra',25),
(52, 'Indaiatuba',25),
(53, 'São Carlos',25),
(54, 'Embu das Artes',25),
(55, 'Araraquara',25);

-- HOTEIS E ENDEREÇOS
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (1, 'França- Flat Studio', '000-1', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('', 1, 566, 'Caiçaras', 1, 'R. Dos Arujás');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (2, 'Gálatas Golden Hotel', '000-2', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('', 2, 129, 'Cônego Getulio', 1, 'Av. Juscelino Kubitscheck');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (3, 'HZ Hotel - Patos de Minas', '000-3', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('', 3, 371, 'Centro', 1, 'R. Padre Caldeira');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (4, 'Gálatas Central Hotel Ltda EPP', '000-4', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('', 4, 169, 'Centro', 1, 'R. Afonso Pena');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (5, 'Hotel San Raphael', '000-5', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('', 5, 150, 'Centro histórico', 22, 'Largo do Arouche');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (6, 'Mirian Hotel', '000-6', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('', 6, 60, 'Cristo Redentor', 1, 'R. Alagoas');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (7, 'Gran Roza Hotel', '000-7', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('', 7, 939, 'Centro', 1, 'R. Maj. Gote');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (8, 'Ibis Budget', '000-8', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('38702-192', 8, 696, 'Caiçaras', 1, 'R. Marabá Avenue');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (9, 'Hotel Victor', '000-9', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('38700-006', 9, 1210, 'Santa Terezinha', 1, 'Av. Piauí');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (10, 'Hotel Volp', '000-10', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('38700-242', 10, 39, 'Lagoa Grande', 1, 'R. Alagoas');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (11, 'Class Hotel Pouso Alegre', '000-11', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('', 11, 193, 'Centro', 2, 'R. Prof. Jorge Beltrão');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (12, 'Fênix Hotel Pouso Alegre', '000-12', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('37550-113', 12, 143, 'Centro', 2, 'Rua Bernardino de Campos');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (13, 'Pouso Alegre Hotel', '000-13', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('37550-000', 13, 193, 'Centro', 2, 'R. Prof. Jorge Beltrão');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (14, 'Hotel Fernandao', '000-14', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('37550-000', 14, 850, ' Ipiranga', 2, 'R.Rod. Fernão Dias');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (15, 'Hotel Arlen 2', '000-15', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('37553-436', 15, 69, 'Bom Jesus', 2, 'R. Francisco Corrêa Beraldo');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (16, 'Front Hotel Comfort Teófilo Otoni', '000-16', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('39803-087', 16, 76, 'Dr. Laerte Laender', 3, 'R. Eng. Célso Murta');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (17, 'Hotel Beira Rio', '000-17', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('39802-000 ', 17, 130, 'Centro', 3, 'Av. Dr. Luís Boali Pôrto Salman');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (18, 'Hotel das Palmeiras', '000-18', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('39803-075', 18, 43, 'São Diogo', 3, 'R. Augusto Marx');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (19, 'Hotel Capital das Pedras', '000-19', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('39803-025', 19, 54, ' São Diogo', 3, 'Rua Adib Cadah');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (20, 'Hotel Real', '000-20', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('39803-075', 20, 11, 'São Diogo', 3, 'R. Otávio Esteves Otoní');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (21, 'Class Hotel Varginha', '000-21', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('37062-770', 21, 555, 'Jardim Petropolis', 4, 'Av. Castelo Branco');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (22, 'Hotel Fênix Varginha', '000-22', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('37062-180', 22, 3333, 'Jardim Andere', 4, 'Av. Princesa do Sul');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (23, 'TRYP by Wyndham Varginha Cafe Royal', '000-23', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('37010-000', 23, 310, 'Centro', 4, 'Av. Benjamin Constant');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (24, 'Via Garden Varginha Hotel', '000-24', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('37012-110', 24, 10, 'Vila Verde', 4, 'Av. José Benedito de Figueiredo');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (25, 'HOTEL VARGINHA I', '000-25', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('37002-501', 25, 120, 'Centro', 4, 'Av. Maj. Venâncio');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (26, 'Hotel Golden Inn', '000-26', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('36400-052', 26, 26, 'Centro', 5, 'R. Ver. Jucá Pena');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (27, 'Minas Platinum Hotel ', '000-27', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('36400-000', 27, 899, 'Carijós', 5, 'R. Lopes Franco');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (28, 'Vertentes Suítes Hotel', '000-28', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('36400-117', 28, 150, 'Campo Alegre', 5, 'R. Dudu Nascimento');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (29, 'Hotel Meri', '000-29', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('36405-018', 29, 3, 'Centro', 5, 'R. Cel. Albino');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (30, 'Hotel Villa Real', '000-30', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('36400-000', 30, 21, 'Centro', 5, 'R. José Nicolau de Queirós');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (31, 'Pousada Villa Real', '000-31', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('34505-440', 31, 76, 'Centro', 6, 'Av. Pref. Serafim Mota Barros');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (32, 'Pousada Sant Ana', '000-32', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('34525-650', 32, 137, 'Arraial Velho', 6, 'R. Ant. Avendanha');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (33, 'Hotel Nossa Senhora da Conceição', '000-33', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('34505-440', 33, 95, 'Nossa Sra. da Conceicao', 6, 'R. Tulouri');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (34, 'Hotel do ouro Sabará pernoite', '000-34', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('34525-280', 34, 237, 'Morro da Cruz', 6, 'R. Santa Cruz');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (35, 'Hostel Chalé Mineiro', '000-35', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('30260-120', 35, 288, 'Santa Efigênia', 6, 'R. Santa Luzia');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (36, 'Lord Hotel', '000-37', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('33200-000', 36, 1620, 'Centro', 7, 'Av. Thales Chagas');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (37, 'Hotel Grande Minas', '000-38', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('33200-000', 37, 234, 'Parque Jardim Itaú', 7, 'Av. Thales Chagas');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (38, 'Ouro Hotel', '000-39', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES(' 33200-000', 38, 68, ' Centro', 7, 'R. Amélia Gelmin');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (39, 'Hotel Supreme Choice ', '000-39', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('', 39, 10, ' Zona Rural', 7, 'R.MG-010');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (40, 'HF Minas Hotel', '000-40', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('33200-000', 40, 300, 'Parque Jardim Itaú', 7, 'Av. Thales Chagas');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (41, 'ibis budget Barbacena', '000-41', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES(' 36200-008', 41, 1027, 'Pontilhão', 8, 'Av. Gov. Bias Fortes');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (42, 'Hotel Master Plaza', '000-42', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('36200-070', 42, 47, 'Caicaras', 8, 'R. Francisco Figueiredo Abranches');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (43, 'Village Plaza Hotel', '000-43', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('36205-426', 43, 46, 'Caicaras', 8, 'R. Rio Verde');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (44, 'Hotel Escola Senac Grogotó', '000-44', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('3339-3100', 44, 1, 'Caicaras', 8, 'R.Alameda Artur Fontana');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (45, 'Hotel Glória', '000-45', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('3939-1216', 45, 15, 'Centro', 9, 'R. Treze de Maio');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (46, 'Prime Hotel Araguari', '000-46', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('38440-083', 46, 462, 'Centro', 9, 'R. Cel. Lindolfo Rodrigues da Cunha');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (47, 'Monte Castro Executive Hotel', '000-47', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('38440-046', 47, 1870, 'Centro', 9, 'Av. Mato Grosso');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (48, 'Orsi Hotel', '000-48', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('38440-222', 48, 333, 'Centro', 9, 'R. Rui Barbosa');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (49, 'Big Executive Hotel', '000-49', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('38440-042', 49, 1305, 'Bosque', 9, 'Av. Minas Gerais');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (50, 'Hotel Santorine Plaza', '000-50', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('35900-005', 50, 106, 'Centro', 10, 'R. Nove de Outubro');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (51, 'Guest House da Cris', '000-51', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('35900-442', 51, 1323, 'Água Fresca', 10, 'Tv. Tab. Valdemar de Alvarenga Lage');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (52, 'Premium Executive Hotel', '000-52', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('35900-700', 52, 45, 'Vila Santa Rosa', 10, 'Av. Ver. Osório Sampaio');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (53, 'Domus Hotéis', '000-53', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('35900-515', 53, 16, 'Maj. Lage de Baixo', 10, 'R. Malacacheta');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (54, 'Hotel Santorine Prime', '000-54', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('35900-680', 54, 1349, 'Itabira', 10, 'Av. Cristina Gazire');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (55, 'Class Hotel Passos', '000-55', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('37900-140', 55, 3661, 'Canjeranus', 11, 'Av. Comendador Francisco Avelino Maia');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (56, 'Minas Palace Hotel', '000-56', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('37900-106', 56, 355, 'Belo Horizonte', 11, 'R. dos Funcionários');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (57, 'Hotel Mohallem', '000-57', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('37902-367', 57, 4202, 'Centro', 11, 'Av. Comendador Francisco Avelino Maia');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (58, 'Hostel da Moda', '000-58', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('37902-005', 58, 3340, 'Muarama', 11, 'Av. Comendador Francisco Avelino Maia');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (59, 'Presidente Hotel', '000-59', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('37900-084', 59, 215, 'Centro', 11, 'Praça Monsenhor Messias Braganca');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (60, 'Pousada Rio Branco Nova Lima', '000-60', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('34000-000', 60, 191, 'Centro', 12, 'Av. Rio Branco');
INSERT INTO Hotel (HOTL_ID, HOTL_Nome, HOTL_IdentificacaoTributaria, HOTL_AcumulaPontuacao) VALUES (61, 'Piemonte Hotel', '000-61', 0);	
INSERT INTO HotelEndereco (HOEN_CEP, HOTL_ID, HOEN_Numero, HOEN_Bairro, CIDA_ID, HOEN_Endereco) VALUES('34006-053', 61, 488, 'Vila da Serra', 12, 'R. Min. Orozimbo Nonato');
 
-- IMAGENS
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (1, 'https://images.homify.com/v1575925139/p/photo/image/3287104/SA_I-01.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (1, 'https://images.homify.com/v1496707717/p/photo/image/2044517/04.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (1, 'https://media.homify.com/p/photo/projects/c889affc-7f45-41c3-bbbf-c54a2babb6df.png');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/61629899.jpg?k=777b2634fd2c2d0df4f475b35aab1e2aa8c241b26d6a23075d0ddc664f4a8ed9&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (2, 'https://content.r9cdn.net/rimg/himg/ff/df/b7/expediav2-790693-d658ef-758020.jpg?width=1200&height=630&crop=true');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/82573470.jpg?k=4601b6b0f66e38d33f46e1b5e315d20685c3d0a7357c680c1c5bbf5e88b26c77&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (2, 'https://galatas-golden.minas-gerais-hotels.com/data/Images/OriginalPhoto/3176/317692/317692993/image-patos-de-minas-galatas-golden-hotel-9.JPEG');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (3, 'https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grq6lwb4htd1/b/tecimob-production/o/media/f857a887-360b-4ea0-9aa7-4707100c2e85/properties/43a1c9e3-e059-4856-81ac-b569bc6ce4a2/images/44e1da82-ecb1-48ab-b3a2-99c5d080f40a1706711627ltMn.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (3, 'https://hzhotel.com.br/wp-content/uploads/2020/07/hz-hotel-patos-de-minas-6-1170x660.jpeg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (3, 'https://hzhotel.com.br/wp-content/uploads/2020/07/hz-hotel-patos-de-minas-3-1170x660.jpeg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (4, 'https://galatas-central-hotel-patos-de-minas.ibooked.com.br/data/Photos/OriginalPhoto/12955/1295586/1295586952/Galatas-Central-Hotel-Patos-de-Minas-Exterior.JPEG');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (4, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/90/f1/98/galatas-central-hotel.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (4, 'https://galatas-central.minas-gerais-hotels.com/data/Images/OriginalPhoto/13485/1348586/1348586510/image-patos-de-minas-galatas-central-hotel-2.JPEG');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (5, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/17623873.jpg?k=b952cb80dc3ecc4df3b662e9544c8ef0a2cfd480c92d3654d86c9254d7bcff4e&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (5, 'https://grupohel.com/wp/wp-content/uploads/2022/11/THUMBNAIL-111.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (5, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/17624312.jpg?k=1ead004dbe869c4cf1ace170464f61d8854bbdff9309a7c4806ed8694d4b3acf&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (5, 'https://sanraphael.com.br/wp-content/uploads/2022/06/WP_20150905_003.jpg');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (6, 'https://images.trvl-media.com/lodging/49000000/48930000/48927000/48926986/2268b251.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (6, 'https://images.trvl-media.com/lodging/49000000/48930000/48927000/48926986/000d0aca.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (6, 'https://images.trvl-media.com/lodging/49000000/48930000/48927000/48926986/214e3c33.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (6, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjCqJU0VkZgEhm6L2jYs6PB4XaZvCVb5F9LUF2f6EjqBPkKN2fix8mCiCWzot6VUtg-7I&usqp=CAU');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (7, 'https://novo-roza.hotels-brazil.net/data/Images/OriginalPhoto/11449/1144961/1144961879/image-patos-de-minas-novo-roza-hotel-1.JPEG');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (7, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/63665759.jpg?k=655f49ad2cd25541a5f1ce4c9d507601c22b3693956af900fe7866ca8b5c6ba5&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (7, 'https://novo-roza.hotels-brazil.net/data/Images/OriginalPhoto/1946/194669/194669245/image-patos-de-minas-novo-roza-hotel-12.JPEG');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (7, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/63675555.jpg?k=ac8ccf83fb20d714c8f274b967958c2a64bc1e7e9b3ab37450ba260c68e79c2b&o=&hp=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (8, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjtj8yuzul5P9qz3fiC4vhrmJ7EDMISbpCw&s');			
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (9, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/e3/fb/26/class-hotel-pouso-alegre.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (9, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/0a/74/19/photo0jpg.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (9, 'https://images.trvl-media.com/lodging/19000000/18130000/18126900/18126803/80cf6596.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (9, 'https://lirp.cdn-website.com/8c4e1a12/dms3rep/multi/opt/Class+Pouso+Alegre+%28baixas%29+03-f1f1e11d-640w.jpg');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (10, 'https://volp.minas-gerais-hotels.com/data/Images/OriginalPhoto/6354/635467/635467770/image-patos-de-minas-hotel-volp-1.JPEG');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (10, 'https://www.hotelvolp.com.br/imgs/slide/quarto-1.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (10, 'https://www.hotelvolp.com.br/imgs/hotel/dormitorios/dormitorio-3.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (11, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463121463.jpg?k=f7d0a1e922745d49db9ad6c713cb7efe0bbeede2c676e421109bea3f149a5042&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (11, 'https://lirp.cdn-website.com/8c4e1a12/dms3rep/multi/opt/Class+Pouso+Alegre+%28baixas%29+12-640w.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (11, 'https://images.trvl-media.com/lodging/19000000/18130000/18126900/18126803/80cf6596.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (11, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463123267.jpg?k=b5fdb15de6c25dfccf03ad9ed90ea0b63164661bef34f9ab2942e9de65d1463d&o=&hp=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (12, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/251304746.jpg?k=444f53c1acb3df8b0244b40523268962b0a0ae53e1ee760b9ae87d024323ca7d&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (12, 'https://images.trvl-media.com/lodging/7000000/6520000/6516400/6516317/0d730a9e.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (12, 'https://www.kayak.com.br/rimg/himg/48/5d/dc/expediav2-436185-31cbd4-405507.jpg?width=1366&height=768&crop=true');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (13, 'https://y.cdrst.com/foto/hotel-sf/93bdc/granderesp/hotel-pouso-alegre-general-ce4fddb.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (13, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/266269502.jpg?k=67cc4e1a9f7177a77596e5bad179b5646d62d8e590368c09bec7d13c651f503b&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (13, 'https://images.trvl-media.com/lodging/33000000/32710000/32700700/32700670/5a41c1d6.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (14, 'https://fernandao.minas-gerais-hotels.com/data/Images/OriginalPhoto/15783/1578389/1578389312/image-pouso-alegre-hotel-fernandao-25.JPEG');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (14, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/e2/f8/90/hotel-fernandao.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (14, 'https://fernandao.minas-gerais-hotels.com/data/Images/OriginalPhoto/15783/1578389/1578389264/image-pouso-alegre-hotel-fernandao-1.JPEG');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (14, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/15/f9/7c/hotel-fernandao.jpg?w=300&h=-1&s=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (15, 'https://hotelarlen.com.br/wp-content/uploads/2022/05/cafe-pet-hotel-arlen-99.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (15, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/6c/0b/46/essa-e-a-nova-fachada.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (15, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402287022.jpg?k=0f587122e7b67eb08707ae43aaef3e621687cf547d7d17c9d1c1051b47945c7f&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (15, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402287743.jpg?k=751e22309b7dad73dc89a1ed0293ba5b1ceb6f8b5cccca0caab07abbed1c9630&o=&hp=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (16, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/335776481.jpg?k=26655f9336cb87d1b6acb80c58c86b647794288c9a4f0cde589657b0647289c4&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (16, 'https://front-comfort.minas-gerais-hotels.com/data/Images/700x500w/11824/1182410/1182410716/image-teofilo-otoni-front-comfort-1.JPEG');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (16, 'https://front-comfort.minas-gerais-hotels.com/data/Images/OriginalPhoto/12050/1205080/1205080354/image-teofilo-otoni-front-comfort-7.JPEG');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (16, 'https://images.trvl-media.com/lodging/75000000/74540000/74534400/74534365/bdf457e6.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (17, 'https://www.amerishoteis.com.br/english/wp-content/uploads/2021/06/hotel-beira-rio-600x400.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (17, 'https://beira-mar-hotel-2.hoteis-noreste-de-brasil.com/data/Images/OriginalPhoto/8472/847205/847205003/image-aracaju-beira-mar-hotel-2-16.JPEG');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (17, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/ef/7e/fe/fachada-do-hotel.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (17, 'https://hotel-beira-rio-teofilo-otoni.minas-gerais-hotels.com/data/Photos/OriginalPhoto/16002/1600261/1600261546/photo-hotel-beira-rio-39802-000-teofilo-otoni-2.JPEG');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (18, 'https://www.hoteldaspalmeiras.com.br/data1/images/182897917.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (18, 'https://www.hoteldaspalmeiras.com.br/data1/images/195398211.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (18, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/af/9c/df/hotel-das-palmeiras.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (18, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/183150060.jpg?k=3909ad424667bbb3959ff2b5d3a1738fb0a485a1f0a89231f7a7dd377ccdd59e&o=&hp=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (19, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/442200964.jpg?k=394fbaf0348fb64f683f97a701767c009515aa8e271c2064c71e05907f2e72a9&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (19, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/94/7c/92/hotel-capital-das-pedras.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (19, 'https://hotel-capital-das-pedras-teofilo-otoni.ibooked.com.br/data/Photos/OriginalPhoto/14736/1473614/1473614704/Hotel-Capital-Das-Pedras-Teofilo-Otoni-Exterior.JPEG');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (19, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/442200993.jpg?k=6cf32225b3688f98e5e39d751be3374826f4a2aba3ac6af1f34452d353de93b6&o=&hp=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (20, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/445323107.jpg?k=570765606d145c94b9041b04ec07b1736083b22dc1d28373caf177be9e46052a&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (20, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/320480686.jpg?k=8ae67770b03f6c9196c3c9529b96dd58aa2ee23c2ffc496e3c5d5d33e824fdda&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (20, 'https://images.trvl-media.com/lodging/19000000/18530000/18526800/18526771/35bb7b45.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (20, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/320479865.jpg?k=17f03b85af7a8e2111c4dbb913969c99d1b80bd0650e8528df6f46180a4a8c23&o=&hp=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (21, 'https://lirp.cdn-website.com/8c4e1a12/dms3rep/multi/opt/Class+Varginha+%28baixas%29+10-640w.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (21, 'https://lirp.cdn-website.com/8c4e1a12/dms3rep/multi/opt/Class+hotel+Varginha%2C+hotelaria+%283%29-640w.jpeg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (21, 'https://lirp.cdn-website.com/8c4e1a12/dms3rep/multi/opt/Class+Varginha+%28baixas%29+12-640w.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (21, 'https://images.trvl-media.com/lodging/30000000/29320000/29310600/29310584/71466a16.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (22, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/346444497.jpg?k=37526ef63a542f2d243afd83204e213d9f11551e4d8d75b74e37d0f2954b8291&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (22, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/295263351.jpg?k=d422a09baaea683e9c6dd0c557fe810a0d72149bb2f5c5934ad429792dc87082&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (22, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/c0/fc/1e/fenix-hotel-varginha.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (22, 'https://lirp.cdn-website.com/139ea637/dms3rep/multi/opt/261428385-640w.jpg');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (23, 'https://images.trvl-media.com/lodging/23000000/22840000/22837200/22837139/a029ff54.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (23, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/199488272.jpg?k=92845c169675e0a6e585329dbdc552afd2f85b9b3ae4f80839cf0f8f2c9e9306&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (23, 'https://www.wyndhamhotels.com/content/dam/property-images/en-us/wt/br/others/varginha/48192/48192_lobby_view_1.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (23, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/139941442.jpg?k=2ea53c17193a685a937ad5a0fd7fd4010a4d4810430e5ffe08364983abfaa40d&o=&hp=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (24, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/186413582.jpg?k=23d286361af39e50005c4ed47f243e42596f36f0388f250ecb32bec00df507e2&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (24, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5b8bsdJ1g6hna4xc0iuMG84l_5bvUio5yQ&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (24, 'https://via-garden-varginha.minas-gerais-hotels.com/data/Images/OriginalPhoto/7676/767642/767642374/image-varginha-minas-gerais-via-garden-varginha-hotel-16.JPEG');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (24, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/186465781.jpg?k=9dd1da86e30a4299f46cf43cb8faadb90487d2ed859da67304ac7ffba6e06a5f&o=&hp=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (25, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/260437628.jpg?k=5da993978fd4bedeaa8f1daf3ed6e81c7ef33c84ab5861d37c2e1f8e0ba49f1a&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (25, 'https://www.hotelvarginha.com.br/wp-content/uploads/2020/06/P1080139.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (25, 'https://www.hotelvarginha.com.br/wp-content/uploads/2020/06/P1080104.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (25, 'https://lirp.cdn-website.com/8c4e1a12/dms3rep/multi/opt/Class+hotel+Varginha%2C+hotelaria+%283%29-640w.jpeg');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (26, 'https://cf.bstatic.com/xdata/images/hotel/max500/186099186.jpg?k=a95977b100a6a65c4ef96cc914d82956055c2566a41ee365fdf6e8c343544e4a&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (26, 'https://golden-inn-lafaiete.minas-gerais-hotels.com/data/Images/OriginalPhoto/7703/770398/770398633/image-conselheiro-lafaiete-hotel-golden-inn-lafaiete-18.JPEG');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (26, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/24/cf/57/golden-inn-hotel.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (26, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/fc/8c/e0/hotel-golden-inn.jpg?w=700&h=-1&s=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (27, 'https://cf.bstatic.com/xdata/images/hotel/max500/128213184.jpg?k=bcfd1d0122872ea30b395c68730cb696a3de485413ed802af1179eac60131025&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (27, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/46/5d/41/minas-platinum.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (27, 'https://cdn-hweb.hsystem.com.br/613fa6a1561e94133377262e/95b4271ae4ce433591333db3f49461c4.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (27, 'https://q-xx.bstatic.com/xdata/images/hotel/max500/43591109.jpg?k=213fd10291c51e2d6e34c5e9dc6905ced175edf1cb11b584893d17bc32b9d962&o=');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (28, 'https://cf.bstatic.com/xdata/images/hotel/max500/39346863.jpg?k=89e81da88eb666e1faa1bf5b3988df21b704d277b8ea5f83120f1180afd0f52c&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (28, 'https://media-cdn.tripadvisor.com/media/photo-s/07/b0/a7/35/vertentes-suites-hotel.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (28, 'https://vertentes-suites.minas-gerais-hotels.com/data/Images/OriginalPhoto/7472/747233/747233549/image-conselheiro-lafaiete-vertentes-suites-hotel-5.JPEG');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (28, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/41168357.jpg?k=af5c9b6288bdf87ea3e36c151fbb80acbe806def6ca0697b0aaae270d49146e4&o=&hp=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (29, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/421656609.jpg?k=016c75a6c30cd6ceb4496f6e7b94e36310b70038f76d24e11172aeb716a8e533&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (29, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/319300143.jpg?k=ab4b523a4cc9ae48f4933f776a71f26728cb73d22ce150e1239c05eb89fb4a81&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (29, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/79589412.jpg?k=7402bddab3cfc72f8c695f68f44050e058f8f1a652a59bf17322c611447fb26d&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (29, 'https://www.kayak.com.br/rimg/himg/a4/54/05/expediav2-700318-79fd1c-218424.jpg?width=1366&height=768&crop=true');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (30, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/8e/dc/25/pousada-villa-real.jpg?w=600&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (30, 'https://pousadavillareal.net/wp-content/uploads/2021/11/pousada-villa-real-a-sua-pousada-em-sabara-MG-32.jpg.webp');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (30, 'https://pousada-villa-real-36325-000.minas-gerais-hotels.com/data/Images/OriginalPhoto/13237/1323742/1323742768/image-tiradentes-pousada-villa-real-36325-000-11.JPEG');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (30, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/26/01/a2/recepcao.jpg?w=700&h=-1&s=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (31, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/94/f6/7d/20161110-100219-largejpg.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (31, 'https://pousada-villa-real-36325-000.minas-gerais-hotels.com/data/Images/OriginalPhoto/9675/967501/967501528/image-tiradentes-pousada-villa-real-36325-000-20.JPEG');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (31, 'https://pousadavillareal.net/wp-content/uploads/elementor/thumbs/pousada-villa-real-a-sua-pousada-em-sabara-MG-41-q720z4g7pmxzorq8f07du16kbgmkjnusy0g7t14gz0.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (31, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/240647769.jpg?k=1dcf606dc6ba3b308f86ee2aadbee15eb2bffc2b301d5dc76dfb83fb2d7882f2&o=&hp=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (32, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/524537244.jpg?k=3630a8117d4b2774f3b8116247f718c1dda8ff9ceecad5747d3b16e80cff575a&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (32, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/51/a0/9b/oyo-pousada-sant-ana.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (32, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/524537062.jpg?k=f4c5219ed6a648c4c9aece21f39857ff52d94a41ab2da718e3abac52c1c7c1be&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (33, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/437340473.jpg?k=c1008e83a8923ff0383c7ff800f269c107e57a28db0cb41df04d1b88c0eca64e&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (33, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/437341091.jpg?k=3e3d212fb96881cd7406531cd27695392d113b263f1169e3b460f9bb4775b463&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (33, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/437341068.jpg?k=3001b0e5d2c70628a02e159427fe5b61fecd6727a68f7f898a5b2a181dd384a8&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (33, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/437340673.jpg?k=04c47cf2a888fd660feb1bb170bd8a26c0a3618e5e03b8f5597fbb15b27db807&o=&hp=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (34, 'https://lh5.googleusercontent.com/p/AF1QipPlPQVXtuxZi8fUfZz05V10Ooqwh57nPTcPQPgD=s296-w296-h168-n-k-no-v1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (34, 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghoGVmSEChyfjXVKhH_PJBvt3xkAKP1IUm4BGvzlMApsykbcPy02i1cRW1yJ5FInPVAiWVjF5T4vSZPjGnpjDLot83FOX_OyzaYGX-y6oelLZOwEFNms-hsRozprFtI1a2t9SK8L0p1Q/s1600/527236_110065922476294_1013586363_n.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (34, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/437340476.jpg?k=bf263fa0ca0fcd22294ef91c79a0e3d990e2b56178766cc54638a56eb81ba477&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (35, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYRS9NlJFpT9zxBxB-YFpebBsydC0_4IGaBg&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (35, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/79224013.jpg?k=7989547b0662b9539875e9a0fee4469a27044a8f1f56415793997456c44b25c3&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (35, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/79224002.jpg?k=20635f9521348613e065f16dc4d661b7503f16f3f781194c1554783a4a646439&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (35, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/349506149.jpg?k=ace994d570ff48009d31c69e30b0508f1b2e37880b668ddb7da87028a676ecfa&o=&hp=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (36, 'https://i.ytimg.com/vi/mxsZ_BPkxHk/maxresdefault.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (36, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRveA9U0I42BYYatxxftKjoVBLB8ERt8v3wxQ&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (36, 'https://www.opovo.com.br/_midias/jpg/2024/03/26/750x500/1_estado_do_lord_hotel__31-26122894.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (37, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXGR_g4OENTsw2FrxEKp3-PRH4NcdER4MvcA&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (37, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/40/ce/57/hotel-gran-minas.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (37, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/c5/1a/59/hotel-grande-minas.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (38, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/393352674.jpg?k=d609b12aafb24b38ebad51d684fc81e2d9454d89fad8061237a2b748df01a85f&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (38, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/394790479.jpg?k=e6830230d85d823b5ece0d9bc50f7db7bedd42d7277c6b6b6abcb0fe3dc0ed99&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (38, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/98252878.jpg?k=154e46e28e7a7fdf60ec33f342d0b7c04296bb8db9c14ef76b5a75b76a2112c8&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (38, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/239103619.jpg?k=78e5aa0dac06ad967ded42aaca71991d2ad1c1fc1543851be67f9310101ec419&o=&hp=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (39, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/b1/f6/47/capa-fachada.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (39, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/b1/f6/59/std-casal-adaptado.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (39, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefa1Uy9mb9bKlFfYt5e2FsEF579Ly14cc8g&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (39, 'https://lirp.cdn-website.com/7a4837ab/dms3rep/multi/opt/12+C%C3%B3pia+de+STD+DBL+AZUL-640w.jpg');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (40, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8wCj02WaGFvsBq-hnkdU1kPZ3vVIOajhn3Q&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (40, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTQIn6alxu2eA2bit_gjFmmHAxM1SQeShl8zd666WyWTRG1yvc72wFhwitgQFWaX6Gg8&usqp=CAU');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (40, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWCRut2nCwO9aAlcviiR4-GBkFwskj18RN4g&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (41, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/111034746.jpg?k=ad8a3f6e5bf523ef2e04cf5b60abcc0bd1609fca0d57430d2bb21b1eb67bbf37&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (41, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/111050817.jpg?k=66061a59a9ffb4b6502fc8dbe0b0273dee325f6b630aaf7b2150d5573e791fc8&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (41, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/220025155.jpg?k=388e96bc437ea6400087ff0e9d43372721a5344b12ae741d4451f868c4b437e1&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (41, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/328372507.jpg?k=236c0f7c17739a6b2f43a734f406f3aefda89868bc58a68b63c7b631b123661c&o=&hp=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (42, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZE3T_vfs0Bl9M9dTG16e9TKgmmIfYOHTldQ&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (42, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/64437855.jpg?k=c25f062fc6b7a71daec8968b3624a48675324cbddb0cb33a7e4a1a6918467d39&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (42, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjWgA0JshH0zabATFHN0XR_KyQXn4SvUe6w&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (42, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHDS9Z_ZEYiN9Ox40e_yNzAgFYEgPsgMZ9dg&s');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (43, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/152060255.jpg?k=f273a38ef12651848962890ef5e83d2e1bf2300dfedf416f09e4db2440389267&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (43, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/346097656.jpg?k=92d9865e0c32f039285206152f2d27caf7e5fef8458a2b887a7e209fb2784a3e&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (43, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/368629863.jpg?k=a923c7baa751b7b7ddf6f5ec634190807439dc38d49cb6344bd0a3175a2d24d2&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (43, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWhdbcu7chCuN0zuXzd04PIq74onArqKFRig&s');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (44, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qkG7K4YfLPbuEz117NlmfqFr4wrlpmQ1kw&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (44, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCQ14WdrGUX6LIwVP3QsTueX4p0Xn2t2rfw&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (44, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgE3CeUlpsc47ukb1P9hq9UaZL76LeC55vvA&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (44, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8hi3v1TxagNw91ri6E6KmWONpLUCMvAsuYw&s');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (45, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYq-seDTbVxfHygSz2LftjF_PR4jR8NecoA&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (45, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkDVzQeIXF7E2jnO3mMX-eK-5DqZpVkjafOOpI6cttajn2qR3pQhye4fsR8asKaQ5bjWc&usqp=CAU');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (45, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf8_G2563tTElWKkbQk3zx0Akjawh1QoC11Q&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (46, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxAho_MagGfw_kb-AS3Q9y9NO0v8A9IQEbSA&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (46, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2SGqX995r3Rpj9a3dE_uNxN7442ttnFOXw&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (46, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKD-0yWhh_2e5GOPoVVARonm1wBsl1ST80Q&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (46, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2b6QAL-U9hN2wkzSeCPISKqgYJClza122CA&s');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (47, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXpZ5-Q6uZKOPycAmSK7sHwFO3qlKxYGkgWQ&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (47, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulljXaU8TaC2EX_p1FVyaaZSrKLTLojoSrQ&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (47, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcExLsSQhS6SiZWA1VwemxGpFZzoZg9TeFuQ&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (47, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYOaMQun-VJHMKyXG4leBRQ8co4QCisYZ1Dg&s');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (48, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOedU5JQ67mu5kYRL8CaCrRBHOPCRorOQ3xw&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (48, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGKc3L_rOvZv-hb5bDI5ORHY3H2Q9HQeULdQ&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (48, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjponyxYsUK8y6GGhTxr0awEe0vqKkluWMEA&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (48, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYlQUWvxPJfeHT19Pe0pC99k7tXjFft9t5Q&s');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (49, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxBlw_D_RZEYauxb8EBz2IOy-pGUFDEIrBg&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (49, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhfsDohrMZwTUKuKFtv3YKrji8RBEbKQ2zw&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (49, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNTFaOIGSHzrwtNg7j-MTZRHh99iBvARNmfg&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (49, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUU4uzBuky-diabybB5t-qtR7lvrFGJ7iSHw&s');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (50, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbUwgEaMOEs77qE5vfhaxaSdCGnx6pXASILg&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (50, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KfMu-dF3CRurasrWoUhicUxdRVg4tLuIjA&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (50, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65azqix_pF0v2-n1dcjNECLCsnBAzfFbMzw&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (50, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTMqAZf_aYSpmEdJY1g74tXxam89JUfvqeeg&s');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (51, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xKw1Z5QrZF_VlaslFNzc7DSdBanhf2-iRQ&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (51, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0aVZQLmL5t2YORa2hqE_k60RwEw1qvj2Qdw&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (51, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLm8TDTD9awKFqaQXWhu95jeOePBULIvXRiA&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (51, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs96BBXl317QH0VbUJJirsvanpAzOA1w2e1Q&s');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (52, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhCG5xU59T9wa-tr6yqndvmOPuh52OhfUO6Q&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (52, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcF0jSViG8nlXERoap1iH1dhkXWVGDEOqlww&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (52, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmG5H5TS3J11_0H1xxNcL9sWbZ2j6hnMrv2g&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (52, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa95EdctzXt4rGSmCxzhc44uPly9vg_d6xUQ&s');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (53, 'https://images3.motor-reserva.com.br/cdn-cgi/image/fit=scale-down,format=webp,width=640,quality=60/curl/motor_reserva/images/configuracao_estabelecimento/cliente_2252/202302131676315752capa1.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (53, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/21003023.jpg?k=ff05a72450e7e797fb98afa9b80d946f8e2109e88409d52de6c4774d8acc80aa&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (53, 'https://www.amerishoteis.com.br/wp-content/uploads/2021/06/domus-hotel-veneza.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (53, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/9f/dd/31/domus-hoteis-esplanada.jpg?w=700&h=-1&s=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (54, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/472229261.jpg?k=959cccf35b9c62efbdb51500e713491ed52a668168e478611bf0a4b69410eeea&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (54, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/472229258.jpg?k=5deaec9b849668e13401020b9938ae3ab47651f6f9cd709adfeb08f71f56702f&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (54, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqxFZjxukhjHTPv4FDOladoVjJKWNNcjhqg&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (54, 'https://images.trvl-media.com/lodging/103000000/102220000/102214900/102214886/w758h767x1y1-4248cddc.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (55, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/5d/a2/e0/hotel-class-passos.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (55, 'https://lirp.cdn-website.com/8c4e1a12/dms3rep/multi/opt/MA2_5867-HDR+Rede+Class+Hotel-1920w.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (55, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/a1/be/64/san-diego-suites-rio.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (55, 'https://lirp.cdn-website.com/8c4e1a12/dms3rep/multi/opt/Class+Passos+%28baixas%29+01-bd946ddf-640w.jpg');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (56, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO41gfpmIWnY1sqOAb2ml_SI3u2oa61HPuvg&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (56, 'https://media-cdn.tripadvisor.com/media/photo-s/0b/dd/70/e8/minas-palace-hotel.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (56, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHKLeFqCL3JGOWMkb7kDtBkmTQ_SuipP38Q&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (56, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/163421701.jpg?k=0bdae5349d1ba29e6039b2811c92b35658776fd0fb8625fe52ffb56c9af00b45&o=&hp=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (57, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/83017680.jpg?k=61fb66fbd05c8fb0797b59271980cc0ed348b86d950b04e03cf8aaecc9daf3c9&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (57, 'https://media-cdn.tripadvisor.com/media/photo-s/1a/f0/f4/0b/hotel-mohallem.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (57, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/101166280.jpg?k=f2ff46de31a65762f36a337f03d8352c60f0381cc9069f4387e780f49539cb3d&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (57, 'https://mohallem.minas-gerais-hotels.com/data/Images/OriginalPhoto/1966/196686/196686703/image-passos-hotel-mohallem-17.JPEG');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (58, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0_Yw-GO-hCR8-bThAqkm6IjlTcLlABR8Ew&s');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (58, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/209274086.jpg?k=65da82b0b4f0b03b8e4d6bb80cd82b0500b399a6eed17eeabe875e37af7b7874&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (58, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/219375470.jpg?k=e3c7dcb7d58b4e060c7c110f33347d7764848ff377d08537c68ca69e97c08c73&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (58, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/44/04/de/smile.jpg?w=300&h=-1&s=1');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (59, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/96/c8/5f/piscina-aquecida.jpg?w=600&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (59, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/ea/54/hotel-presidente-4s.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (59, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/540330038.jpg?k=1c3196f79b0ad493f9dbfff431aa9ad2ec3264c61134c4a7572e5ef2e203c261&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (60, 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/297657894.jpg?k=3d33f703f547b5c88ee941fd54fabb287817f761423a4d191491ec1911c65b31&o=');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (60, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/273156408.jpg?k=9131c05ee932ed0b1874838a8964459dc3e5358e61a989d750c949f25fcec83d&o=&hp=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (60, 'https://www.amerishoteis.com.br/wp-content/uploads/2021/06/pousada-rio-branco.jpg');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (60, 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_534,q_40,w_800/hotelier-images/d9/b7/5869746f079790f24561fae57a2ab96eb39fcbdeef3c0f810e734c4c5395.jpeg');
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (61, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/60/06/89/riema-piemonte-suites.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (61, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/60/07/a3/riema-piemonte-suites.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (61, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/60/06/29/riema-piemonte-suites.jpg?w=700&h=-1&s=1');	
INSERT INTO HotelImagem (HOTL_ID, HOIM_Link) VALUES (61, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEONnEQkc1xP3m2kFEEXtXQOi04JPc3VI29Q&s');

-- Hotel Quarto
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (1, 101, 100, 1, 5), (1, 201, 200, 1, 3), (1, 301, 300, 1, 4), (1, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (2, 101, 100, 1, 5), (2, 201, 200, 1, 3), (2, 301, 300, 1, 4), (2, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (3, 101, 100, 1, 5), (3, 201, 200, 1, 3), (3, 301, 300, 1, 4), (3, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (4, 101, 100, 1, 5), (4, 201, 200, 1, 3), (4, 301, 300, 1, 4), (4, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (5, 101, 100, 1, 5), (5, 201, 200, 1, 3), (5, 301, 300, 1, 4), (5, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (6, 101, 100, 1, 5), (6, 201, 200, 1, 3), (6, 301, 300, 1, 4), (6, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (7, 101, 100, 1, 5), (7, 201, 200, 1, 3), (7, 301, 300, 1, 4), (7, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (8, 101, 100, 1, 5), (8, 201, 200, 1, 3), (8, 301, 300, 1, 4), (8, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (9, 101, 100, 1, 5), (9, 201, 200, 1, 3), (9, 301, 300, 1, 4), (9, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (10, 101, 100, 1, 5), (10, 201, 200, 1, 3), (10, 301, 300, 1, 4), (10, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (11, 101, 100, 1, 5), (11, 201, 200, 1, 3), (11, 301, 300, 1, 4), (11, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (12, 101, 100, 1, 5), (12, 201, 200, 1, 3), (12, 301, 300, 1, 4), (12, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (13, 101, 100, 1, 5), (13, 201, 200, 1, 3), (13, 301, 300, 1, 4), (13, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (14, 101, 100, 1, 5), (14, 201, 200, 1, 3), (14, 301, 300, 1, 4), (14, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (15, 101, 100, 1, 5), (15, 201, 200, 1, 3), (15, 301, 300, 1, 4), (15, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (16, 101, 100, 1, 5), (16, 201, 200, 1, 3), (16, 301, 300, 1, 4), (16, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (17, 101, 100, 1, 5), (17, 201, 200, 1, 3), (17, 301, 300, 1, 4), (17, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (18, 101, 100, 1, 5), (18, 201, 200, 1, 3), (18, 301, 300, 1, 4), (18, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (19, 101, 100, 1, 5), (19, 201, 200, 1, 3), (19, 301, 300, 1, 4), (19, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (20, 101, 100, 1, 5), (20, 201, 200, 1, 3), (20, 301, 300, 1, 4), (20, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (21, 101, 100, 1, 5), (21, 201, 200, 1, 3), (21, 301, 300, 1, 4), (21, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (22, 101, 100, 1, 5), (22, 201, 200, 1, 3), (22, 301, 300, 1, 4), (22, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (23, 101, 100, 1, 5), (23, 201, 200, 1, 3), (23, 301, 300, 1, 4), (23, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (24, 101, 100, 1, 5), (24, 201, 200, 1, 3), (24, 301, 300, 1, 4), (24, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (25, 101, 100, 1, 5), (25, 201, 200, 1, 3), (25, 301, 300, 1, 4), (25, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (26, 101, 100, 1, 5), (26, 201, 200, 1, 3), (26, 301, 300, 1, 4), (26, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (27, 101, 100, 1, 5), (27, 201, 200, 1, 3), (27, 301, 300, 1, 4), (27, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (28, 101, 100, 1, 5), (28, 201, 200, 1, 3), (28, 301, 300, 1, 4), (28, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (29, 101, 100, 1, 5), (29, 201, 200, 1, 3), (29, 301, 300, 1, 4), (29, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (30, 101, 100, 1, 5), (30, 201, 200, 1, 3), (30, 301, 300, 1, 4), (30, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (31, 101, 100, 1, 5), (31, 201, 200, 1, 3), (31, 301, 300, 1, 4), (31, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (32, 101, 100, 1, 5), (32, 201, 200, 1, 3), (32, 301, 300, 1, 4), (32, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (33, 101, 100, 1, 5), (33, 201, 200, 1, 3), (33, 301, 300, 1, 4), (33, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (34, 101, 100, 1, 5), (34, 201, 200, 1, 3), (34, 301, 300, 1, 4), (34, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (35, 101, 100, 1, 5), (35, 201, 200, 1, 3), (35, 301, 300, 1, 4), (35, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (36, 101, 100, 1, 5), (36, 201, 200, 1, 3), (36, 301, 300, 1, 4), (36, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (37, 101, 100, 1, 5), (37, 201, 200, 1, 3), (37, 301, 300, 1, 4), (37, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (38, 101, 100, 1, 5), (38, 201, 200, 1, 3), (38, 301, 300, 1, 4), (38, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (39, 101, 100, 1, 5), (39, 201, 200, 1, 3), (39, 301, 300, 1, 4), (39, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (40, 101, 100, 1, 5), (40, 201, 200, 1, 3), (40, 301, 300, 1, 4), (40, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (41, 101, 100, 1, 5), (41, 201, 200, 1, 3), (41, 301, 300, 1, 4), (41, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (42, 101, 100, 1, 5), (42, 201, 200, 1, 3), (42, 301, 300, 1, 4), (42, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (43, 101, 100, 1, 5), (43, 201, 200, 1, 3), (43, 301, 300, 1, 4), (43, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (44, 101, 100, 1, 5), (44, 201, 200, 1, 3), (44, 301, 300, 1, 4), (44, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (45, 101, 100, 1, 5), (45, 201, 200, 1, 3), (45, 301, 300, 1, 4), (45, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (46, 101, 100, 1, 5), (46, 201, 200, 1, 3), (46, 301, 300, 1, 4), (46, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (47, 101, 100, 1, 5), (47, 201, 200, 1, 3), (47, 301, 300, 1, 4), (47, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (48, 101, 100, 1, 5), (48, 201, 200, 1, 3), (48, 301, 300, 1, 4), (48, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (49, 101, 100, 1, 5), (49, 201, 200, 1, 3), (49, 301, 300, 1, 4), (49, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (50, 101, 100, 1, 5), (50, 201, 200, 1, 3), (50, 301, 300, 1, 4), (50, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (51, 101, 100, 1, 5), (51, 201, 200, 1, 3), (51, 301, 300, 1, 4), (51, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (52, 101, 100, 1, 5), (52, 201, 200, 1, 3), (52, 301, 300, 1, 4), (52, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (53, 101, 100, 1, 5), (53, 201, 200, 1, 3), (53, 301, 300, 1, 4), (53, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (54, 101, 100, 1, 5), (54, 201, 200, 1, 3), (54, 301, 300, 1, 4), (54, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (55, 101, 100, 1, 5), (55, 201, 200, 1, 3), (55, 301, 300, 1, 4), (55, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (56, 101, 100, 1, 5), (56, 201, 200, 1, 3), (56, 301, 300, 1, 4), (56, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (57, 101, 100, 1, 5), (57, 201, 200, 1, 3), (57, 301, 300, 1, 4), (57, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (58, 101, 100, 1, 5), (58, 201, 200, 1, 3), (58, 301, 300, 1, 4), (58, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (59, 101, 100, 1, 5), (59, 201, 200, 1, 3), (59, 301, 300, 1, 4), (59, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (60, 101, 100, 1, 5), (60, 201, 200, 1, 3), (60, 301, 300, 1, 4), (60, 401, 400, 1, 2);
INSERT INTO HotelQuarto (HOTL_ID, HOQT_Numero, HOQT_ValorDiaria, HOQT_Ativo, HOQT_CapacidadePessoa) VALUES (61, 101, 100, 1, 5), (61, 201, 200, 1, 3), (61, 301, 300, 1, 4), (61, 401, 400, 1, 2);