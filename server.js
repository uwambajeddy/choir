var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var passport = require('passport');
var flash = require('connect-flash');
var LocalStrategy = require("passport-local").Strategy;
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var dbconfig = require('./config/database');
var http = require('http');
var path = require('path');
var multer = require('multer');

const DIR = './public/uploads';



let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, DIR);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({
    storage: storage
});


app.use(morgan('dev'));
app.use(cookieParser());

app.use(session({
    secret: 'justasecret',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());




app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/public', express.static('public'));





app.get('/', (req, res) => {
    connection.query("Select * from events ORDER BY event_id DESC  LIMIT 5", (err, event) => {
        connection.query("Select * from members", (err, members) => {
            connection.query("Select * from sunday_preachings ORDER BY sunday_preachings_id DESC LIMIT 2", (err, sunday_preachings) => {
                connection.query("Select * from testimony ORDER BY testimony_id DESC LIMIT 2", (err, testimony) => {
                    connection.query("Select * from lumen_events ORDER BY lumen_event_id DESC LIMIT 2", (err, lumen_event) => {
                        connection.query("Select * from dail_word ORDER BY dail_word_id DESC LIMIT 2", (err, dail_word) => {
                            res.render('index', {
                                event: event,
                                members: members,
                                sunday_preachings: sunday_preachings,
                                testimony: testimony,
                                lumen_event: lumen_event,
                                dail_word: dail_word
                            });
                        });
                    });
                });
            });
        });
    });
});






app.get('/song', (req, res) => {
    connection.query("Select * from audio_events ORDER BY audio_event_id DESC ", (err, audio) => {
        connection.query("Select * from members", (err, members) => {
            connection.query("Select * from sunday_preachings ORDER BY sunday_preachings_id DESC LIMIT 2", (err, sunday_preachings) => {
                connection.query("Select * from testimony ORDER BY testimony_id DESC LIMIT 2", (err, testimony) => {
                    connection.query("Select * from lumen_events ORDER BY lumen_event_id DESC LIMIT 2", (err, lumen_event) => {
                        connection.query("Select * from dail_word ORDER BY dail_word_id DESC LIMIT 2", (err, dail_word) => {
                            res.render('song', {
                                audio: audio,
                                members: members,
                                sunday_preachings: sunday_preachings,
                                testimony: testimony,
                                lumen_event: lumen_event,
                                dail_word: dail_word
                            });
                        });
                    });
                });
            });
        });
    });

});






app.get('/activities', (req, res) => {
    connection.query("Select * from events ORDER BY event_id DESC  LIMIT 5", (err, event) => {
        connection.query("Select * from members", (err, members) => {
            connection.query("Select * from sunday_preachings ORDER BY sunday_preachings_id DESC LIMIT 2", (err, sunday_preachings) => {
                connection.query("Select * from testimony ORDER BY testimony_id DESC LIMIT 2", (err, testimony) => {
                    connection.query("Select * from lumen_events ORDER BY lumen_event_id DESC LIMIT 2", (err, lumen_event) => {
                        connection.query("Select * from dail_word ORDER BY dail_word_id DESC LIMIT 2", (err, dail_word) => {
                            res.render('activities', {
                                event: event,
                                members: members,
                                sunday_preachings: sunday_preachings,
                                testimony: testimony,
                                lumen_event: lumen_event,
                                dail_word: dail_word
                            });
                        });
                    });
                });
            });
        });
    });

});



app.get('/garellies', (req, res) => {
    connection.query("Select * from garelly ORDER BY id DESC  LIMIT 5", (err, garellies) => {
        connection.query("Select * from members", (err, members) => {
            connection.query("Select * from sunday_preachings ORDER BY sunday_preachings_id DESC LIMIT 2", (err, sunday_preachings) => {
                connection.query("Select * from testimony ORDER BY testimony_id DESC LIMIT 2", (err, testimony) => {
                    connection.query("Select * from lumen_events ORDER BY lumen_event_id DESC LIMIT 2", (err, lumen_event) => {
                        connection.query("Select * from dail_word ORDER BY dail_word_id DESC LIMIT 2", (err, dail_word) => {
                            res.render('garellies', {
                                garellies: garellies,
                                members: members,
                                sunday_preachings: sunday_preachings,
                                testimony: testimony,
                                lumen_event: lumen_event,
                                dail_word: dail_word
                            });
                        });
                    });
                });
            });
        });
    });

});


app.get('/worshipsongs', (req, res) => {
    connection.query("Select * from worship_songs ORDER BY worship_songs_id DESC ", (err, worshipsongs) => {
        connection.query("Select * from members", (err, members) => {
            connection.query("Select * from sunday_preachings ORDER BY sunday_preachings_id DESC LIMIT 2", (err, sunday_preachings) => {
                connection.query("Select * from testimony ORDER BY testimony_id DESC LIMIT 2", (err, testimony) => {
                    connection.query("Select * from lumen_events ORDER BY lumen_event_id DESC LIMIT 2", (err, lumen_event) => {
                        connection.query("Select * from dail_word ORDER BY dail_word_id DESC LIMIT 2", (err, dail_word) => {
                            res.render('worshipsongs', {
                                worshipsongs: worshipsongs,
                                members: members,
                                sunday_preachings: sunday_preachings,
                                testimony: testimony,
                                lumen_event: lumen_event,
                                dail_word: dail_word
                            });
                        });
                    });
                });
            });
        });
    });

});




app.get('/choirsongs', (req, res) => {
    connection.query("Select * from choir_songs ORDER BY choir_songs_id DESC ", (err, choirsongs) => {
        connection.query("Select * from members", (err, members) => {
            connection.query("Select * from sunday_preachings ORDER BY sunday_preachings_id DESC LIMIT 2", (err, sunday_preachings) => {
                connection.query("Select * from testimony ORDER BY testimony_id DESC LIMIT 2", (err, testimony) => {
                    connection.query("Select * from lumen_events ORDER BY lumen_event_id DESC LIMIT 2", (err, lumen_event) => {
                        connection.query("Select * from dail_word ORDER BY dail_word_id DESC LIMIT 2", (err, dail_word) => {
                            res.render('choirsongs', {
                                choirsongs: choirsongs,
                                members: members,
                                sunday_preachings: sunday_preachings,
                                testimony: testimony,
                                lumen_event: lumen_event,
                                dail_word: dail_word
                            });
                        });
                    });
                });
            });
        });
    });

});


app.get('/cantiques', (req, res) => {
    connection.query("Select * from cantique ORDER BY cantique_id DESC ", (err, cantiques) => {
        connection.query("Select * from members", (err, members) => {
            connection.query("Select * from sunday_preachings ORDER BY sunday_preachings_id DESC LIMIT 2", (err, sunday_preachings) => {
                connection.query("Select * from testimony ORDER BY testimony_id DESC LIMIT 2", (err, testimony) => {
                    connection.query("Select * from lumen_events ORDER BY lumen_event_id DESC LIMIT 2", (err, lumen_event) => {
                        connection.query("Select * from dail_word ORDER BY dail_word_id DESC LIMIT 2", (err, dail_word) => {
                            res.render('cantiques', {
                                cantiques: cantiques,
                                members: members,
                                sunday_preachings: sunday_preachings,
                                testimony: testimony,
                                lumen_event: lumen_event,
                                dail_word: dail_word
                            });
                        });
                    });
                });
            });
        });
    });

});


app.get('/preachings', (req, res) => {
    connection.query("Select * from testimony ORDER BY testimony_id DESC ", (err, testimonies) => {
        connection.query("Select * from members", (err, members) => {
            connection.query("Select * from sunday_preachings ORDER BY sunday_preachings_id DESC LIMIT 2", (err, sunday_preachings) => {
                connection.query("Select * from testimony ORDER BY testimony_id DESC LIMIT 2", (err, testimony) => {
                    connection.query("Select * from lumen_events ORDER BY lumen_event_id DESC LIMIT 2", (err, lumen_event) => {
                        connection.query("Select * from dail_word ORDER BY dail_word_id DESC LIMIT 2", (err, dail_word) => {
                            res.render('preachings', {
                                testimonies: testimonies,
                                members: members,
                                sunday_preachings: sunday_preachings,
                                testimony: testimony,
                                lumen_event: lumen_event,
                                dail_word: dail_word
                            });
                        });
                    });
                });
            });
        });
    });

});

app.get('/sundaypreachings', (req, res) => {
    connection.query("Select * from sunday_preachings ORDER BY sunday_preachings_id DESC ", (err, sundaypreachings) => {
        connection.query("Select * from members", (err, members) => {
            connection.query("Select * from sunday_preachings ORDER BY sunday_preachings_id DESC LIMIT 2", (err, sunday_preachings) => {
                connection.query("Select * from testimony ORDER BY testimony_id DESC LIMIT 2", (err, testimony) => {
                    connection.query("Select * from lumen_events ORDER BY lumen_event_id DESC LIMIT 2", (err, lumen_event) => {
                        connection.query("Select * from dail_word ORDER BY dail_word_id DESC LIMIT 2", (err, dail_word) => {
                            res.render('sundaypreachings', {
                                sundaypreachings: sundaypreachings,
                                members: members,
                                sunday_preachings: sunday_preachings,
                                testimony: testimony,
                                lumen_event: lumen_event,
                                dail_word: dail_word
                            });
                        });
                    });
                });
            });
        });
    });

});



app.get('/dailyword', (req, res) => {
    connection.query("Select * from dail_word ORDER BY  dail_word_id DESC ", (err, dailword) => {
        connection.query("Select * from members", (err, members) => {
            connection.query("Select * from sunday_preachings ORDER BY sunday_preachings_id DESC LIMIT 2", (err, sunday_preachings) => {
                connection.query("Select * from testimony ORDER BY testimony_id DESC LIMIT 2", (err, testimony) => {
                    connection.query("Select * from lumen_events ORDER BY lumen_event_id DESC LIMIT 2", (err, lumen_event) => {
                        connection.query("Select * from dail_word ORDER BY dail_word_id DESC LIMIT 2", (err, dail_word) => {
                            res.render('dailyword', {
                                dailword: dailword,
                                members: members,
                                sunday_preachings: sunday_preachings,
                                testimony: testimony,
                                lumen_event: lumen_event,
                                dail_word: dail_word
                            });
                        });
                    });
                });
            });
        });
    });

});


app.get('/accademy', (req, res) => {
    connection.query("Select * from lumen_songs ORDER BY  lumen_songs_id DESC ", (err, lumensongs) => {
        connection.query("Select * from members", (err, members) => {
            connection.query("Select * from sunday_preachings ORDER BY sunday_preachings_id DESC LIMIT 2", (err, sunday_preachings) => {
                connection.query("Select * from testimony ORDER BY testimony_id DESC LIMIT 2", (err, testimony) => {
                    connection.query("Select * from lumen_events ORDER BY lumen_event_id DESC LIMIT 2", (err, lumen_event) => {
                        connection.query("Select * from dail_word ORDER BY dail_word_id DESC LIMIT 2", (err, dail_word) => {
                            res.render('accademy', {
                                lumensongs: lumensongs,
                                members: members,
                                sunday_preachings: sunday_preachings,
                                testimony: testimony,
                                lumen_event: lumen_event,
                                dail_word: dail_word
                            });
                        });
                    });
                });
            });
        });
    });

});



app.get('/lumenevents', (req, res) => {
    connection.query("Select * from lumen_events ORDER BY  lumen_event_id DESC ", (err, lumenevents) => {
        connection.query("Select * from members", (err, members) => {
            connection.query("Select * from sunday_preachings ORDER BY sunday_preachings_id DESC LIMIT 2", (err, sunday_preachings) => {
                connection.query("Select * from testimony ORDER BY testimony_id DESC LIMIT 2", (err, testimony) => {
                    connection.query("Select * from lumen_events ORDER BY lumen_event_id DESC LIMIT 2", (err, lumen_event) => {
                        connection.query("Select * from dail_word ORDER BY dail_word_id DESC LIMIT 2", (err, dail_word) => {
                            res.render('lumenevents', {
                                lumenevents: lumenevents,
                                members: members,
                                sunday_preachings: sunday_preachings,
                                testimony: testimony,
                                lumen_event: lumen_event,
                                dail_word: dail_word
                            });
                        });
                    });
                });
            });
        });
    });

});









app.get('/aboutus', (req, res) => {
    connection.query("Select * from background  ", (err, background) => {
        connection.query("Select * from members", (err, members) => {
            connection.query("Select * from sunday_preachings ORDER BY sunday_preachings_id DESC LIMIT 2", (err, sunday_preachings) => {
                connection.query("Select * from testimony ORDER BY testimony_id DESC LIMIT 2", (err, testimony) => {
                    connection.query("Select * from lumen_events ORDER BY lumen_event_id DESC LIMIT 2", (err, lumen_event) => {
                        connection.query("Select * from dail_word ORDER BY dail_word_id DESC LIMIT 2", (err, dail_word) => {
                            res.render('aboutus', {
                                background: background,
                                members: members,
                                sunday_preachings: sunday_preachings,
                                testimony: testimony,
                                lumen_event: lumen_event,
                                dail_word: dail_word
                            });
                        });
                    });
                });
            });
        });
    });

});










app.get('/motto1', (req, res) => {
    connection.query("Select * from motto ", (err, motto) => {
        connection.query("Select * from members", (err, members) => {
            connection.query("Select * from sunday_preachings ORDER BY sunday_preachings_id DESC LIMIT 2", (err, sunday_preachings) => {
                connection.query("Select * from testimony ORDER BY testimony_id DESC LIMIT 2", (err, testimony) => {
                    connection.query("Select * from lumen_events ORDER BY lumen_event_id DESC LIMIT 2", (err, lumen_event) => {
                        connection.query("Select * from dail_word ORDER BY dail_word_id DESC LIMIT 2", (err, dail_word) => {
                            res.render('motto1', {
                                motto: motto,
                                members: members,
                                sunday_preachings: sunday_preachings,
                                testimony: testimony,
                                lumen_event: lumen_event,
                                dail_word: dail_word
                            });
                        });
                    });
                });
            });
        });
    });

});



app.get('/vision1', (req, res) => {
    connection.query("Select * from vision  ", (err, vision) => {
        connection.query("Select * from members", (err, members) => {
            connection.query("Select * from sunday_preachings ORDER BY sunday_preachings_id DESC LIMIT 2", (err, sunday_preachings) => {
                connection.query("Select * from testimony ORDER BY testimony_id DESC LIMIT 2", (err, testimony) => {
                    connection.query("Select * from lumen_events ORDER BY lumen_event_id DESC LIMIT 2", (err, lumen_event) => {
                        connection.query("Select * from dail_word ORDER BY dail_word_id DESC LIMIT 2", (err, dail_word) => {
                            res.render('vision1', {
                                vision: vision,
                                members: members,
                                sunday_preachings: sunday_preachings,
                                testimony: testimony,
                                lumen_event: lumen_event,
                                dail_word: dail_word
                            });
                        });
                    });
                });
            });
        });
    });

});






app.get('/mission1', (req, res) => {
    connection.query("Select * from mission  ", (err, mission) => {
        connection.query("Select * from members", (err, members) => {
            connection.query("Select * from sunday_preachings ORDER BY sunday_preachings_id DESC LIMIT 2", (err, sunday_preachings) => {
                connection.query("Select * from testimony ORDER BY testimony_id DESC LIMIT 2", (err, testimony) => {
                    connection.query("Select * from lumen_events ORDER BY lumen_event_id DESC LIMIT 2", (err, lumen_event) => {
                        connection.query("Select * from dail_word ORDER BY dail_word_id DESC LIMIT 2", (err, dail_word) => {
                            res.render('mission1', {
                                mission: mission,
                                members: members,
                                sunday_preachings: sunday_preachings,
                                testimony: testimony,
                                lumen_event: lumen_event,
                                dail_word: dail_word
                            });
                        });
                    });
                });
            });
        });
    });

});











//routes***********************








var connection = mysql.createConnection(dbconfig.connection);

connection.connect((err) => {
    if (!err) {
        console.log("heyyyyy admin database is working!!");
    } else {
        console.log("some error ecoured" + JSON.stringify(err, undefined, 2));
    }
});

connection.query('USE ' + dbconfig.database);










passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    connection.query("SELECT * FROM users WHERE id = ? ", [id],
        function (err, rows) {
            done(err, rows[0]);
        });
});


