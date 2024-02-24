/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('daycares', (table) => {
        table.increments('id').primary();
        table
          .integer('provider_id')
          .unsigned()
          .references('users.id')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        table.string('name').notNullable();
        table.string('daycare_description').notNullable();
        table.string('provider_about').notNullable();
        table.string('tag_line').notNullable();
        table.integer('price').notNullable();
        table.integer('hours_start').notNullable();
        table.integer('hours_close').notNullable();
        table.integer('street_number').notNullable();
        table.string('street_name').notNullable();
        table.string('city').notNullable();
        table.string('postal_code').notNullable();
        table.string('province').notNullable();
        table.string('country').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('daycares');
};
