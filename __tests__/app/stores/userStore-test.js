"use strict";

describe("The User Store",()=>{
    describe("The User Store",function(){
        it("Should make a request to resthelper to call /users",()=>{
            let UserStore = require.requireActual(paths.userStore);
            let restHelper = require('../../../app/helpers/restHelper.js');
            expect(restHelper.get).toBeCalledWith('users');
        });

        it("Should return the correct users",()=>{
            let restHelper = require('../../../app/helpers/restHelper.js');
            let value = [1,2,3];
            restHelper.__setValue(value);
            let UserStore = require.requireActual(paths.userStore);

            waitsFor(function() {
                return UserStore.getUsers().length > 0;
            }, "Users stores users", 500);

            runs(function() {
                expect(UserStore.getUsers()).toEqual(value);
            });
        });
    })

})
