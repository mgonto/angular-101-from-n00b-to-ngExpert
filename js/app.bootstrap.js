angular.element(document).ready(function() {

    $('[data-angular-app]').each(function() {
        var $this = $(this);
        angular.bootstrap($this, [$this.data('angular-app')]);
    })

});
