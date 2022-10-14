// list factory
let  listItemFactory = (function(){
    'use strict';

    function ListItem(value){
        this.value = value;
        this.nextPointer = null;
    }
    
    ListItem.prototype = {
        val: function(){
            return this.value;
        },
        
        append: function(node){
            let pointer = this.nextPointer;
            this.nextPointer = node;
            node.setNext(pointer);
        },
        
        setNext: function(pointer){
            this.nextPointer = pointer;
        },
        
        next: function(){
            return this.nextPointer;
        }
    }

    function buildListItem(value){
        return new ListItem(value);
    }
    
    return {
        build: buildListItem
    };

})();