/* passport.use(
    'local-signup',



    new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },


        function (req, username, password, done) {
            connection.query("SELECT * FROM users WHERE username = ? ",
                [username],



                function (err, rows) {
                    if (err)
                        return done(err);
                    if (rows.length) {
                        return done(null, false, req.flash('signupMessage', 'That is already taken'));

                    } else {
                        var newUserMysql = {
                            username: username,
                            password: password
                        };

                        var insertQuery = "INSERT INTO users (username, password) values (?, ?)";

                        connection.query(insertQuery, [newUserMysql.username, newUserMysql.password],
                            function (err, rows) {
                                newUserMysql.id = rows.insertId;

                                return done(null, newUserMysql);
                            });
                    }
                });
        })
);
 */


passport.use(
    'local-login',



    new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },

        function (req, username, password, done) {
            connection.query("SELECT * FROM users WHERE username = ? ", [username],


                function (err, rows) {

                    if (err)
                        return done(err);
                    if (!rows.length) {
                        return done(null, false, req.flash('loginMessage', 'No User Found'));
                    }


                    if (password !== rows[0].password)
                        return done(null, false, req.flash('loginMessage', 'Wrong Password'));


                    return done(null, rows[0]);
                });
        })
);






//routes******************************








//admin*************************





app.get('/admin', function (req, res) {
    res.render('admin/login.ejs', {
        message: req.flash('loginMessage')
    });
});

