import { DailyWord, DailyWordDatabase } from "../models";

const MILISSECONDS_IN_A_MINUTE = 60 * 1000;

export function getToday(): string {
  const todayDate = new Date();
  const correctedDate = new Date(
    todayDate.valueOf() - (todayDate.getTimezoneOffset() * MILISSECONDS_IN_A_MINUTE)
  );

  return correctedDate.toISOString().split('T')[0];
}

export function getDailyWord(): DailyWord {
  return dailyWords[getToday()];
}

export const dailyWords: DailyWordDatabase = {
  '2022-01-07': { edition: '001', date: '2022-01-07', word: 'MARCO' },
  '2022-01-08': { edition: '002', date: '2022-01-08', word: 'PROSA' },
  '2022-01-09': { edition: '003', date: '2022-01-09', word: 'TRENO' },
  '2022-01-10': { edition: '004', date: '2022-01-10', word: 'TURVO' },
  '2022-01-11': { edition: '005', date: '2022-01-11', word: 'JUDIA' },
  '2022-01-12': { edition: '006', date: '2022-01-12', word: 'ACRES' },
  '2022-01-13': { edition: '007', date: '2022-01-13', word: 'FEITO' },
  '2022-01-14': { edition: '008', date: '2022-01-14', word: 'GOTAS' },
  '2022-01-15': { edition: '009', date: '2022-01-15', word: 'BRIGA' },
  '2022-01-16': { edition: '010', date: '2022-01-16', word: 'ATRIO' },
  '2022-01-17': { edition: '011', date: '2022-01-17', word: 'ESPIA' },
  '2022-01-18': { edition: '012', date: '2022-01-18', word: 'TEMPO' },
  '2022-01-19': { edition: '013', date: '2022-01-19', word: 'PLANO' },
  '2022-01-20': { edition: '014', date: '2022-01-20', word: 'SIGNO' },
  '2022-01-21': { edition: '015', date: '2022-01-21', word: 'VEDAR' },
  '2022-01-22': { edition: '016', date: '2022-01-22', word: 'TREVA' },
  '2022-01-23': { edition: '017', date: '2022-01-23', word: 'PITON' },
  '2022-01-24': { edition: '018', date: '2022-01-24', word: 'BISEL' },
  '2022-01-25': { edition: '019', date: '2022-01-25', word: 'VASCO' },
  '2022-01-26': { edition: '020', date: '2022-01-26', word: 'ANTES' },
  '2022-01-27': { edition: '021', date: '2022-01-27', word: 'PASTO' },
  '2022-01-28': { edition: '022', date: '2022-01-28', word: 'UNHAR' },
  '2022-01-29': { edition: '023', date: '2022-01-29', word: 'VIRUS' },
  '2022-01-30': { edition: '024', date: '2022-01-30', word: 'CALVO' },
  '2022-01-31': { edition: '025', date: '2022-01-31', word: 'VISTA' },
  '2022-02-01': { edition: '026', date: '2022-02-01', word: 'PILHA' },
  '2022-02-02': { edition: '027', date: '2022-02-02', word: 'BUZIO' },
  '2022-02-03': { edition: '028', date: '2022-02-03', word: 'LERDA' },
  '2022-02-04': { edition: '029', date: '2022-02-04', word: 'COFRE' },
  '2022-02-05': { edition: '030', date: '2022-02-05', word: 'TUBAS' },
  '2022-02-06': { edition: '031', date: '2022-02-06', word: 'FUNGO' },
  '2022-02-07': { edition: '032', date: '2022-02-07', word: 'SOVAR' },
  '2022-02-08': { edition: '033', date: '2022-02-08', word: 'PAREO' },
  '2022-02-09': { edition: '034', date: '2022-02-09', word: 'NEGRA' },
  '2022-02-10': { edition: '035', date: '2022-02-10', word: 'TOUCA' },
  '2022-02-11': { edition: '036', date: '2022-02-11', word: 'BICHO' },
  '2022-02-12': { edition: '037', date: '2022-02-12', word: 'PUDER' },
  '2022-02-13': { edition: '038', date: '2022-02-13', word: 'CRISE' },
  '2022-02-14': { edition: '039', date: '2022-02-14', word: 'ONTEM' },
  '2022-02-15': { edition: '040', date: '2022-02-15', word: 'PAVIO' },
  '2022-02-16': { edition: '041', date: '2022-02-16', word: 'RUNAS' },
  '2022-02-17': { edition: '042', date: '2022-02-17', word: 'LISTA' },
  '2022-02-18': { edition: '043', date: '2022-02-18', word: 'MENOR' },
  '2022-02-19': { edition: '044', date: '2022-02-19', word: 'HOTEL' },
  '2022-02-20': { edition: '045', date: '2022-02-20', word: 'PAIOL' },
  '2022-02-21': { edition: '046', date: '2022-02-21', word: 'IGUAL' },
  '2022-02-22': { edition: '047', date: '2022-02-22', word: 'TREMA' },
  '2022-02-23': { edition: '048', date: '2022-02-23', word: 'RUBLO' },
  '2022-02-24': { edition: '049', date: '2022-02-24', word: 'FEUDO' },
  '2022-02-25': { edition: '050', date: '2022-02-25', word: 'VENUS' },
  '2022-02-26': { edition: '051', date: '2022-02-26', word: 'ALPES' },
  '2022-02-27': { edition: '052', date: '2022-02-27', word: 'GARIS' },
  '2022-02-28': { edition: '053', date: '2022-02-28', word: 'TENOR' },
  '2022-03-01': { edition: '054', date: '2022-03-01', word: 'ETNIA' },
  '2022-03-02': { edition: '055', date: '2022-03-02', word: 'BOTAR' },
  '2022-03-03': { edition: '056', date: '2022-03-03', word: 'CARNE' },
  '2022-03-04': { edition: '057', date: '2022-03-04', word: 'LINDA' },
  '2022-03-05': { edition: '058', date: '2022-03-05', word: 'PAVIO' },
  '2022-03-06': { edition: '059', date: '2022-03-06', word: 'LEAIS' },
  '2022-03-07': { edition: '060', date: '2022-03-07', word: 'MOVEL' },
  '2022-03-08': { edition: '061', date: '2022-03-08', word: 'LOUSA' },
  '2022-03-09': { edition: '062', date: '2022-03-09', word: 'ZINCO' },
  '2022-03-10': { edition: '063', date: '2022-03-10', word: 'VELHO' },
  '2022-03-11': { edition: '064', date: '2022-03-11', word: 'PADRE' },
  '2022-03-12': { edition: '065', date: '2022-03-12', word: 'BORDA' },
  '2022-03-13': { edition: '066', date: '2022-03-13', word: 'JOGAR' },
  '2022-03-14': { edition: '067', date: '2022-03-14', word: 'MEIAS' },
  '2022-03-15': { edition: '068', date: '2022-03-15', word: 'COTAR' },
  '2022-03-16': { edition: '069', date: '2022-03-16', word: 'OCTIL' },
  '2022-03-17': { edition: '070', date: '2022-03-17', word: 'VELAR' },
  '2022-03-18': { edition: '071', date: '2022-03-18', word: 'FURTO' },
  '2022-03-19': { edition: '072', date: '2022-03-19', word: 'BRUTA' },
  '2022-03-20': { edition: '073', date: '2022-03-20', word: 'FICHA' },
  '2022-03-21': { edition: '074', date: '2022-03-21', word: 'NIVEL' },
  '2022-03-22': { edition: '075', date: '2022-03-22', word: 'EXITO' },
  '2022-03-23': { edition: '076', date: '2022-03-23', word: 'BAGRE' },
  '2022-03-24': { edition: '077', date: '2022-03-24', word: 'BATER' },
  '2022-03-25': { edition: '078', date: '2022-03-25', word: 'DOCAS' },
  '2022-03-26': { edition: '079', date: '2022-03-26', word: 'MACOS' },
  '2022-03-27': { edition: '080', date: '2022-03-27', word: 'VARIZ' },
  '2022-03-28': { edition: '081', date: '2022-03-28', word: 'BANIR' },
  '2022-03-29': { edition: '082', date: '2022-03-29', word: 'BUJAO' },
  '2022-03-30': { edition: '083', date: '2022-03-30', word: 'VORAZ' },
  '2022-03-31': { edition: '084', date: '2022-03-31', word: 'MEDOS' },
  '2022-04-01': { edition: '085', date: '2022-04-01', word: 'TERMO' },
  '2022-04-02': { edition: '086', date: '2022-04-02', word: 'PAJEM' },
  '2022-04-03': { edition: '087', date: '2022-04-03', word: 'CUIAS' },
  '2022-04-04': { edition: '088', date: '2022-04-04', word: 'ABRIL' },
  '2022-04-05': { edition: '089', date: '2022-04-05', word: 'TUPLA' },
  '2022-04-06': { edition: '090', date: '2022-04-06', word: 'RANHO' },
  '2022-04-07': { edition: '091', date: '2022-04-07', word: 'UFANO' },
  '2022-04-08': { edition: '092', date: '2022-04-08', word: 'LOTAR' },
  '2022-04-09': { edition: '093', date: '2022-04-09', word: 'CONTA' },
  '2022-04-10': { edition: '094', date: '2022-04-10', word: 'DOSAR' },
  '2022-04-11': { edition: '095', date: '2022-04-11', word: 'MOITA' },
  '2022-04-12': { edition: '096', date: '2022-04-12', word: 'CLUBE' },
  '2022-04-13': { edition: '097', date: '2022-04-13', word: 'PUGIL' },
  '2022-04-14': { edition: '098', date: '2022-04-14', word: 'CONDE' },
  '2022-04-15': { edition: '099', date: '2022-04-15', word: 'BOATE' },
  '2022-04-16': { edition: '100', date: '2022-04-16', word: 'TRECO' },
  '2022-04-17': { edition: '101', date: '2022-04-17', word: 'PEDAL' },
  '2022-04-18': { edition: '102', date: '2022-04-18', word: 'SERIA' },
  '2022-04-19': { edition: '103', date: '2022-04-19', word: 'PINHA' },
  '2022-04-20': { edition: '104', date: '2022-04-20', word: 'TOCAR' },
  '2022-04-21': { edition: '105', date: '2022-04-21', word: 'MOLAS' },
  '2022-04-22': { edition: '106', date: '2022-04-22', word: 'LUCRO' },
  '2022-04-23': { edition: '107', date: '2022-04-23', word: 'FEIAS' },
  '2022-04-24': { edition: '108', date: '2022-04-24', word: 'QUINA' },
  '2022-04-25': { edition: '109', date: '2022-04-25', word: 'PERUS' },
  '2022-04-26': { edition: '110', date: '2022-04-26', word: 'VASTO' },
  '2022-04-27': { edition: '111', date: '2022-04-27', word: 'COSTA' },
  '2022-04-28': { edition: '112', date: '2022-04-28', word: 'GLIFO' },
  '2022-04-29': { edition: '113', date: '2022-04-29', word: 'RINHA' },
  '2022-04-30': { edition: '114', date: '2022-04-30', word: 'MENOS' },
  '2022-05-01': { edition: '115', date: '2022-05-01', word: 'LATIR' },
  '2022-05-02': { edition: '116', date: '2022-05-02', word: 'ELMOS' },
  '2022-05-03': { edition: '117', date: '2022-05-03', word: 'FARTE' },
  '2022-05-04': { edition: '118', date: '2022-05-04', word: 'VITAL' },
  '2022-05-05': { edition: '119', date: '2022-05-05', word: 'ROUPA' },
  '2022-05-06': { edition: '120', date: '2022-05-06', word: 'SECAO' },
  '2022-05-07': { edition: '121', date: '2022-05-07', word: 'FILAS' },
  '2022-05-08': { edition: '122', date: '2022-05-08', word: 'HONRA' },
  '2022-05-09': { edition: '123', date: '2022-05-09', word: 'FORCA' },
  '2022-05-10': { edition: '124', date: '2022-05-10', word: 'TRICO' },
  '2022-05-11': { edition: '125', date: '2022-05-11', word: 'HINDU' },
  '2022-05-12': { edition: '126', date: '2022-05-12', word: 'JUSTA' },
  '2022-05-13': { edition: '127', date: '2022-05-13', word: 'FOCAR' },
  '2022-05-14': { edition: '128', date: '2022-05-14', word: 'ANIMO' },
  '2022-05-15': { edition: '129', date: '2022-05-15', word: 'LONGE' },
  '2022-05-16': { edition: '130', date: '2022-05-16', word: 'FUSCA' },
  '2022-05-17': { edition: '131', date: '2022-05-17', word: 'LIMOS' },
  '2022-05-18': { edition: '132', date: '2022-05-18', word: 'RUIDO' },
}