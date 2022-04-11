const db = require('../connection');
//import model which are required

class User {
    // static async findShop(userid) {
    //     // ------------------------------------sql-------------------------------------------
    //     const query = "SELECT * FROM shop WHERE user_id = ?";
    //     return new Promise( async (res, rej) => {
    //         db.query(query, [userid], async (err, result) => {
    //             if(err) {
    //                 rej(err);
    //                 rej("ypur own error message")
    //             }
    //             res(result[0]);
    //         })
    //     })

    //     // -------------------------------------------------mongo----------------------------------
    //     return new Promise( async (res, rej) => {
    //         try {
    //             const s1 = await ShopModel.findOne({user_id: userid});
    //             res(s1);
    //         } catch (e) {
    //             rej(e);
    //             rej("also provide your message");
    //         }
    //     })
    // }
}

module.exports = User;