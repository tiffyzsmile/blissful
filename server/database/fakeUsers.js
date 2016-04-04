var mongoose = require('mongoose');
var User = require(paths.userModel);

var _users = [
    {
        displayName: "Tiffany",
        firstName: "Tiffany",
        lastName: "May",
        email: "tmay@gmail.com",
        created_at: "2015-03-22T16:56:48-05:00",
        updated_at: "2015-03-22T16:56:48-05:00",
        avatar_url: "https://scontent-dfw1-1.xx.fbcdn.net/hprofile-xap1/v/t1.0-1/p50x50/11659244_686697957541_8531187982038741691_n.jpg?oh=ac582c25c065e82a8d204f456423e20b&oe=5788F8D5",
        fullsize_avatar_url: "https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/11659244_686697957541_8531187982038741691_n.jpg?oh=557a4943d2d7f8d9ca9c39e969d546f8&oe=57C04D23"
    },
    {
        displayName: "Olive",
        firstName: "Olive",
        lastName: "May",
        email: "omay@gmail.com",
        created_at: "2014-03-22T16:56:48-05:00",
        updated_at: "2014-03-22T16:56:48-05:00",
        avatar_url: "https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/11053412_717359785991_4806278902236856269_n.jpg?oh=df5df86ecbcab056bfa595e360b4c241&oe=577FE1CC",
        fullsize_avatar_url: "https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/11053412_717359785991_4806278902236856269_n.jpg?oh=df5df86ecbcab056bfa595e360b4c241&oe=577FE1CC"
    },
    {
        displayName: "Jason",
        firstName: "Jason",
        lastName: "Ellen",
        email: "jellen@gmail.com",
        created_at: "2015-03-22T16:56:48-05:00",
        updated_at: "2015-03-22T16:56:48-05:00",
        avatar_url: "https://scontent-dfw1-1.xx.fbcdn.net/hprofile-xat1/v/t1.0-1/p50x50/12439103_10209390830711752_6185871214532097732_n.jpg?oh=069099574f789ba0129e6e2ac1a58db9&oe=5783C0D3",
        fullsize_avatar_url: "https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/12439103_10209390830711752_6185871214532097732_n.jpg?oh=0aca82811c7e47e80e613a65a1aeddbe&oe=57C0A1FF"
    }
];

module.exports = {
    createUsers: function() {
        _users.forEach(function (user) {
            new User(user).save();
        })
    }
}