Ext.define('MssPhoenix.view.persons.PersonsGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'personsgrid',
    store: {
        type: 'persons'
    },
    title: 'Test',
    columns: [
        { text: 'FirstName', dataIndex: 'firstName' },
        { text: 'LastName', dataIndex: 'lastName' }
    ]
});