import { Injectable } from '@nestjs/common';
import { UserRole } from '../model/role.dto';
import { Dog } from './dog.entity';

@Injectable()
export class DogService {
  private readonly dogs: Dog[] = [{ name: 'Tom', age: 1, role: UserRole.User }];

  create(Dog: Dog): Dog {
    this.dogs.push(Dog);
    return Dog;
  }

  findAll(role?: UserRole): Dog[] {
    let result = this.dogs;
    if (role) {
      result = this.dogs.filter((item) => {
        return item.role === role;
      });
    }
    return result;
  }

  findOne(id: number): Dog {
    return this.dogs[id];
  }

  update(id: number, dog: Dog): Dog {
    this.dogs[id] = dog;
    return this.dogs[id];
  }

  remove(id: number): Dog {
    return this.dogs.splice(id, 1)[0];
  }
}
