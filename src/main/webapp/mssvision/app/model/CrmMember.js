Ext.define('MssPhoenix.model.CrmMember', {
    extend: 'MssPhoenix.model.Base',

    fields: [
        {name:'id',},
        {name:'memberNo'},
        {name:'name'},
        {name:'idNo'},
        {name: 'dob'},
        {name:'dateJoinedScheme'},
        {name:'mbshipStatus'},
        {name:'mbio_id'},
    ]
});