app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/admin',
        failureFlash: true
    }),

    function (req, res) {
        if (req.body.remember) {
            req.session.cookie.maxAge = 1000 * 60 * 3;
        } else {
            req.session.cookie.expires = false;
        }
        res.redirect('admin/login.ejs');
    }
);
/* app.get('/signup', function (req, res) {
    res.render('admin/signup.ejs', {
        message: req.flash('signupMessage')
    });
});

app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
})); */


app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/admin');
});


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/admin');
}



app.get('/user', isLoggedIn, function (req, res) {
    connection.query("SELECT * FROM users", (err, result) => {
        res.render('admin/user', {

            items: result,
            users: req.user
        });
    });
});



app.post('/users', isLoggedIn, (req, res) => {
    var query = "UPDATE users SET  username = '" + req.body.username + "', password='" + req.body.password + "',email_address='" + req.body.email_address + "',first_name='" + req.body.first_name + "',last_name='" + req.body.last_name + "',about_me='" + req.body.about_me + "' WHERE id = 1 ";
    connection.query(query, (err, result) => {
        if (result.affectedRows) {
            res.redirect('/user');
        }
    });
});



message = ''
app.get('/user_profile', isLoggedIn, function (req, res) {
    res.render('admin/user_profile', message);
});

app.post('/user_upload', isLoggedIn, upload.single('user_profile'), function (req, res) {
    message: "Error! in image upload."
    if (!req.file) {
        console.log("No file received");
        message = "Error! in image upload."
        res.render('admin/user_profile', {
            message: message,
            status: 'danger'
        });

    } else {
        console.log('file received');
        console.log(req);
        var sql = "UPDATE users SET  name = '" + req.file.filename + "', type='" + req.file.mimetype + "',size='" + req.file.size + "' WHERE id = 1 ";
        var query = connection.query(sql, function (err, result) {
            console.log('inserted data');
        });
        res.render('admin/user_profile', {
            message: "Successfully! uploaded",
            status: 'success'
        });

    }
});

