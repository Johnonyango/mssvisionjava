Ext.define('MssPhoenix.store.Salutations', {
    extend: 'Ext.data.Store',
    alias: "store.salutations",
    storeId: "salutations",

    fields: ["id", "title"],
    data: [
        ["MR", "Mr."],
        ["MRS", "Mrs."],
        ["MISS", "Ms."],
        ["DR", "Dr."],
        ["PROF", "Prof."],
        ["REV", "Rev."],
        ["ENG", "Eng."],
        ["HON", "Hon."],
    ],
});