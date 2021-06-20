Ext.define('MssPhoenix.view.tablet.sponsor.documents.SponsorDocumentApprovalGridController', {
    extend: 'MssPhoenix.view.tablet.sponsor.baseController.SponsorBaseController',
    alias: 'controller.sponsordocumentapprovalgridcontroller',

    mixins: [
        'MssPhoenix.view.tablet.sponsor.mixins.GridMixin'
    ],
    init: function () {
        let me = this;
        view = me.getView(),
        vm = view.getViewModel();
        if (vm) {
            vm.set("isApproveDocument", me.canSponsorApproveDocuments() === "true" ? 'block' : 'none')

        }
    },

    onApproveBtnClick:function(){
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            Ext.Msg.confirm('Confirmation', 'Are you sure you want to approve this document?',
            function (answer) {
                if (answer == "yes") {
                        
                            let documentId = record.get("id");
                            let data1 = localStorage.getItem("app-state-session");
                            let jsonObject = JSON.parse(data1);
                            if (jsonObject == null) {
                                return -1;
                            }
                            let currentUserId = jsonObject.user.more.id;
                            //build json object
                            var params = {
                                "id": documentId,
                                "userId": currentUserId
                            }
                            //ajax request
                            Ext.Ajax.request({
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                url: `${MssPhoenix.model.Session.baseUrl}/api/documents/approveDocuments`,
                                method: 'POST',
                                params: Ext.util.JSON.encode(params),
                                success: function (response, opts) {
                                    console.log("Successfully Approved");
                                    var store = Ext.getStore('sponsorapprovalid');
                                     store.reload();
                                     me.showAlert("Successfully Approved the document")

                                },
                                failure: function (response, opts) {
                                    console.log("Failure");
                                    me.showAlert("Failed to Approve the document")
                                }
                            });
                }

            });
        }
       
    },
  
    onViewDocumentClickBtn:function(){
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            var id = record.get('id');
            var winContainer = Ext.widget('sponsorviewdocuments');
            winContainer.show();
            me.loadDocumentDetails(id, winContainer, function (dt) {
                me.bindDataToForm(winContainer,record);
            }, function (err) {
       
            });

        }
    },
    bindDataToForm: function (winContainer,data) {
        let main = Ext.ComponentQuery.query('main')[0];
                if (main) {
                    let mainViewModel = main.getViewModel();
                    if (mainViewModel) {
                        mainViewModel.set('sponsorDocuments', data)
                        let main = Ext.ComponentQuery.query('main')[0];
                        if (main) {
                            let mainViewModel = main.getViewModel();
                            if (mainViewModel) {
                                let data = mainViewModel.getData().sponsorDocuments
                                console.log(data);
                                winContainer.lookupReference('viewdocform').setValues(data);
                            }
                        }
                    }
                }

    },
    

    reloadDocumentsGrid:function(){
        var me = this;
        me.reloadGrid("sponsorschemedocumentsapprovalgrid");
    }
});