enum Importance {
    LOW,
    MEDIUM,
    HIGH,
}

export interface Task {
    id: number;
    name: string;
    description: string;
    importance: Importance;
    completed: boolean;
}

