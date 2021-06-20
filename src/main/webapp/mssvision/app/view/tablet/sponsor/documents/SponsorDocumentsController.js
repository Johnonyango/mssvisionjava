Ext.define('MssPhoenix.view.tablet.sponsor.documents.SponsorDocumentsController', {
    extend: 'MssPhoenix.view.tablet.sponsor.baseController.SponsorBaseController',
    alias: 'controller.sponsordocumentscontroller',
    /**
     * Called when the view is created
     */
    mixins: [
        'MssPhoenix.view.tablet.sponsor.mixins.GridMixin'
    ],

    init: function () {},

    onViewDocumentClickBtn:function(){
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            console.log(record);
            var id = record.get('id');
            var winContainer = Ext.widget('sponsorviewdocuments');
            winContainer.show();
            // let view=me.getView();
            me.loadClaimDetails(id, winContainer, function (dt) {
                me.bindDataToForm(winContainer,dt);

            }, function (err) {
       
            });

        }
    }
   

});