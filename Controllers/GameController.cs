using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace ReactApp.Controllers
{
    public class GamesController : Controller
    {
        GameAccessLayer objgame = new GameAccessLayer();

        [HttpGet]
        [Route("api/Game/Index")]
        public IEnumerable<Game> Index()
        {
            return objgame.GetAllGames();
        }

        [HttpPost]
        [Route("api/Game/Create")]
        public int Create(Game game)
        {
            return objgame.AddGame(game);
        }

        [HttpGet]
        [Route("api/Game/Details/{id}")]
        public Game Details(int id)
        {
            return objgame.GetGameData(id);
        }

        [HttpPut]
        [Route("api/Game/Edit")]
        public int Edit(Game game)
        {
            return objgame.UpdateGame(game);
        }

        [HttpDelete]
        [Route("api/Game/Delete/{id}")]
        public int Delete(int id)
        {
            return objgame.DeleteGame(id);
        }
    }
}