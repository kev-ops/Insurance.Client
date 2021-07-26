export class SaveResult {
    message: string;
    rowsAffected?: number;
    success: boolean
}
export class GetResult<T> {
    data: [T];
    success: boolean;
    total: number;
}