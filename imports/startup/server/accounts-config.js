/**
 * Created by Uy on 27.04.2017.
 */
import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser(function(options, user) {
    user.profile = options.profile || {};

    user.profile.username = options.username;

    return user;
});