// Пример 1
loadVideosAsync().then(function (videos) {
  loadMetaAsync().then(function (meta) {
    DoSomething(videos, meta);
  });
});

// исправленый:
async function loadAsync() {
    let videos = await loadVideosAsync();
    let meta = await loadMetaAsync();
    DoSomething(videos, meta);
}
    

// Пример 2
function anAsyncCall() {
  var promise = doSomethingAsync();
  promise.then(function () {
    somethingComplicated();
  });
  return promise;
}

// исправленый:
async function anAsyncCall() {
  await doSomethingAsync();
  return somethingComplicated();
}


// Пример 3
db.getAllDocs()
  .then(function (result) {
    result.rows.forEach(function (row) {
      db.remove(row.doc);
    });
  })
  .then(function () {
    // All docs must be removed!
  });

// исправленый:
async function removeAllDocs() {
    let result = await db.getAllDocs();
    let removed = result.rows.map(row => db.remove(row.doc));
    await Promise.all(removed);
    // All docs must be removed!
}


// Пример 4
doAsync().then(
  function () {
    throw new Error('nope');
  },
  function (err) {
    // I didn't catch your error! :(
  }
);

// исправленый:
async function gg() {
    try {
        let result = await doAsync();
        throw new Error("nope");
    }
    catch(err) {
        console.error("error:", err.message);
    }
}
