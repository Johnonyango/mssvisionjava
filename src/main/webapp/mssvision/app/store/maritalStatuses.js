Ext.define("MssPhoenix.store.maritalStatuses", {
    extend: "Ext.data.Store",
    alias: "store.maritalStatuses",
    storeId: "maritalStatuses",
    fields: ['id', 'status'],
    data: [
        ['SINGLE', 'Never Married'],
        ['MARRIED', 'Married'],
        ['SEPARATED', 'Separated'],
        ['DIVORCED', 'Divorced'],
        ['WIDOWED', 'Widowed'],
        ['ABANDONED', 'Abandoned'],
        ['NOT_SPECIFIED', 'Not Specified']
    ]
});