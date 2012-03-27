(function($) {
    $.fn.dropdownify = function() {
        this.wrap('<div class="dropdownify" />');

        this.each(function() {
            var jEl, activeHtml, width;
            jEl = $(this);

            activeHtml = jEl.find('li.active a').html();
            if (!activeHtml) {
                activeHtml = jEl.find('li').first().find('a').html();
            }

            jEl.before('<p class="selected">' + activeHtml + '</p>');

            width = jEl.parent().find('.selected').innerWidth();
            jEl.width(width);

        });

        this.parent().find('.selected').on('click', function(ev) {
            var jList = $(this).parent().find('ul');
            if (jList.is(':hidden')) {
                closeAllDropdowns();
                jList.show();
            }
            else {
                closeAllDropdowns();
            }
            ev.stopPropagation();
        });

        $(document).click(function(){
            closeAllDropdowns();
        });

        return this;
    }


    function closeAllDropdowns() {
        jQuery('.dropdownify ul').hide();
    }

})(jQuery);