//admin*************************









//others*********************


app.get('/profile', isLoggedIn, (req, res) => {
    connection.query("Select * from members",
        (err, result) => {
            res.render('admin/profile', {
                members: result
            });
        });
});


message = ''
app.get('/members_post', isLoggedIn, (req, res) => {
    res.render('admin/members_post', message);
});


app.post('/members_post', isLoggedIn, upload.single('members_profile'), function (req, res) {
    message: "Error! in image upload."
    if (!req.file) {
        console.log("No file received");
        message = "Error! in image upload."
        res.render('admin/members_post', {
            message: message,
            status: 'danger'
        });

    } else {
        console.log('file received');
        console.log(req);
        var sql = "INSERT INTO `members`(`name`, `type`, `size`, `first_name`, `last_name`, `mob_no`) VALUES ('" + req.file.filename + "', '" + req.file.mimetype + "', '" + req.file.size + "', '" + req.body.first_name + "', '" + req.body.last_name + "', '" + req.body.mob_no + "')";

        var query = connection.query(sql, function (err, result) {
            console.log('inserted data');
        });
        res.render('admin/members_post', {
            message: "Successfully! uploaded",
            status: 'success'
        });

    }
});

app.get('/delete_members/:members_id', isLoggedIn, (req, res) => {
    var sql = "DELETE FROM members WHERE members_id = '" + req.params.members_id + "' ";
    connection.query(sql, function (err, result) {
        if (result.affectedRows) {
            res.redirect('/profile');
        }
    });
});














app.get('/events', isLoggedIn, (req, res) => {
    connection.query("Select * from events",
        (err, result) => {
            res.render('admin/events', {
                event: result
            });
        });
});


message = ''
app.get('/event_post', isLoggedIn, (req, res) => {
    res.render('admin/event_post', message);
});


app.post('/event_post', isLoggedIn, upload.single('profile'), function (req, res) {
    message: "Error! in image upload."
    if (!req.file) {
        console.log("No file received");
        message = "Error! in image upload."
        res.render('admin/event_post', {
            message: message,
            status: 'danger'
        });

    } else {
        console.log('file received');
        console.log(req);
        var sql = "INSERT INTO `events`(`name`, `type`, `size`, `content`, `title`,`updated_at`) VALUES ('" + req.file.filename + "', '" + req.file.mimetype + "', '" + req.file.size + "', '" + req.body.content + "', '" + req.body.title + "', '" + req.body.updated_at + "')";

        var query = connection.query(sql, function (err, result) {
            console.log('inserted data');
        });
        res.render('admin/event_post', {
            message: "Successfully! uploaded",
            status: 'success'
        });

    }
});

app.get('/delete_event/:event_id', isLoggedIn, (req, res) => {
    var sql = "DELETE FROM events WHERE event_id = '" + req.params.event_id + "' ";
    connection.query(sql, function (err, result) {
        if (result.affectedRows) {
            res.redirect('/events');
        }
    });
});


app.get('/edit_event/:event_id', isLoggedIn, (req, res) => {
    connection.query("SELECT * FROM events WHERE event_id = '" + req.params.event_id + "' ",
        (err, result) => {
            res.render('admin/edit_event', {
                events: result
            });
        });
});



app.post('/edit_event', isLoggedIn, (req, res) => {
    var query = "UPDATE events SET  content = '" + req.body.content + "', title='" + req.body.title + "',updated_at ='" + req.body.updated_at + "' WHERE event_id =  '" + req.body.event_id + "' ";
    connection.query(query, (err, result) => {
        if (result.affectedRows) {
            res.redirect('/events');
        }
    });
});
















app.get('/lumen_events', isLoggedIn, (req, res) => {
    connection.query("Select * from lumen_events",
        (err, result) => {
            res.render('admin/lumen_events', {
                lumen_event: result
            });
        });
});


message = ''
app.get('/lumen_event_post', isLoggedIn, (req, res) => {
    res.render('admin/lumen_event_post', message);
});


