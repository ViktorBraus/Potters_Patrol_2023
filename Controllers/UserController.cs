using Microsoft.AspNetCore.Mvc;
using potters_patrol.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace potters_patrol.Controllers
{
    public class UserController : Controller
    {
        UserAccessLayer objuser = new UserAccessLayer();

        [HttpGet]
        [Route("api/User/Index")]
        public IEnumerable<User> Index()
        {
            return objuser.GetAllUsers();
        }
        [HttpGet]
        [Route("api/UserContent/Index")]
        public IEnumerable<UserContent> UserContentIndex()
        {
            return objuser.GetAllUsersContent();
        }
        [HttpPost]
        [Route("api/UserContent/Create")]
        public int Create(UserContent userContent)
        {
            return objuser.AddUserContent(userContent);
        }
        [HttpPut]
        [Route("api/UserContent/Edit")]
        public int Edit(UserContent userContent)
        {
            return objuser.UpdateUserContent(userContent);
        }
    }
}
