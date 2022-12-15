import { ApiProperty } from '@nestjs/swagger';
import { IAction } from '../model/action.dto';
import { UserRole } from '../model/role.dto';

export class Dog {
  /**
   * The name of the Dog
   * @example Tom
   */
  name: string;

  @ApiProperty({
    default: 1,
    example: 2,
    description: 'The age of the Dog',
    maximum: 10,
    minimum: 0,
  })
  age: number;

  @ApiProperty({
    description: 'this is user role',
    enumName: 'UserRole',
    example: UserRole.Admin,
  })
  role: UserRole;

  @ApiProperty({ type: [String], example: ['sleep', 'run'] })
  skills?: string[];

  @ApiProperty({ type: IAction, example: { eat: true } })
  action?: IAction;
}
