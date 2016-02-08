// You can write custom js here and it will be injected into the bundle in the end
(function() {
    $('#optinform_btnSubscribe').on('click', function (event) {
        $('#subscribe-bid input.submit').click();
        return false;
    });
})();
