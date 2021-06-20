Ext.define('MssPhoenix.store.SponsorBeneficiaryChart', {
    extend: 'Ext.data.Store',
    alias: 'store.sponsormemberbeneficiarychart',

    fields: ['name', 'data1'],
    data: [{
        name: 'Tony Ngeno',
        data1: 20
    }, {
        name: 'Simon Kimathi',
        data1: 50
    }, {
        name: '	Remy Boys',
        data1: 30
    }]
});