Object.prototype.each = function(f){
    var l = this.length;
    for(var i=0;i<l;i++)
        {
            try {
                this[i].eachCall = f;
                this[i].eachCall(this[i]);
            } catch(e){ throw e; }
        }
};

document.getElementsByTagName('iframe').each(function(){this.src=this.src;});