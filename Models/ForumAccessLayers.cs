using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace potters_patrol.Models
{
    public class ForumAccessLayers
    {
        myTestDBContext db = new myTestDBContext();

        public IEnumerable<Forum> GetAllForums()
        {
            try
            {
                return db.Forum.ToList();
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<ForumMessages> GetAllForumMessages()
        {
            try
            {
                return db.ForumMessages.ToList();
            }
            catch
            {
                throw;
            }
        }
        public ForumMessages GetForumMessagesData(int id)
        {
            try
            {
                ForumMessages forum = db.ForumMessages.Find(id);
                return forum;
            }
            catch
            {
                throw;
            }
        }
        //To Add new employee record   
        public int AddForum(Forum forum)
        {
            try
            {
                db.Forum.Add(forum);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        public int DeleteForum(int id)
        {
            try
            {
                Forum f = db.Forum.Find(id);
                db.Forum.Remove(f);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        public int DeleteMessage(int id)
        {
            try
            {
                ForumMessages f = db.ForumMessages.Find(id);
                db.ForumMessages.Remove(f);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        public int AddForumMessage(ForumMessages forumMessages)
        {
            try
            {
                db.ForumMessages.Add(forumMessages);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar employee  
        public int UpdateForum(Forum forum)
        {
            try
            {
                db.Entry(forum).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular employee  
        public Forum GetForumData(int id)
        {
            try
            {
                Forum forum = db.Forum.Find(id);
                return forum;
            }
            catch
            {
                throw;
            }
        }
    }
}
