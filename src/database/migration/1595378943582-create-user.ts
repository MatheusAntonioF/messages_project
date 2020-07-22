import { MigrationInterface, QueryRunner, Table } from 'typeorm';

class createUser1595378943582 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isNullable: false,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true,
        },
        {
          name: 'created_at',
          type: 'timestampz',
          default: 'now()',
          isNullable: false,
        },
        {
          name: 'updated_at',
          type: 'timestampz',
          default: 'now()',
          isNullable: false,
        },
      ],
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable('users');
  }
}

export default createUser1595378943582;
