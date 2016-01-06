/**
 * This view is an example list of people.
 */
Ext.define('Collect.view.main.MaxHeader', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'max-header',

    requires: [
    ],

    userUrl:        '', // used to get the user data
    secondaryUrl:   '', // used to get information on secondary menu items that may be application specific
    initComponent: function() {
        var me = this;
        me.items = [
            {
                text: 'Home',
                scale: 'medium',
                menu: [{
                    text: '<b>MAX Federal Community</b>',
                    disabled: true
                },{
                    text: 'My Home Space'
                },{
                    text: 'My Agency'
                },{
                    text: 'Dashboard'
                },'-',{
                    text: '<b>Other MAX Tools</b>',
                    disabled: true
                },{
                    text: 'MAX Calendar'
                },{
                    text: 'MAX Shared Desktop'
                },{
                    text: 'MAX.gov Homepage'
                }]
            },
            {
                text: 'Find',
                scale: 'medium',
                menu: [{
                    text: 'People',
                    menu: [{
                        text: 'Users and Groups'
                    },{
                        text: 'MAX Administrators'
                    }]
                },{
                    text: 'Stuff',
                    menu: [{
                        text: 'Agency Communities'
                    },{
                        text: 'Cross Community Topics'
                    },{
                        text: 'Government Wide Communities'
                    },{
                        text: 'Browse All Community Spaces'
                    }]
                },{
                    text: 'My Stuff',
                    menu: [{
                        text: 'Favorites'
                    },{
                        text: 'Recently Viewed'
                    },{
                        text: 'Recently Updated'
                    },{
                        text: 'Pages Watches'
                    },{
                        text: 'Collaborations'
                    }]
                },'-',{
                    text: 'Search Site'
                }]
            },
            {
                text: 'Help',
                scale: 'medium',
                menu: [{
                    text: 'Help'
                },{
                    text: 'Get Started'
                },{
                    text: 'Get Help/Ask a Question'
                },'-',{
                    text: 'Sign up for Training'
                },'-',{
                    text: 'MAX Cloud Capabilities Presentation'
                },{
                    text: 'MAX Examples and Samples'
                },'-',{
                    text: 'Check My MAX Performance'
                },'-',{
                    text: 'Contact Us'
                },{
                    text: 'Provide Feedback'
                }]
            },
            {
                text: 'Contact Us',
                scale: 'medium',
                ariaLabelledBy: 'Contact Us',
                menu: [
                    {
                        xtype: 'container',
                        html: '<table><tr><td style="font-weight:bold;">Phone</td><td>202-395-6860</td></tr><tr><td style="font-weight:bold;">Email</td><td><a href="mailto:maxsupport@omb.eop.gov" target="_blank">maxsupport@omb.eop.gov</a></td></tr><tr><td style="font-weight:bold;">Hours</td><td>Weekdays - 8:30 AM to 9:00 PM EST<br/>Weekends - 9:00 AM to 6:00 PM EST</td></tr></table>'
                    }
                ]
            },
            '->',
            {
                xtype: 'textfield',
                emptyText: 'Search the MAX Federal Community',
                triggers: {
                    search: {
                        weight: 1,
                        cls: Ext.baseCSSPrefix + 'form-search-trigger',
                        handler: function() {
                            console.log('do search');
                        },
                        scope: 'this'
                    }
                },
                width: 275

            },
            {
                text: 'Welcome Dean',
                iconCls: 'x-icon-user-profile',
                scale: 'medium',
                menu: [{
                    text: 'My Profile'
                },{
                    text: 'Set MAX Personal Username'
                },{
                    text: 'Set/Reset Password'
                },'-',{
                    text: 'My MAX Calendar'
                },{
                    text: 'My MAX Sharded Desktop'
                },'-',{
                    text: 'Recently Viewed'
                },{
                    text: 'Recently Updated'
                },'-',{
                    text: 'Manage Page Watches'
                },{
                    text: 'MAX Digest'
                },'-',{
                    text: 'Manage Personal Settings'
                }]
            },
            {
                text: 'Logout',
                iconCls: 'x-icon-logout',
                scale: 'medium'
            }
        ],
        me.callParent();
    }
});
