const path = require("path");

module.exports = path.dirname(require.main.filename);

//deprecated → module.exports = path.dirname(process.mainModule.filename);
//new version → module.exports = path.dirname(require.main.filename);
