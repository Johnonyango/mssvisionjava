Ext.define('MssPhoenix.view.tablet.member.claims.processing.BaseClaimWin', {
    extend: 'MssPhoenix.view.widgets.Window',
   viewModel: 'claimprocessingviewmodel',

    controller: 'memberclaimprocessingcontroller',
    bind:{
        width: '{width}',
        height: 'height',
    },
    minHeight: 480,
    maxHeight: "90%",
});