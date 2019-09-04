import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';
import * as DateFormat from 'dateformat';

export class Contacto1564428311705 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'contacto',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isNullable: false,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'razon_social',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                    },
                    {
                        name: 'nombre_comercial',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                    },
                    {
                        name: 'tipo',
                        type: 'varchar',
                        length: '150',
                        isNullable: false,
                    },
                    {
                        name: 'condicion',
                        type: 'varchar',
                        length: '150',
                        isNullable: false,
                    },
                    {
                        name: 'id_tipo_documento',
                        type: 'integer',
                        isNullable: false,
                    },
                    {
                        name: 'nro_documento',
                        type: 'char',
                        length: '11',
                        isNullable: false,
                    },
                    {
                        name: 'id_ubigeo',
                        type: 'integer',
                        isNullable: false,
                    },
                    {
                        name: 'direccion',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                    },
                    {
                        name: 'urbanizacion',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    },
                    {
                        name: 'departamento',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    },
                    {
                        name: 'provincia',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    },
                    {
                        name: 'distrito',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                    },
                    {
                        name: 'telf_fijo',
                        type: 'char',
                        length: '20',
                        isNullable: false,
                    },
                    {
                        name: 'telf_movil',
                        type: 'char',
                        length: '15',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '100',
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: 'observaciones',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                    },
                    {
                        name: 'estado',
                        type: 'char',
                        length: '10',
                        default: 'ACTIVO',
                        isNullable: false,
                        comment: 'ACTIVO/INACTIVO',
                    },
                    {
                        name: 'id_usuario_registrado',
                        type: 'integer',
                        default: '0',
                        comment: 'ID USUARIO REGISTRADO',
                        isNullable: false,
                    },
                    {
                        name: 'id_usuario_modificado',
                        type: 'integer',
                        default: '0',
                        comment: 'ID USUARIO MODIFICADO',
                        isNullable: false,
                    },
                    {
                        name: 'registrado',
                        type: 'datetime',
                        default: 'CURRENT_TIMESTAMP',
                        comment: 'FECHA DE REGISTRO',
                        isNullable: false,
                    },
                    {
                        name: 'modificado',
                        type: 'datetime',
                        default: 'CURRENT_TIMESTAMP',
                        comment: 'FECHA DE MODIFICACIÓN',
                        isNullable: false,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKeys(
            'contacto',
            [
                new TableForeignKey({
                    name: 'FK_TIPO_DOCUMENTO',
                    columnNames: ['id_tipo_documento'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'tipo_documento',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                }),
                new TableForeignKey({
                    name: 'FK_UBIGEO',
                    columnNames: ['id_ubigeo'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'ubigeo',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                }),
            ],
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const tipoDocumento = await queryRunner.getTable('tipo-documento');
        const fkTipoDocumento = tipoDocumento.foreignKeys.find(fk => fk.columnNames.indexOf('id') !== -1);

        const ubigeo = await queryRunner.getTable('ubigeo');
        const fkUbigeo = await ubigeo.foreignKeys.find(fk => fk.columnNames.indexOf('id') !== -1);

        await queryRunner.dropForeignKey('tipo_documento', fkTipoDocumento);
        await queryRunner.dropForeignKey('ubigeo', fkUbigeo);
        await queryRunner.dropTable('contactos', true);
    }
}
