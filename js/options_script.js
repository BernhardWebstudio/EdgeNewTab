// the name of the key to the target url
var key_name = "bewe_newTab_target";

/**
 * Save the target url string to the local storage.
 * But first, append the URL prefix if not available
 *
 * @param string target
 */
function saveTarget(target) {
    var pattern = /^((http|https|ftp):\/\/)/;

    if (!pattern.test(target)) {
        target = "http://" + target;
    }

    browser.storage.local.set({
        bewe_newTab_target: {
            url: target
        }
    });
    console.log("saved " + target);
}

window.addEventListener("load", function () {
    var input = document.querySelector("#targetInput");
    console.log(input);
    browser.storage.local.get(key_name, function (val) {
        if (val && Object.keys(val).length !== 0) {
            input.value = val.bewe_newTab_target.url;
        }
    });
    input.addEventListener("keyup", function (e) {
        saveTarget(this.value);
    });
});