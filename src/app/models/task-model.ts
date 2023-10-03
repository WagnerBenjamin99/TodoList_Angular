export interface task {
    name : String,
    description : String,
    dateLimit? : Date,
    state :  State
}

export enum State {
    PENDIENTE,
    COMPLETADA
}