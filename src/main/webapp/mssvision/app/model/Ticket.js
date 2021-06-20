Ext.define('MssPhoenix.model.Ticket', {
    extend: 'MssPhoenix.model.Base',
    fields: [
        {name:'id' },
        {name:'body'},
        {name:'closed'},
        {name:'subject'},
        {name:'createdById'},
        {name:'recipientId'},
        {name:'ticketcategory_id'},
        {name:'ownerName'},
        {name:'receiverName'},
        {name:'status'},
        {name:'priority'},
        {name:'shortDate'},
        {name:'shortDateTime'},
        {name:'newSupportRepliesCount'},
        {name:'newOwnerRepliesCount'}

    ]
});