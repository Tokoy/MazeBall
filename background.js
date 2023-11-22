chrome.storage.local.get('uniqueId', function(result) {
    var uniqueId = result.uniqueId;
    if (!uniqueId) {
      uniqueId = generateUniqueId();
      storeUniqueId(uniqueId);
    }
  });

function generateUniqueId() {
// UUID
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
    });
}

return uuidv4();
}

// store uuid
function storeUniqueId(uniqueId) {
chrome.storage.local.set({ 'uniqueId': uniqueId }, function() {
    console.log('store uniqueId');
});
}