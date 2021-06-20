Ext.define('MssPhoenix.model.StagedContribution', {
    extend: 'MssPhoenix.model.Base',


    fields: [
        {name:'memberId', type:'integer'},
        {name:'phoneNumber', type:'string'},
        {name:'mpesaphoneNumber', type:'integer'},
        {name:'amount', type:'integer'},
        {name: 'requestId', type:'string'},
        {name: 'createdAt', type:'string'},
        {name:'sendToXi', type:'string'},
    ]
});