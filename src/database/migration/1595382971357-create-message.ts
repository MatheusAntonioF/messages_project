import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

class createMessage1595382971357 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'messages',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isNullable: false,
          generationStrategy: 'increment',
        },
        {
          name: 'author_id',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'content',
          type: 'varchar',
          isNullable: false,
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

    return queryRunner.createForeignKey('messages', new TableForeignKey({
      columnNames: ['author_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // const table = await queryRunner.getTable('messages');
    // const foreignKey = table
    //   .foreignKeys
    //   .find((fk) => fk.columnNames.indexOf('author_id') !== -1);

    // await queryRunner.dropForeignKey('messages', foreignKey);

    return queryRunner.dropTable('messages');
  }
}

export default createMessage1595382971357;
