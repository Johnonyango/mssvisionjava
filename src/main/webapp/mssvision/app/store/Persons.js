Ext.define('MssPhoenix.store.Persons', {
    extend: 'Ext.data.Store',
    alias: 'store.persons',
    fields: [
        { name: 'firstName', type: 'string' },
        { name: 'lastName', type: 'string' },
        { name: 'age', type: 'int' },
        { name: 'eyeColor', type: 'string' }
    ],
    autoLoad: true,

    data: [
        { firstName: 'Ed', lastName: 'Spencer' },
        { firstName: 'Tommy', lastName: 'Maintz' },
        { firstName: 'Aaron', lastName: 'Conran' }
    ],
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }

});