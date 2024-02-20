const menus = require('../../database/menus.json')

module.exports = (req, res) => {
    const id = req.params.id;
    const menuFind = menus.find((menu) => menu.id === perseInt(id))

    res.render('detailMenu.ejs',{menu : menuFind});
   };