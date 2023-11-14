using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace potters_patrol.Models
{
    public class UserAccessLayer
    {
        myTestDBContext db = new myTestDBContext();

        public IEnumerable<User> GetAllUsers()
        {
            try
            {
                return db.User.ToList();
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<UserContent> GetAllUsersContent()
        {
            try
            {
                return db.UserContent.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new employee record
        public int AddUserContent(UserContent userContent)
        {
            try
            {
                db.UserContent.Add(userContent);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        public int UpdateUserContent(UserContent userContent)
        {
            try
            {
                db.Entry(userContent).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }
        public byte[] GetImageData(int id)
        {
            try
            {
                User user = db.User.Find(id);
                return user.ProfileImage;
            }
            catch
            {
                throw;
            }
        }

       
    }
}
