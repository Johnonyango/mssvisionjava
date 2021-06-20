Ext.define('MssPhoenix.model.Person', {
    extend: 'MssPhoenix.model.Base',

    fields: [
        { name: 'username', type: 'string' },
        { name: 'firstname', type: 'string' },
        { name: 'lastname', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'skype', type: 'string' },
        { name: 'linkedin', type: 'string' },
        { name: 'phone', type: 'string' },
        { name: 'extension', type: 'string' },
        { name: 'birthday', type: 'date', dateFormat: 'Y-m-d' },
        { name: 'title', type: 'string' },
        { name: 'picture', type: 'string' },
        { name: 'started', type: 'date', dateFormat: 'Y-m-d' },
        { name: 'ended', type: 'date', dateFormat: 'Y-m-d' },
        // Calculated fields
        {
            name: 'fullname',
            calculate: function(data) {
                return data.firstname + ' ' + data.lastname;
            }
        }
    ],



});