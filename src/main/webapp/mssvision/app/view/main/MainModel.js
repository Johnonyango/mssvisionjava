Ext.define('MssPhoenix.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    data: {
        sponsorInfo:null,
        potentialMemberInfo:null,
        memberInfo:null,
        crmSponsorId:null,
        crmMemberId:null,
        crmSchemeId:null,
        crmMemberInfo:null,
        crmTicketId:null,
        TicketId:null,
        TicketStatus:null,
        TicketSubject:null,
        TicketBody:null,
        CrmTicketMessageId:null,
        memberId:null,
        iconInfo:`<i class="fa fa-info-circle" style="color: #f27f00"></i>`
    },
    formulas: {
        hideReply: function (get) {
            var status=get('TicketStatus');
            if(status=== "CLOSED"){
                return 'none';
            }
            return 'block';
        
        },
        hideClosed: function (get) {
            var status=get('TicketStatus');
            if(status=== "CLOSED"){
                return 'block';
            }
            return 'none';
        
        }
    }
});