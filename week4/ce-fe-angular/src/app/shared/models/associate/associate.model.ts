export class Associate {
    fullName: string;
    role_id: number;
    email: string;
    position_id: string;
    manager_id: string;
    positionGroup: {
        id: string;
        name: string;
    };
    position: {
        id: string;
        name: string;
    }
    password: string;
    birthday: Date;
}