app.post('/lumen_event_post', isLoggedIn, upload.single('lumen_profile'), function (req, res) {
    message: "Error! in image upload."
    if (!req.file) {
        console.log("No file received");
        message = "Error! in image upload."
        res.render('admin/lumen_event_post', {
            message: message,
            status: 'danger'
        });

    } else {
        console.log('file received');
        console.log(req);
        var sql = "INSERT INTO `lumen_events`(`lumen_name`, `lumen_type`, `lumen_size`, `lumen_content`, `lumen_title`, `lumen_updated_at`) VALUES ('" + req.file.filename + "', '" + req.file.mimetype + "', '" + req.file.size + "', '" + req.body.lumen_content + "', '" + req.body.lumen_title + "', '" + req.body.lumen_updated_at + "')";

        var query = connection.query(sql, function (err, result) {
            console.log('inserted data');
        });
        res.render('admin/lumen_event_post', {
            message: "Successfully! uploaded",
            status: 'success'
        });

    }
});

app.get('/lumen_delete_event/:event_id', isLoggedIn, (req, res) => {
    var sql = "DELETE FROM lumen_events WHERE lumen_event_id = '" + req.params.event_id + "' ";
    connection.query(sql, function (err, result) {
        if (result.affectedRows) {
            res.redirect('/lumen_events');
        }
    });
});


app.get('/lumen_edit_event/:event_id', isLoggedIn, (req, res) => {
    connection.query("SELECT * FROM lumen_events WHERE lumen_event_id = '" + req.params.event_id + "' ",
        (err, result) => {
            res.render('admin/lumen_edit_event', {
                lumen_events: result
            });
        });
});



app.post('/lumen_edit_event', isLoggedIn, (req, res) => {
    var query = "UPDATE lumen_events SET  lumen_content = '" + req.body.lumen_content + "', lumen_title='" + req.body.lumen_title + "', lumen_updated_at='" + req.body.lumen_updated_at + "' WHERE lumen_event_id =  '" + req.body.lumen_event_id + "' ";
    connection.query(query, (err, result) => {
        if (result.affectedRows) {
            res.redirect('/lumen_events');
        }
    });
});















app.get('/audio', isLoggedIn, (req, res) => {
    connection.query("Select * from audio_events",
        (err, result) => {
            res.render('admin/audio', {
                audio_event: result
            });
        });
});


message = ''
app.get('/audio_event_post', isLoggedIn, (req, res) => {
    res.render('admin/audio_event_post', message);
});


app.post('/audio_event_post', isLoggedIn, upload.single('audio_profile'), function (req, res) {
    message: "Error! in image upload."
    if (!req.file) {
        console.log("No file received");
        message = "Error! in image upload."
        res.render('admin/audio_event_post', {
            message: message,
            status: 'danger'
        });

    } else {
        console.log('file received');
        console.log(req);
        var sql = "INSERT INTO `audio_events`(`audio_name`, `audio_type`, `audio_size`, `audio_content`, `audio_title`, `audio_updated_at`) VALUES ('" + req.file.filename + "', '" + req.file.mimetype + "', '" + req.file.size + "', '" + req.body.audio_content + "', '" + req.body.audio_title + "', '" + req.body.audio_updated_at + "')";

        var query = connection.query(sql, function (err, result) {
            console.log('inserted data');
        });
        res.render('admin/audio_event_post', {
            message: "Successfully! uploaded",
            status: 'success'
        });

    }
});

app.get('/audio_delete_event/:audio_event_id', isLoggedIn, (req, res) => {
    var sql = "DELETE FROM audio_events WHERE audio_event_id = '" + req.params.audio_event_id + "' ";
    connection.query(sql, function (err, result) {
        if (result.affectedRows) {
            res.redirect('/audio');
        }
    });
});


app.get('/audio_edit_event/:audio_event_id', isLoggedIn, (req, res) => {
    connection.query("SELECT * FROM audio_events WHERE audio_event_id = '" + req.params.audio_event_id + "' ",
        (err, result) => {
            res.render('admin/audio_edit_event', {
                audio_events: result
            });
        });
});



app.post('/audio_edit_event', isLoggedIn, (req, res) => {
    var query = "UPDATE audio_events SET  audio_content = '" + req.body.audio_content + "', audio_title='" + req.body.audio_title + "', audio_updated_at='" + req.body.audio_updated_at + "' WHERE audio_event_id =  '" + req.body.audio_event_id + "' ";
    connection.query(query, (err, result) => {
        if (result.affectedRows) {
            res.redirect('/audio');
        }
    });
});


















app.get('/garelly', isLoggedIn, (req, res) => {
    connection.query("Select * from garelly",
        (err, result) => {
            res.render('admin/garelly', {
                garelly: result
            });
        });
});

message = ''
app.get('/garelly_post', isLoggedIn, (req, res) => {
    res.render('admin/garelly_post', message);
});


app.post('/api/v1/upload', isLoggedIn, upload.single('profile'), function (req, res) {
    message: "Error! in image upload."
    if (!req.file) {
        console.log("No file received");
        message = "Error! in image upload."
        res.render('admin/garelly_post', {
            message: message,
            status: 'danger'
        });

    } else {
        console.log('file received');
        console.log(req);
        var sql = "INSERT INTO `garelly`(`name`, `type`, `size`) VALUES ('" + req.file.filename + "', '" + req.file.mimetype + "', '" + req.file.size + "')";

        var query = connection.query(sql, function (err, result) {
            console.log('inserted data');
        });
        res.render('admin/garelly_post', {
            message: "Successfully! uploaded",
            status: 'success'
        });

    }
});

app.get('/delete_garelly/:name', isLoggedIn, (req, res) => {
    var sql = "DELETE FROM garelly WHERE name = '" + req.params.name + "' ";
    connection.query(sql, function (err, result) {
        if (result.affectedRows) {
            res.redirect('/garelly');
        }
    });
});










app.get('/testimony', isLoggedIn, (req, res) => {
    connection.query("Select * from testimony",
        (err, result) => {
            res.render('admin/testimony', {
                testimony: result,
            });
        });
});





app.get('/user', isLoggedIn, (req, res) => {
    res.render('admin/user');
});
//others*********************


//post******************


app.post('/testimoni', (req, res) => {
    var query = "INSERT INTO testimony values(null,'" + req.body.testimony_email + "','" + req.body.testimony_name + "','" + req.body.testimony_content + "')";
    connection.query(query,
        (err, result) => {
            res.redirect('/');
        });
});

