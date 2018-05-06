// the name of the key to the target url
var key_name = "bewe_newTab_target";

/**
 * Change the location of tab/window to the specified target

 * @param {any} target
 * @param {any} tab_id
 */
function changeLocation(target, tab_id = false) {
    //console.log("Going to " + target);
    if (tab_id) {
        browser.tabs.update(tab_id, { url: target });
    } else {
        window.location.href = target;
    }
}

/**
 * Get the location of the current tab respectively window
 * if it is equal to the default URL in Edge, relocate
 *
 * @param {URL} current
 * @param {integer|boolean} tab_id the id of the tab in which the location shall be switched
 */
function changeLocationIfApplicable(current, tab_id = false) {
    if (current.hostname.includes("msn.") && current.pathname.includes("spartan")) {
        var target = browser.extension.getURL('options.html');
        //console.log("check positive");
        browser.storage.local.get(key_name, function (val) {
            console.log(val);
            if (val && Object.keys(val).length !== 0) {
                target = val.bewe_newTab_target.url;
            }
            changeLocation(target, tab_id);
        });
        
    } else {
        //console.log("check negative");
    }
}

/**
 * Fetch the current location from window & tab and apply the callback on them
 *
 * @param {callable} callback
 */
function fetchCurrentLocation(callback) {
    callback(window.location);
    browser.tabs.query({ 'active': true, 'lastFocusedWindow': true },
        function (tabs) {
            callback(new URL(tabs[0].url), tabs[0].id); 
        }
    );
}

// --- call the functions above in the correct moment

fetchCurrentLocation(changeLocationIfApplicable);

window.addEventListener("load", function () {
    fetchCurrentLocation(changeLocationIfApplicable);
});

browser.tabs.onCreated.addListener(function () {
    fetchCurrentLocation(changeLocationIfApplicable);
});

browser.tabs.onUpdated.addListener(function () {
    fetchCurrentLocation(changeLocationIfApplicable);
});