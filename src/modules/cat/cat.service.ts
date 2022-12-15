import { Injectable } from '@nestjs/common';
import { Cat } from './cat.entity';

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [{ name: 'Tom', age: 1 }];

  create(Cat: Cat): Cat {
    this.cats.push(Cat);
    return Cat;
  }

  findAll(name?: string): Cat[] {
    return this.cats.filter((item) => {
      return item.name === name;
    });
  }

  findOne(id: number): Cat {
    return this.cats[id];
  }

  update(id: number, cat: Partial<Cat>): Cat {
    const target = this.cats[id];
    return Object.assign(target, cat);
  }

  remove(id: number): Cat {
    return this.cats.splice(id, 1)[0];
  }
}