app.get('/delete_testimony/:testimony_id', isLoggedIn, (req, res) => {
    var sql = "DELETE FROM testimony WHERE testimony_id = '" + req.params.testimony_id + "' ";
    connection.query(sql, function (err, result) {
        if (result.affectedRows) {
            res.redirect('/testimony');
        }
    });
});













app.get('/dail_word', isLoggedIn, (req, res) => {
    connection.query("Select * from dail_word",
        (err, result) => {
            res.render('admin/dail_word', {
                dail_words: result,
            });
        });
});


app.get('/add_dail_post', isLoggedIn, (req, res) => {
    res.render('admin/add_dail_word');
});


app.post('/add_dail_post', isLoggedIn, (req, res) => {
    var query = "INSERT INTO dail_word values(null,'" + req.body.dail_word_title + "','" + req.body.dail_word_content + "','" + req.body.dail_word_date + "')";
    connection.query(query,
        (err, result) => {
            res.redirect('/dail_word');
        });

});

app.get('/edit_dail_word/:dail_word_id', isLoggedIn, (req, res) => {
    connection.query("SELECT * FROM dail_word WHERE dail_word_id = '" + req.params.dail_word_id + "' ",
        (err, result) => {

            res.render('admin/edit_dail_word', {
                dail_word: result
            });
        });

});

app.post('/edit_dail_word/', isLoggedIn, (req, res) => {
    var query = "UPDATE dail_word SET  dail_word_title = '" + req.body.dail_word_title + "',dail_word_content ='" + req.body.dail_word_content + "',dail_word_date ='" + req.body.dail_word_date + "' WHERE dail_word_id = '" + req.body.dail_word_id + "' ";
    connection.query(query, (err, result) => {
        if (result.affectedRows) {
            res.redirect('/dail_word');
        }
    });
});


app.get('/delete_dail_word/:dail_word_id', isLoggedIn, (req, res) => {
    var sql = "DELETE FROM dail_word WHERE dail_word_id = '" + req.params.dail_word_id + "' ";
    connection.query(sql, function (err, result) {
        if (result.affectedRows) {
            res.redirect('/dail_word');
        }
    });
});



















app.get('/cantique', isLoggedIn, (req, res) => {
    connection.query("Select * from cantique",
        (err, result) => {
            res.render('admin/cantique', {
                cantique: result,
            });
        });
});


app.get('/add_cantique', (req, res) => {
    res.render('admin/add_cantique');
});


app.post('/add_cantique', isLoggedIn, (req, res) => {
    var query = "INSERT INTO cantique values(null,'" + req.body.cantique_title + "','" + req.body.cantique_content + "','" + req.body.cantique_date + "')";
    connection.query(query,
        (err, result) => {
            res.redirect('/cantique');
        });

});

app.get('/edit_cantique/:cantique_id', isLoggedIn, (req, res) => {
    connection.query("SELECT * FROM cantique WHERE cantique_id = '" + req.params.cantique_id + "' ",
        (err, result) => {

            res.render('admin/edit_cantique', {
                cantique: result
            });
        });

});

app.post('/edit_cantique/', isLoggedIn, (req, res) => {
    var query = "UPDATE cantique SET  cantique_title = '" + req.body.cantique_title + "',cantique_content ='" + req.body.cantique_content + "',cantique_date ='" + req.body.cantique_date + "' WHERE cantique_id = '" + req.body.cantique_id + "' ";
    connection.query(query, (err, result) => {
        if (result.affectedRows) {
            res.redirect('/cantique');
        }
    });
});


app.get('/delete_cantique/:cantique_id', isLoggedIn, (req, res) => {
    var sql = "DELETE FROM cantique WHERE cantique_id = '" + req.params.cantique_id + "' ";
    connection.query(sql, function (err, result) {
        if (result.affectedRows) {
            res.redirect('/cantique');
        }
    });
});














app.get('/choir_songs', isLoggedIn, (req, res) => {
    connection.query("Select * from choir_songs",
        (err, result) => {
            res.render('admin/choir_songs', {
                choir_songs: result,
            });
        });
});


app.get('/add_choir_songs', isLoggedIn, (req, res) => {
    res.render('admin/add_choir_songs');
});


app.post('/add_choir_songs', isLoggedIn, (req, res) => {
    var query = "INSERT INTO choir_songs values(null,'" + req.body.choir_songs_title + "','" + req.body.choir_songs_content + "','" + req.body.choir_songs_date + "')";
    connection.query(query,
        (err, result) => {
            res.redirect('/choir_songs');
        });

});

app.get('/edit_choir_songs/:choir_songs_id', isLoggedIn, (req, res) => {
    connection.query("SELECT * FROM choir_songs WHERE choir_songs_id = '" + req.params.choir_songs_id + "' ",
        (err, result) => {

            res.render('admin/edit_choir_songs', {
                choir_songs: result
            });
        });

});

app.post('/edit_choir_songs/', isLoggedIn, (req, res) => {
    var query = "UPDATE choir_songs SET  choir_songs_title = '" + req.body.choir_songs_title + "',choir_songs_content ='" + req.body.choir_songs_content + "',choir_songs_date ='" + req.body.choir_songs_date + "' WHERE choir_songs_id = '" + req.body.choir_songs_id + "' ";
    connection.query(query, (err, result) => {
        if (result.affectedRows) {
            res.redirect('/choir_songs');
        }
    });
});


app.get('/delete_choir_songs/:choir_songs_id', isLoggedIn, (req, res) => {
    var sql = "DELETE FROM choir_songs WHERE choir_songs_id = '" + req.params.choir_songs_id + "' ";
    connection.query(sql, function (err, result) {
        if (result.affectedRows) {
            res.redirect('/choir_songs');
        }
    });
});




















app.get('/worship_songs', isLoggedIn, (req, res) => {
    connection.query("Select * from worship_songs",
        (err, result) => {
            res.render('admin/worship_songs', {
                worship_songs: result,
            });
        });
});


app.get('/add_worship_songs', isLoggedIn, (req, res) => {
    res.render('admin/add_worship_songs');
});


