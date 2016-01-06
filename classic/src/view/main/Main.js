/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Collect.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Collect.view.grid.Nodes',
        'Collect.view.tree.Nodes'
    ],

    layout: 'vbox',
    width: '100%',
    defaults: {
        width: '100%'
    },

    referenceHolder: true,

    initComponent: function() {
        var me = this;

        me.nodesStore = new Collect.store.tree.Nodes({id:'nodeStore'});

        me.items = [{
            xtype: 'max-header'
        },{
            xtype: 'container',
            padding: '6px 0px 6px 8px',
            html: '<div style="padding-left: 66px; height: 58px; background-image:url(\'/resources/images/FedCom.png;\'); background-repeat: no-repeat;"><h3>Max Collect</h3><h1>Welcome to Max Collect</h1></div>'
        },{
            xtype: 'panel',
            layout: 'border',
            region: 'center',
            flex: 1,
            items: [{
                xtype: 'collect-nodes',
                reference: 'nodeTree',
                region: 'west',
                rootVisible: false,
                store: me.nodesStore,
                width: 300,
                split: true,
                tools: {
                    type: 'minimize',
                    tooltip: 'Minimize the navigation tree'
                },
                listeners: {
                    select: function(tree, selected, index, eOpts ){
                        var node = selected;
                        me.lookupReference('nodeBreadcrumb').setSelection(node);
                        me.lookupReference('nodePanel').setTitle(node.data.text);
                        me.onNodeClick(node);
                    }
                }
            },{
                xtype: 'panel',
                region: 'center',
                title: 'Select a data node...',
                reference: 'nodePanel',
                tools: [{
                    type: 'refresh',
                    tooltip: 'Refresh the data'
                },{
                    type: 'export',
                    tooltip: 'Export'
                },{
                    type: 'favorites',
                    tooltip: 'Favorites'
                },{
                    type: 'share',
                    tooltip: 'Share'
                },{
                    type: 'email',
                    tooltip: 'Export'
                },{
                    type: 'gear',
                    tooltip: 'Settings'
                }],
                dockedItems: [{
                    xtype: 'breadcrumb',
                    reference: 'nodeBreadcrumb',
                    dock: 'top',
                    store: me.nodesStore,
                    listeners: {
                        change: function(breadcrumb, node, prevNode, eOpts) {
                            me.lookupReference('nodeTree').setSelection(node);
                            me.lookupReference('nodeTree').expandPath(node.getPath());
                            me.lookupReference('nodePanel').setTitle(node.data.text);
                            me.onNodeClick(node);
                        }
                    }
                }],
                items: [{
                    xtype: 'container',
                    layout: 'fit',
                    padding: '50 50 50 50',
                    items: [{
                        xtype: 'collect-grid-nodes',
                        title: 'Groups / Categories / Items'
                    }]
                }]
            }]
        }];

        me.onNodeClick = function(node){
            console.log('You clicked on "' + node.data.text + '"');
        }

        this.callParent();
    }
});
