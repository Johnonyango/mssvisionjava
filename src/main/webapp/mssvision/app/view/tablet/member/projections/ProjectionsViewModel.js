Ext.define('MssPhoenix.view.tablet.member.projections.ProjectionsViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.memberprojectionsviewmodel',

    data: {
        projection: '<center>Project results will be shown here</center>',
        benefit: '<center>Benefit results will be shown here</center>',
        allowBenefitCalculator: 'block',
        allowWhatIfAnalysis: 'block',
    }
});