app.post('/add_worship_songs', isLoggedIn, (req, res) => {
    var query = "INSERT INTO worship_songs values(null,'" + req.body.worship_songs_title + "','" + req.body.worship_songs_content + "','" + req.body.worship_songs_date + "')";
    connection.query(query,
        (err, result) => {
            res.redirect('/worship_songs');
        });

});

app.get('/edit_worship_songs/:worship_songs_id', isLoggedIn, (req, res) => {
    connection.query("SELECT * FROM worship_songs WHERE worship_songs_id = '" + req.params.worship_songs_id + "' ",
        (err, result) => {

            res.render('admin/edit_worship_songs', {
                worship_songs: result
            });
        });

});

app.post('/edit_worship_songs/', isLoggedIn, (req, res) => {
    var query = "UPDATE worship_songs SET  worship_songs_title = '" + req.body.worship_songs_title + "',worship_songs_content ='" + req.body.worship_songs_content + "', worship_songs_date = '" + req.body.worship_songs_date + "' WHERE worship_songs_id = '" + req.body.worship_songs_id + "' ";
    connection.query(query, (err, result) => {
        if (result.affectedRows) {
            res.redirect('/worship_songs');
        }
    });
});


app.get('/delete_worship_songs/:worship_songs_id', isLoggedIn, (req, res) => {
    var sql = "DELETE FROM worship_songs WHERE worship_songs_id = '" + req.params.worship_songs_id + "' ";
    connection.query(sql, function (err, result) {
        if (result.affectedRows) {
            res.redirect('/worship_songs');
        }
    });
});









app.get('/lumen_songs', isLoggedIn, (req, res) => {
    connection.query("Select * from lumen_songs",
        (err, result) => {
            res.render('admin/lumen_songs', {
                lumen_songs: result,
            });
        });
});


app.get('/add_lumen_songs', isLoggedIn, (req, res) => {
    res.render('admin/add_lumen_songs');
});


app.post('/add_lumen_songs', isLoggedIn, (req, res) => {
    var query = "INSERT INTO lumen_songs values(null,'" + req.body.lumen_songs_title + "','" + req.body.lumen_songs_content + "','" + req.body.lumen_songs_date + "')";
    connection.query(query,
        (err, result) => {
            res.redirect('/lumen_songs');
        });

});

app.get('/edit_lumen_songs/:lumen_songs_id', isLoggedIn, (req, res) => {
    connection.query("SELECT * FROM lumen_songs WHERE lumen_songs_id = '" + req.params.lumen_songs_id + "' ",
        (err, result) => {

            res.render('admin/edit_lumen_songs', {
                lumen_songs: result
            });
        });

});

app.post('/edit_lumen_songs/', isLoggedIn, (req, res) => {
    var query = "UPDATE lumen_songs SET  lumen_songs_title = '" + req.body.lumen_songs_title + "',lumen_songs_content ='" + req.body.lumen_songs_content + "',lumen_songs_date ='" + req.body.lumen_songs_date + "' WHERE lumen_songs_id = '" + req.body.lumen_songs_id + "' ";
    connection.query(query, (err, result) => {
        if (result.affectedRows) {
            res.redirect('/lumen_songs');
        }
    });
});


app.get('/delete_lumen_songs/:lumen_songs_id', isLoggedIn, (req, res) => {
    var sql = "DELETE FROM lumen_songs WHERE lumen_songs_id = '" + req.params.lumen_songs_id + "' ";
    connection.query(sql, function (err, result) {
        if (result.affectedRows) {
            res.redirect('/lumen_songs');
        }
    });
});












app.get('/sunday_preachings', isLoggedIn, (req, res) => {
    connection.query("Select * from sunday_preachings",
        (err, result) => {
            res.render('admin/sunday_preachings', {
                sunday_preachings: result,
            });
        });
});


app.get('/add_sunday_preachings', isLoggedIn, (req, res) => {
    res.render('admin/add_sunday_preachings');
});


app.post('/add_sunday_preachings', isLoggedIn, (req, res) => {
    var query = "INSERT INTO sunday_preachings values(null,'" + req.body.sunday_preachings_title + "','" + req.body.sunday_preachings_content + "','" + req.body.sunday_preachings_date + "')";
    connection.query(query,
        (err, result) => {
            res.redirect('/sunday_preachings');
        });

});

app.get('/edit_sunday_preachings/:sunday_preachings_id', isLoggedIn, (req, res) => {
    connection.query("SELECT * FROM sunday_preachings WHERE sunday_preachings_id = '" + req.params.sunday_preachings_id + "' ",
        (err, result) => {

            res.render('admin/edit_sunday_preachings', {
                sunday_preachings: result
            });
        });

});

app.post('/edit_sunday_preachings/', isLoggedIn, (req, res) => {
    var query = "UPDATE sunday_preachings SET  sunday_preachings_title = '" + req.body.sunday_preachings_title + "',sunday_preachings_content ='" + req.body.sunday_preachings_content + "',sunday_preachings_date ='" + req.body.sunday_preachings_date + "' WHERE sunday_preachings_id = '" + req.body.sunday_preachings_id + "' ";
    connection.query(query, (err, result) => {
        if (result.affectedRows) {
            res.redirect('/sunday_preachings');
        }
    });
});


app.get('/delete_sunday_preachings/:sunday_preachings_id', isLoggedIn, (req, res) => {
    var sql = "DELETE FROM sunday_preachings WHERE sunday_preachings_id = '" + req.params.sunday_preachings_id + "' ";
    connection.query(sql, function (err, result) {
        if (result.affectedRows) {
            res.redirect('/sunday_preachings');
        }
    });
})

















app.get('/background', isLoggedIn, (req, res) => {
    connection.query("Select * from background",
        (err, result) => {
            res.render('admin/background', {
                backgrounds: result,
            });
        });
});


app.get('/add_background', isLoggedIn, (req, res) => {
    res.render('admin/add_background');
});


