Ext.define('MssPhoenix.view.phone.sponsor.members.MemberValidUpdateGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'membervalidupdategridphone',
    reference: 'membervalidupdategrid',

    store: {
        type: 'membervalidupdatestore'
    },
    columns: [
        { text: 'Title',  dataIndex: 'title'},
        { text: 'Surname',  dataIndex: 'surname'},
        { text: 'First Name',  dataIndex: 'firstname'},
        { text: 'Other Names',  dataIndex: 'othernames'},
        { text: 'Gender',  dataIndex: 'gender'},
        { text: 'ID Number',  dataIndex: 'idNo'},
        { text: 'Phone Number',  dataIndex: 'fixedPhone'},
        { text: 'Address',  dataIndex: 'residentialAddress'},
        { text: 'Date Of Employment',  dataIndex: 'dateOfEmployment'},
        { text: 'Date Joined Scheme ',  dataIndex: 'dateJoinedScheme'},
        { text: 'Email',  dataIndex: 'email'},
    
    ],
});