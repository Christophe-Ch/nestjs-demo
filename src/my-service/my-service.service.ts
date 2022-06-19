import { Injectable } from '@nestjs/common';

enum Role {
  USER,
  MODERATOR,
  ADMIN,
}

export interface Entity {
  name: string;
  age: number;
  roles: Role[];
}

@Injectable()
export class MyServiceService {
  private readonly entities: Entity[] = [];

  findAll(): Entity[] {
    return this.entities;
  }
}
