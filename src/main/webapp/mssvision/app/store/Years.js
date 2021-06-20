var years = [];
var date = new Date();
var currentYear = date.getFullYear();
y = currentYear-10;
while (y <= currentYear) {
    years.push([y]);
    y++;
}
Ext.define('MssPhoenix.store.Years', {
    extend: 'Ext.data.Store',
    alias: 'store.years',
    storeId: 'years',
    fields: ['years'],
    data:years
});