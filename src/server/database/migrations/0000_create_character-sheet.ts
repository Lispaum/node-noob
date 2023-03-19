import { Knex } from "knex";


let tableTable = 'character-table'

export async function up(knex: Knex) {

    return knex.schema.createTable(tableTable, table => {
        table.bigIncrements('id').primary().index()
        table.string('name', 50).index().notNullable()
        table.integer('level').notNullable()
        table.string('class', 50).notNullable()
    })
    .then(() => {
        console.log('# Created table' + tableTable)
    })



}


export async function down(knex: Knex) {

    return knex.schema.dropTable(tableTable)
    .then(() => {
        console.log('# Drooped table' + tableTable)
    })

}

