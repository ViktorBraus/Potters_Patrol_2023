using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Models
{
    public class GameAccessLayer
    {
        myTestDBContext db = new myTestDBContext();

        public IEnumerable<Game> GetAllGames()
        {
            try
            {
                return db.Games.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new employee record   
        public int AddGame(Game game)
        {
            try
            {
                db.Games.Add(game);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar employee  
        public int UpdateGame(Game game)
        {
            try
            {
                db.Entry(game).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular employee  
        public Game GetGameData(int id)
        {
            try
            {
                Game game = db.Games.Find(id);
                return game;
            }
            catch
            {
                throw;
            }
        }
        public byte[] GetImageData_Game(int id)
        {
            try
            {
                Game game = db.Games.Find(id);
                return game.Game_Image;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular employee  
        public int DeleteGame(int id)
        {
            try
            {//emp == b
                Game b = db.Games.Find(id);
                db.Games.Remove(b);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
