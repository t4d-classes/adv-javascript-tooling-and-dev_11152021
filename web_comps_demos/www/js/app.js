'use strict';

$(() => {

    let colors = ['red','green','blue'];
    const itemList = $('item-list');
    const colorForm = $('color-form');

    itemList.prop("items", colors);

    colorForm.on('addcolor', evt => {

        colors = [ ...colors, evt.detail.color ];
        itemList.prop("items", colors);

    });
    
});