using Microsoft.AspNetCore.Mvc;
using potters_patrol.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace potters_patrol.Controllers
{
    public class ForumController : Controller
    {
        ForumAccessLayers objforum = new ForumAccessLayers();

        [HttpGet]
        [Route("api/Forum/Index")]
        public IEnumerable<Forum> Index()
        {
            return objforum.GetAllForums();
        }

        [HttpGet]
        [Route("api/ForumMessages/Index")]
        public IEnumerable<ForumMessages> MessagesIndex()
        {
            return objforum.GetAllForumMessages();
        }
        [HttpPost]
        [Route("api/Forum/Create")]
        public int Create(Forum forum)
        {
            return objforum.AddForum(forum);
        }
        [HttpPost]
        [Route("api/ForumMessages/Create")]
        public int CreateMessage(ForumMessages forumMessages)
        {
            return objforum.AddForumMessage(forumMessages);
        }
        [HttpGet]
        [Route("api/ForumMessages/Details/{id}")]
        public ForumMessages Details(int id)
        {
            return objforum.GetForumMessagesData(id);
        }
        [HttpDelete]
        [Route("api/Message/Delete/{id}")]
        public int Delete_(int id)
        {
            return objforum.DeleteMessage(id);
        }
        [HttpDelete]
        [Route("api/Forum/Delete/{id}")]
        public int Delete(int id)
        {
            return objforum.DeleteForum(id);
        }
        [HttpGet]
        [Route("api/Forum/Details/{id}")]
        public Forum Details_(int id)
        {
            return objforum.GetForumData(id);
        }

    }
}