app.post('/add_background', isLoggedIn, (req, res) => {
    var query = "INSERT INTO background values(null,'" + req.body.background_title + "','" + req.body.background_content + "','" + req.body.background_date + "')";
    connection.query(query,
        (err, result) => {
            res.redirect('/background');
        });

});

app.get('/edit_background/:background_id', isLoggedIn, (req, res) => {
    connection.query("SELECT * FROM background WHERE background_id = '" + req.params.background_id + "' ",
        (err, result) => {

            res.render('admin/edit_background', {
                background: result
            });
        });

});

app.post('/edit_background/', isLoggedIn, (req, res) => {
    var query = "UPDATE background SET  background_title = '" + req.body.background_title + "',background_content ='" + req.body.background_content + "',background_date ='" + req.body.background_date + "' WHERE background_id = '" + req.body.background_id + "' ";
    connection.query(query, (err, result) => {
        if (result.affectedRows) {
            res.redirect('/background');
        }
    });
});


app.get('/delete_background/:background_id', isLoggedIn, (req, res) => {
    var sql = "DELETE FROM background WHERE background_id = '" + req.params.background_id + "' ";
    connection.query(sql, function (err, result) {
        if (result.affectedRows) {
            res.redirect('/background');
        }
    });
});













app.get('/vision', isLoggedIn, (req, res) => {
    connection.query("Select * from vision",
        (err, result) => {
            res.render('admin/vision', {
                visions: result,
            });
        });
});


app.get('/add_vision', isLoggedIn, (req, res) => {
    res.render('admin/add_vision');
});


app.post('/add_vision', isLoggedIn, (req, res) => {
    var query = "INSERT INTO vision values(null,'" + req.body.vision_title + "','" + req.body.vision_content + "','" + req.body.vision_date + "')";
    connection.query(query,
        (err, result) => {
            res.redirect('/vision');
        });

});

app.get('/edit_vision/:vision_id', isLoggedIn, (req, res) => {
    connection.query("SELECT * FROM vision WHERE vision_id = '" + req.params.vision_id + "' ",
        (err, result) => {

            res.render('admin/edit_vision', {
                vision: result
            });
        });

});

app.post('/edit_vision/', isLoggedIn, (req, res) => {
    var query = "UPDATE vision SET  vision_title = '" + req.body.vision_title + "',vision_content ='" + req.body.vision_content + "',vision_date ='" + req.body.vision_date + "' WHERE vision_id = '" + req.body.vision_id + "' ";
    connection.query(query, (err, result) => {
        if (result.affectedRows) {
            res.redirect('/vision');
        }
    });
});


app.get('/delete_vision/:vision_id', isLoggedIn, (req, res) => {
    var sql = "DELETE FROM vision WHERE vision_id = '" + req.params.vision_id + "' ";
    connection.query(sql, function (err, result) {
        if (result.affectedRows) {
            res.redirect('/vision');
        }
    });
});















app.get('/mission', isLoggedIn, (req, res) => {
    connection.query("Select * from mission",
        (err, result) => {
            res.render('admin/mission', {
                missions: result,
            });
        });
});


app.get('/add_mission', isLoggedIn, (req, res) => {
    res.render('admin/add_mission');
});


app.post('/add_mission', isLoggedIn, (req, res) => {
    var query = "INSERT INTO mission values(null,'" + req.body.mission_title + "','" + req.body.mission_content + "','" + req.body.mission_date + "')";
    connection.query(query,
        (err, result) => {
            res.redirect('/mission');
        });

});

app.get('/edit_mission/:mission_id', isLoggedIn, (req, res) => {
    connection.query("SELECT * FROM mission WHERE mission_id = '" + req.params.mission_id + "' ",
        (err, result) => {

            res.render('admin/edit_mission', {
                mission: result
            });
        });

});

app.post('/edit_mission/', isLoggedIn, (req, res) => {
    var query = "UPDATE mission SET  mission_title = '" + req.body.mission_title + "',mission_content ='" + req.body.mission_content + "',mission_date ='" + req.body.mission_date + "' WHERE mission_id = '" + req.body.mission_id + "' ";
    connection.query(query, (err, result) => {
        if (result.affectedRows) {
            res.redirect('/mission');
        }
    });
});


app.get('/delete_mission/:mission_id', isLoggedIn, (req, res) => {
    var sql = "DELETE FROM mission WHERE mission_id = '" + req.params.mission_id + "' ";
    connection.query(sql, function (err, result) {
        if (result.affectedRows) {
            res.redirect('/mission');
        }
    });
});


















app.get('/motto', isLoggedIn, (req, res) => {
    connection.query("Select * from motto",
        (err, result) => {
            res.render('admin/motto', {
                mottos: result,
            });
        });
});


app.get('/add_motto', isLoggedIn, (req, res) => {
    res.render('admin/add_motto');
});


app.post('/add_motto', isLoggedIn, (req, res) => {
    var query = "INSERT INTO motto values(null,'" + req.body.motto_title + "','" + req.body.motto_content + "','" + req.body.motto_date + "')";
    connection.query(query,
        (err, result) => {
            res.redirect('/motto');
        });

});

app.get('/edit_motto/:motto_id', isLoggedIn, (req, res) => {
    connection.query("SELECT * FROM motto WHERE motto_id = '" + req.params.motto_id + "' ",
        (err, result) => {

            res.render('admin/edit_motto', {
                motto: result
            });
        });

});

app.post('/edit_motto/', isLoggedIn, (req, res) => {
    var query = "UPDATE motto SET  motto_title = '" + req.body.motto_title + "',motto_content ='" + req.body.motto_content + "',motto_date ='" + req.body.motto_date + "' WHERE motto_id = '" + req.body.motto_id + "' ";
    connection.query(query, (err, result) => {
        if (result.affectedRows) {
            res.redirect('/motto');
        }
    });
});


app.get('/delete_motto/:motto_id', isLoggedIn, (req, res) => {
    var sql = "DELETE FROM motto WHERE motto_id = '" + req.params.motto_id + "' ";
    connection.query(sql, function (err, result) {
        if (result.affectedRows) {
            res.redirect('/motto');
        }
    });
});
















app.listen(8080, () => {
    console.log("port 8080")
});