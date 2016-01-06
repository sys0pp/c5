/**
 * This view is an example list of people.
 */
Ext.define('Collect.view.tree.Nodes', {
    extend: 'Ext.tree.Panel',
    xtype: 'collect-nodes',

    requires: [
        'Collect.store.tree.Nodes'
    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        style: 'background-color:rgb(95, 162, 221);',
        items: [
            { xtype: 'button', text: 'Actions' },
            { xtype: 'button', text: 'Controls' }
        ]
    }],

    initComponent: function() {
        var me = this;
        // me.store = Ext.create('Collect.store.tree.Nodes');
        this.callParent();
    }
});