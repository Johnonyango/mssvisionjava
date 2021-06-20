Ext.define('MssPhoenix.view.tablet.sponsor.documents.ViewDocumentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sponsorviewdocumentscontroller',
    /**
     * Called when the view is created
     */
    init: function () {},
    onApproveBtnClick:function(){
        var me = this;
        Ext.Msg.confirm('Confirmation', 'Are you sure you want to approve this document?',
            function (answer) {
                if (answer == "yes") {

                    //set up json
                    //get claim id from claims
                    let main = Ext.ComponentQuery.query('main')[0];
                    if (main) {
                        let mainViewModel = main.getViewModel();
                        if (mainViewModel) {
                            //get claims
                            let documentsData = mainViewModel.getData().sponsorDocuments;
                            //get claim id from claims
                            let documentId = documentsData.id;
                            //get user id
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
                            me.getView().close();
                        }
                    }
                }

            });
    },
    onCancelBtnClick:function(){
        this.getView().close();
    }
});