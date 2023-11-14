"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//          <Route path='/registry' component={Regisgtry} />
//<Route path='/login' component={Login} />
var auth0_react_1 = require("@auth0/auth0-react");
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = require("./components/adminPage/Layout");
require("./App.css");
var AddBook_1 = require("./components/adminPage/AddBook");
var AddGame_1 = require("./components/adminPage/AddGame");
var AddMovie_1 = require("./components/adminPage/AddMovie");
var FetchBook_1 = require("./components/adminPage/FetchBook");
var FetchGame_1 = require("./components/adminPage/FetchGame");
var FetchMovie_1 = require("./components/adminPage/FetchMovie");
var FetchForum_1 = require("./components/adminPage/FetchForum");
var FetchMessages_1 = require("./components/adminPage/FetchMessages");
var Books_1 = require("./components/content/Books");
var content_1 = require("./components/content/content");
var Games_1 = require("./components/content/Games");
var Movies_1 = require("./components/content/Movies");
var About_1 = require("./About");
var Home_1 = require("./components/Home/Home");
var HomeAfter_1 = require("./components/Home/HomeAfter");
var Profile_1 = require("./components/profile/Profile");
var FacultyTest_1 = require("./components/test/FacultyTest");
var MainTest_1 = require("./components/test/MainTest");
var PatronusTest_1 = require("./components/test/PatronusTest");
var result_1 = require("./components/test/result");
var WandTest_1 = require("./components/test/WandTest");
var TestSection_1 = require("./components/test/TestSection");
var footer_1 = require("./footer");
var navbar_1 = require("./navbar");
var forumpage_1 = require("./components/Forum/forumpage");
var CreateDiscussion_1 = require("./components/Forum/CreateDiscussion");
var Messages_1 = require("./components/Forum/Messages");
var App = function () {
    var isAuthenticated = auth0_react_1.useAuth0().isAuthenticated;
    var content = function () {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { path: '/addMovie', component: AddMovie_1.AddMovie }),
                React.createElement(react_router_dom_1.Route, { path: '/addBook', component: AddBook_1.AddBook }),
                React.createElement(react_router_dom_1.Route, { path: '/addGame', component: AddGame_1.AddGame }),
                React.createElement(react_router_dom_1.Route, { path: '/fetchbook', component: FetchBook_1.FetchBook }),
                React.createElement(react_router_dom_1.Route, { path: '/fetchmovie', component: FetchMovie_1.FetchMovie }),
                React.createElement(react_router_dom_1.Route, { path: '/fetchgame', component: FetchGame_1.FetchGame }),
                React.createElement(react_router_dom_1.Route, { path: '/fetchForum', component: FetchForum_1.FetchForum }),
                React.createElement(react_router_dom_1.Route, { path: '/messages_/edit/:forumid', component: FetchMessages_1.FetchMessages }),
                React.createElement(react_router_dom_1.Route, { path: '/Layout', component: Layout_1.Layout }),
                React.createElement(react_router_dom_1.Route, { path: '/Book/edit/:bookid', component: AddBook_1.AddBook }),
                React.createElement(react_router_dom_1.Route, { path: '/Movie/edit/:movieid', component: AddMovie_1.AddMovie }),
                React.createElement(react_router_dom_1.Route, { path: '/Game/edit/:gameid', component: AddGame_1.AddGame }),
                React.createElement(react_router_dom_1.Route, { path: '/content/books/:bookid', component: content_1.Content }),
                React.createElement(react_router_dom_1.Route, { path: '/content/games/:gameid', component: content_1.Content }),
                React.createElement(react_router_dom_1.Route, { path: '/content/movies/:movieid', component: content_1.Content }),
                React.createElement(react_router_dom_1.Route, { path: '/About', component: About_1.default }),
                React.createElement(react_router_dom_1.Route, { path: '/Books', component: Books_1.Books }),
                React.createElement(react_router_dom_1.Route, { path: '/Games', component: Games_1.Games }),
                React.createElement(react_router_dom_1.Route, { path: '/Movies', component: Movies_1.Movies }),
                React.createElement(react_router_dom_1.Route, { path: '/HomeAfter', component: HomeAfter_1.HomeAfter }),
                React.createElement(react_router_dom_1.Route, { path: '/Test/entring/:testId', component: MainTest_1.MainTest }),
                React.createElement(react_router_dom_1.Route, { path: '/Home', component: Home_1.Home }),
                React.createElement(react_router_dom_1.Route, { path: '/testSection/entering/:testid', component: MainTest_1.MainTest }),
                React.createElement(react_router_dom_1.Route, { path: '/faculty', component: FacultyTest_1.FacultyTest }),
                React.createElement(react_router_dom_1.Route, { path: '/testSection', component: TestSection_1.TestSection }),
                React.createElement(react_router_dom_1.Route, { path: '/wand', component: WandTest_1.WandTest }),
                React.createElement(react_router_dom_1.Route, { path: '/result', component: result_1.Result }),
                React.createElement(react_router_dom_1.Route, { path: '/patronus', component: PatronusTest_1.PatronusTest }),
                React.createElement(react_router_dom_1.Route, { path: '/profile', component: Profile_1.Profile }),
                React.createElement(react_router_dom_1.Route, { path: '/forum', component: forumpage_1.ForumBlock }),
                React.createElement(react_router_dom_1.Route, { path: '/createDiscussion', component: CreateDiscussion_1.CreateDiscussion }),
                React.createElement(react_router_dom_1.Route, { path: '/messages/:forumid', component: Messages_1.Messages }),
                React.createElement(react_router_dom_1.Route, { path: '/', component: isAuthenticated ? HomeAfter_1.HomeAfter : Home_1.Home }))));
    };
    return (React.createElement("div", null,
        React.createElement("head", null,
            React.createElement("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" }),
            React.createElement("script", { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" }),
            React.createElement("meta", { charSet: "utf-8" })),
        React.createElement(navbar_1.NavBar, null),
        React.createElement("main", null, content()),
        footer_1.default()));
};
exports.default = App;
//# sourceMappingURL=App.js.map