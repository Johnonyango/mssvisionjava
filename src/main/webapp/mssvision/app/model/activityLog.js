Ext.define('MssPhoenix.model.activityLog', {
    extend: 'MssPhoenix.model.Base',

    fields: [
        {name: 'id'},
        {name: 'userId'},
        {name: 'shortDateTime'},
        {name: 'description', type: 'string'},
        {name: 'createdDate.year', mapping: 'createdDate.year'},
        {name: 'createdDate.monthValue', mapping: 'createdDate.monthValue'},
        {name: 'createdDate.dayOfMonth', mapping: 'createdDate.dayOfMonth'},
        {name: 'createdDate.hour',  mapping: 'createdDate.hour'},
        {name: 'createdDate.minute', mapping: 'createdDate.minute'},
        {name: 'createdDate.second', mapping: 'createdDate.second'},
        {name: 'createdDate.dayOfWeek', mapping: 'createdDate.dayOfWeek'},
        {name: 'createdDate.month', mapping: 'createdDate.month'},
    ]

});