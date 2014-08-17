var popOver = function(opts) {
    this.options = opts;
    this.setId();
    return this;
};

popOver.prototype.getId = function() {
    return this.id;
}

popOver.prototype.setId = function(id) {
    this.id = typeof id == "undefined" ? this.makeRandomId() : id;
}

popOver.prototype.makeRandomId = function() {
    return Math.random().toString(36).substring(5);
};

popOver.options = {
    title: '',
    content: '',
    placement: '',
    trigger: ''
}

popOver.prototype.getTemplate = function() {
    return typeof this.customTemplate == "undefined" ? this.template() : this.customTemplate();

};

popOver.prototype.prepareElement = function(e) {
    e.attr('data-title', this.options.title);
    e.attr('data-content', this.options.content);
    e.attr('data-trigger', this.options.trigger);
};

popOver.prototype.show = function() {
    var triggerElement = $('[data-toggle="popover"]');
    this.prepareElement(triggerElement);
    triggerElement.popover('toggle');
};

popOver.prototype.template = function() {
    var id = this.getId();
    var title = this.options.title;
    var content = this.options.content;
    var placement = this.options.placement;

    return '<div id="popover' + id + '"' + ' class="popover ' + placement + '"' + ' role="tooltip">' +
               '<div class="arrow"></div>' +
               '<h3 class="popover-title"> ' + title + '</h3>' +
               '<div class="popover-content">' + content + '</div>' +
           '</div>';
};
