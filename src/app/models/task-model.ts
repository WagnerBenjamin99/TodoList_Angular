export interface task {
    id : number,
    name : String,
    description : String,
    dateLimit? : Date,
    state :  State
}

export enum State {
    PENDIENTE='PENDIENTE',
    COMPLETADA='COMPLETADA'
}