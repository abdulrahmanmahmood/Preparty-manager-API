export class PaginatedResponseDto<T> {
  message: string;
  data: T[];
  total: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;

  constructor(
    message: string,
    data: T[],
    total: number,
    hasNextPage: boolean,
    hasPreviousPage: boolean,
  ) {
    this.message = message;
    this.data = data;
    this.total = total;
    this.hasNextPage = hasNextPage;
    this.hasPreviousPage = hasPreviousPage;
  }
}
