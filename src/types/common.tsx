export interface Common {
    id: number,
    creationAt: Date,
    modifiedAt: Date
}

export interface Store extends Common {
    name: string,
    images: string,
    groups: Group[]
}

export interface Group extends Common {
   name: string, 
   employees: Employee[]
}

export interface Employee extends Common {
    name: string,
    state: "in" | "out",
    role: "employee" | "manager" | "admin"
    images: string
    logEvents: LogEvent[],
    messages: Message[],
    schedules: Schedule[]
}

export interface LogEvent extends Common {
    direction: "in" | "out"
}

export interface Schedule extends Common {
    inStamp: Date,
    outStamp: Date,
    duration: number,
    overtime: boolean
}

export interface Message extends Common {
    message: string,
    isRead: boolean
}