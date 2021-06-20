Ext.define('MssPhoenix.model.AdminSession', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id'},
        {name: 'active'},
        {name: 'created_date'},
        {name: 'ipAddress'},
        {name: 'stoppedAt'},
    ]
});