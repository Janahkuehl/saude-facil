export interface Consulta{
    id: number;
    nomeMedico: string;
    exame: string;
    especialidade: string;
    endereco: string;
    data: Date;
    tempoLembrete: number;
    nota: string;
}